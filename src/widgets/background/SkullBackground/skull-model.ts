import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";

/** Local texture-free derivative of the approved CC0 ScatteringSkull prototype. */
export async function createSkullModel(signal: AbortSignal) {
  const response = await fetch("/models/scattering-skull-meshopt.glb", {
    signal,
  });
  if (!response.ok) throw new Error("Skull model unavailable");
  const data = await response.arrayBuffer();
  const gltf = await new GLTFLoader()
    .setMeshoptDecoder(MeshoptDecoder)
    .parseAsync(data, "");
  return gltf.scene;
}
