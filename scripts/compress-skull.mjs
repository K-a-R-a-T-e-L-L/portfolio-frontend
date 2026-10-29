// Lossless EXT_meshopt_compression. No simplification, quantization or reordering.
// Run after bake-skull.mjs. Every decoded buffer is checked byte-for-byte.
import fs from "node:fs";
import assert from "node:assert/strict";
import { gzipSync } from "node:zlib";
import { MeshoptEncoder } from "meshoptimizer/encoder";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";

await Promise.all([MeshoptEncoder.ready, MeshoptDecoder.ready]);
const input = fs.readFileSync(
  new URL("../public/models/scattering-skull-shaded.glb", import.meta.url),
);
const jsonLength = input.readUInt32LE(12);
const document = JSON.parse(input.subarray(20, 20 + jsonLength));
const binary = input.subarray(28 + jsonLength);
const chunks = [];
let offset = 0;
const extension = "EXT_meshopt_compression";
for (const [index, view] of document.bufferViews.entries()) {
  const accessors = document.accessors.filter(
    (accessor) => accessor.bufferView === index,
  );
  assert.equal(
    accessors.length,
    1,
    "This asset uses one accessor per buffer view",
  );
  const accessor = accessors[0];
  const stride = view.byteStride ?? view.byteLength / accessor.count;
  const mode = accessor.type === "SCALAR" ? "INDICES" : "ATTRIBUTES";
  const source = binary.subarray(
    view.byteOffset ?? 0,
    (view.byteOffset ?? 0) + view.byteLength,
  );
  const encoded = Buffer.from(
    MeshoptEncoder.encodeGltfBuffer(source, accessor.count, stride, mode),
  );
  const decoded = Buffer.alloc(source.length);
  MeshoptDecoder.decodeGltfBuffer(
    decoded,
    accessor.count,
    stride,
    encoded,
    mode,
  );
  assert.deepEqual(decoded, source, `Lossless roundtrip buffer ${index}`);
  view.buffer = 1;
  view.extensions = {
    [extension]: {
      buffer: 0,
      byteOffset: offset,
      byteLength: encoded.length,
      byteStride: stride,
      count: accessor.count,
      mode,
      filter: "NONE",
    },
  };
  const padding = Buffer.alloc((4 - (encoded.length % 4)) % 4);
  chunks.push(encoded, padding);
  offset += encoded.length + padding.length;
}
document.buffers = [
  { byteLength: offset },
  {
    byteLength: document.buffers[0].byteLength,
    extensions: { [extension]: { fallback: true } },
  },
];
document.extensionsUsed = [
  ...new Set([...(document.extensionsUsed ?? []), extension]),
];
document.extensionsRequired = [
  ...new Set([...(document.extensionsRequired ?? []), extension]),
];
document.asset.generator += " + compress-skull.mjs (lossless)";
const json = Buffer.from(JSON.stringify(document));
const paddedJson = Buffer.concat([
  json,
  Buffer.alloc((4 - (json.length % 4)) % 4, 32),
]);
const header = Buffer.alloc(20),
  binHeader = Buffer.alloc(8);
header.write("glTF");
header.writeUInt32LE(2, 4);
header.writeUInt32LE(28 + paddedJson.length + offset, 8);
header.writeUInt32LE(paddedJson.length, 12);
header.writeUInt32LE(0x4e4f534a, 16);
binHeader.writeUInt32LE(offset);
binHeader.writeUInt32LE(0x004e4942, 4);
const output = Buffer.concat([header, paddedJson, binHeader, ...chunks]);
fs.writeFileSync(
  new URL("../public/models/scattering-skull-meshopt.glb", import.meta.url),
  output,
);
console.log(
  JSON.stringify({
    verifiedBuffers: document.bufferViews.length,
    original: input.length,
    compressed: output.length,
    originalGzip: gzipSync(input).length,
    compressedGzip: gzipSync(output).length,
  }),
);
