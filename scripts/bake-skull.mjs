// Bake the approved socket/nose shading without changing positions, normals or the jaw rig.
// Run after prepare-skull.mjs: node scripts/bake-skull.mjs
import fs from "node:fs";
import { MathUtils } from "three";

const source = fs.readFileSync(new URL("../public/models/scattering-skull.glb", import.meta.url));
const jsonLength = source.readUInt32LE(12);
const document = JSON.parse(source.subarray(20, 20 + jsonLength));
const binStart = 28 + jsonLength;
const binary = source.subarray(binStart, binStart + source.readUInt32LE(20 + jsonLength));
const chunks = [binary];
let offset = binary.length;
let vertices = 0;
for (const node of document.nodes) {
  if (node.mesh === undefined) continue;
  for (const primitive of document.meshes[node.mesh].primitives) {
    const accessor = document.accessors[primitive.attributes.POSITION];
    const view = document.bufferViews[accessor.bufferView];
    if (accessor.componentType !== 5126 || accessor.type !== "VEC3") throw Error("Expected float positions");
    const colors = Buffer.alloc(accessor.count * 4);
    const base = (view.byteOffset || 0) + (accessor.byteOffset || 0);
    for (let i = 0; i < accessor.count; i++) {
      const p = base + i * (view.byteStride || 12);
      const x = binary.readFloatLE(p), y = binary.readFloatLE(p + 4), z = binary.readFloatLE(p + 8);
      const radius = Math.hypot((Math.abs(x) - 0.04) / 0.029, (y - 0.025) / 0.034);
      const inside = node.name === "cranium" && z > 0.025 && z < 0.125;
      const socketShade = inside ? MathUtils.smoothstep(radius, 0.82, 1.25) * 0.995 + 0.005 : 1;
      const noseRadius = Math.hypot(x / 0.016, (y - 0.009) / 0.024);
      const nasalRecess = 1 - MathUtils.smoothstep(z, 0.103, 0.124);
      const noseShade = node.name === "cranium" && z > 0.045
        ? 1 - (1 - MathUtils.smoothstep(noseRadius, 0.7, 1.12)) * nasalRecess * 0.995 : 1;
      colors.fill(Math.round(Math.min(socketShade, noseShade) * 255), i * 4, i * 4 + 3);
    }
    const bufferView = document.bufferViews.length;
    document.bufferViews.push({ buffer: 0, byteOffset: offset, byteLength: colors.length, byteStride: 4 });
    primitive.attributes.COLOR_0 = document.accessors.length;
    document.accessors.push({ bufferView, componentType: 5121, normalized: true, count: accessor.count, type: "VEC3" });
    chunks.push(colors);
    offset += colors.length;
    vertices += accessor.count;
  }
}
document.buffers[0].byteLength = offset;
document.asset.generator += " + bake-skull.mjs";
let json = Buffer.from(JSON.stringify(document));
json = Buffer.concat([json, Buffer.alloc((4 - json.length % 4) % 4, 32)]);
const header = Buffer.alloc(20), binHeader = Buffer.alloc(8);
header.write("glTF");
header.writeUInt32LE(2, 4);
header.writeUInt32LE(28 + json.length + offset, 8);
header.writeUInt32LE(json.length, 12);
header.writeUInt32LE(0x4e4f534a, 16);
binHeader.writeUInt32LE(offset);
binHeader.writeUInt32LE(0x004e4942, 4);
const output = Buffer.concat([header, json, binHeader, ...chunks]);
fs.writeFileSync(new URL("../public/models/scattering-skull-shaded.glb", import.meta.url), output);
console.log(JSON.stringify({ vertices, sourceBytes: source.length, outputBytes: output.length }));
