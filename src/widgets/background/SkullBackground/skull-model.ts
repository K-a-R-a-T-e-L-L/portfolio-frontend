import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

/** Local texture-free derivative of the approved CC0 ScatteringSkull prototype. */
export async function createSkullModel(signal: AbortSignal) {
  const response = await fetch("/models/scattering-skull.glb", { signal });
  if (!response.ok) throw new Error("Skull model unavailable");
  const data = await response.arrayBuffer();
  const gltf = await new GLTFLoader().parseAsync(data, "");
  return gltf.scene;
}
