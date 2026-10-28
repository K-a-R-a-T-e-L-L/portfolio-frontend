// Reproducible CC0 ScatteringSkull derivative. Usage: node scripts/prepare-skull.mjs original.glb
import fs from "node:fs";
import path from "node:path";
const source = fs.readFileSync(process.argv[2]);
if (source.toString("utf8", 0, 4) !== "glTF") throw Error("Expected GLB");
const jsonLength = source.readUInt32LE(12),
  input = JSON.parse(source.subarray(20, 20 + jsonLength)),
  binary = source.subarray(28 + jsonLength);
function accessor(i) {
  const a = input.accessors[i],
    v = input.bufferViews[a.bufferView],
    T = { 5126: Float32Array, 5125: Uint32Array, 5123: Uint16Array }[
      a.componentType
    ];
  return new T(
    binary.buffer,
    binary.byteOffset + (v.byteOffset || 0) + (a.byteOffset || 0),
    a.count * { VEC3: 3, SCALAR: 1 }[a.type],
  );
}
const primitive = input.meshes[0].primitives[0],
  positions = accessor(primitive.attributes.POSITION),
  normals = accessor(primitive.attributes.NORMAL),
  indices = accessor(primitive.indices);
const center = [0.21944674104452133, 0.023080796003341675, 0.00489068031311035],
  pivot = [0.2194467, -0.025, 0.029],
  groups = [[], []];
// Preserve the user-approved prototype mask. This is an approximate cut, not an anatomical rig.
for (let i = 0; i < indices.length; i += 3) {
  const face = [indices[i], indices[i + 1], indices[i + 2]],
    [x, y, z] = [0, 1, 2].map(
      (k) => face.reduce((sum, v) => sum + positions[v * 3 + k], 0) / 3,
    ),
    lateral = Math.abs(x - 0.2194467);
  const lower =
    (z > 0.052 && y < -0.031 - lateral * 0.15) ||
    (lateral > 0.052 &&
      z > 0.024 &&
      z < 0.109 &&
      y < -0.019 - Math.max(0, z - 0.065) * 0.35);
  groups[lower ? 1 : 0].push(...face);
}
const output = {
  asset: {
    version: "2.0",
    generator: "portfolio prepare-skull.mjs",
    copyright:
      "ScatteringSkull — Vladimir Petkovic / Khronos, CC0 1.0; adapted jaw segmentation",
  },
  scene: 0,
  extensionsUsed: ["KHR_mesh_quantization"],
  extensionsRequired: ["KHR_mesh_quantization"],
  scenes: [{ nodes: [0] }],
  nodes: [
    { name: "ScatteringSkull", children: [1, 2] },
    { name: "cranium", mesh: 0 },
    {
      name: "jaw",
      translation: pivot.map((v, k) => v - center[k]),
      children: [3],
    },
    { name: "mandible", mesh: 1 },
  ],
  meshes: [],
  materials: [
    {
      name: "Bone",
      pbrMetallicRoughness: {
        baseColorFactor: [0.2, 0.4, 0.5, 1],
        metallicFactor: 0.35,
        roughnessFactor: 0.5,
      },
      doubleSided: true,
    },
  ],
  buffers: [{ byteLength: 0 }],
  bufferViews: [],
  accessors: [],
};
const chunks = [];
let offset = 0;
function add(array, type, componentType, min, max) {
  const data = Buffer.from(array.buffer, array.byteOffset, array.byteLength),
    view = output.bufferViews.length;
  output.bufferViews.push({
    buffer: 0,
    byteOffset: offset,
    byteLength: data.length,
  });
  chunks.push(data);
  const pad = (4 - (data.length % 4)) % 4;
  if (pad) chunks.push(Buffer.alloc(pad));
  offset += data.length + pad;
  const id = output.accessors.length;
  output.accessors.push({
    bufferView: view,
    componentType,
    count: array.length / (type === "VEC3" ? 3 : 1),
    type,
    ...(min ? { min, max } : {}),
  });
  return id;
}
groups.forEach((faces, part) => {
  const remap = new Map(),
    p = [],
    n = [],
    idx = [],
    origin = part ? pivot : center;
  for (const old of faces) {
    if (!remap.has(old)) {
      remap.set(old, remap.size);
      for (let k = 0; k < 3; k++) {
        p.push(positions[old * 3 + k] - origin[k]);
        n.push(normals[old * 3 + k]);
      }
    }
    idx.push(remap.get(old));
  }
  const min = [Infinity, Infinity, Infinity],
    max = [-Infinity, -Infinity, -Infinity];
  p.forEach((v, i) => {
    min[i % 3] = Math.min(min[i % 3], v);
    max[i % 3] = Math.max(max[i % 3], v);
  });
  // Signed normalized normals, padded to the glTF-required four-byte stride.
  const packedNormals = new Int8Array((n.length / 3) * 4);
  n.forEach((v, i) => {
    packedNormals[Math.floor(i / 3) * 4 + (i % 3)] = Math.round(
      Math.max(-1, Math.min(1, v)) * 127,
    );
  });
  const pa = add(new Float32Array(p), "VEC3", 5126, min, max),
    na = add(packedNormals, "VEC3", 5120),
    small = remap.size < 65536,
    ia = add(
      small ? new Uint16Array(idx) : new Uint32Array(idx),
      "SCALAR",
      small ? 5123 : 5125,
    );
  output.accessors[na].count = n.length / 3;
  output.accessors[na].normalized = true;
  output.bufferViews[output.accessors[na].bufferView].byteStride = 4;
  output.meshes.push({
    name: part ? "Mandible" : "Cranium",
    primitives: [
      { attributes: { POSITION: pa, NORMAL: na }, indices: ia, material: 0 },
    ],
  });
});
output.buffers[0].byteLength = offset;
let json = Buffer.from(JSON.stringify(output));
json = Buffer.concat([json, Buffer.alloc((4 - (json.length % 4)) % 4, 32)]);
const bin = Buffer.concat(chunks),
  head = Buffer.alloc(20);
head.write("glTF");
head.writeUInt32LE(2, 4);
head.writeUInt32LE(28 + json.length + bin.length, 8);
head.writeUInt32LE(json.length, 12);
head.writeUInt32LE(0x4e4f534a, 16);
const bh = Buffer.alloc(8);
bh.writeUInt32LE(bin.length);
bh.writeUInt32LE(0x004e4942, 4);
const dest = path.join(
  import.meta.dirname,
  "../public/models/scattering-skull.glb",
);
fs.writeFileSync(dest, Buffer.concat([head, json, bh, bin]));
console.log(
  JSON.stringify({
    sourceBytes: source.length,
    outputBytes: fs.statSync(dest).size,
    triangles: groups.map((g) => g.length / 3),
  }),
);
