import * as THREE from "three";
import { createSkullModel } from "./skull-model";
import { skullPose } from "./skull-motion";

function disposeTree(root: THREE.Object3D) {
  const geometries = new Set<THREE.BufferGeometry>(),
    materials = new Set<THREE.Material>(),
    textures = new Set<THREE.Texture>();
  root.traverse((node) => {
    if (node instanceof THREE.Mesh || node instanceof THREE.LineSegments) {
      geometries.add(node.geometry);
      for (const material of Array.isArray(node.material)
        ? node.material
        : [node.material])
        materials.add(material);
    }
  });
  geometries.forEach((geometry) => geometry.dispose());
  materials.forEach((material) => {
    if (material instanceof THREE.MeshBasicMaterial && material.map)
      textures.add(material.map);
    material.dispose();
  });
  textures.forEach((texture) => texture.dispose());
}

export async function createSkullRenderer(
  canvas: HTMLCanvasElement,
  signal: AbortSignal,
) {
  if (signal.aborted) throw new DOMException("Aborted", "AbortError");
  const model = await createSkullModel(signal);
  if (signal.aborted) {
    disposeTree(model);
    throw new DOMException("Aborted", "AbortError");
  }
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
  } catch (error) {
    disposeTree(model);
    throw error;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
  camera.position.set(0, 0, 7.2);
  camera.lookAt(0, 0, 0);
  scene.add(new THREE.AmbientLight(0x7792aa, 0.45));
  const cyanLight = new THREE.DirectionalLight(0xc4e0e2, 3.5);
  cyanLight.position.set(-3, 4, 5);
  scene.add(cyanLight);
  const blueLight = new THREE.DirectionalLight(0x218ef4, 1.8);
  blueLight.position.set(4, 1, -2);
  scene.add(blueLight);
  const rig = new THREE.Group();
  scene.add(rig);
  const oldMaterials = new Set<THREE.Material>();
  const meshes: THREE.Mesh[] = [];
  model.traverse((node) => {
    if (node instanceof THREE.Mesh) meshes.push(node);
  });
  for (const mesh of meshes) {
    if (mesh.material instanceof THREE.MeshBasicMaterial) continue;
    for (const material of Array.isArray(mesh.material)
      ? mesh.material
      : [mesh.material])
      oldMaterials.add(material);
    const surface = new THREE.MeshStandardMaterial({
      color: 0x4b6b73,
      metalness: 0,
      roughness: 0.95,
      vertexColors: true,
      side: THREE.DoubleSide,
    });
    // Vertex shading is baked by scripts/bake-skull.mjs.
    mesh.material = surface;
  }
  oldMaterials.forEach((material) => material.dispose());
  model.scale.setScalar(12.5);
  rig.add(model);
  const jaw = model.getObjectByName("jaw");
  if (!jaw) {
    disposeTree(scene);
    renderer.dispose();
    throw new Error("Articulated jaw missing");
  }
  const pixels = new Uint8Array(64 * 64 * 4);
  for (let y = 0; y < 64; y++)
    for (let x = 0; x < 64; x++) {
      const radius = Math.hypot((x - 31.5) / 31.5, (y - 31.5) / 31.5);
      const i = (y * 64 + x) * 4;
      pixels[i] = pixels[i + 1] = pixels[i + 2] = 255;
      pixels[i + 3] = Math.round(
        255 * Math.exp(-radius * radius * 5) * Math.max(0, 1 - radius),
      );
    }
  const glow = new THREE.DataTexture(pixels, 64, 64);
  glow.minFilter = THREE.LinearFilter;
  glow.magFilter = THREE.LinearFilter;
  glow.needsUpdate = true;
  const eyeMaterial = new THREE.MeshBasicMaterial({
    color: 0x2ad8c2,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    map: glow,
    blending: THREE.AdditiveBlending,
  });
  const haloMaterial = new THREE.MeshBasicMaterial({
    color: 0x218ef4,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    map: glow,
  });
  const eyes = new THREE.Group();
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(
      new THREE.PlaneGeometry(0.038, 0.03),
      eyeMaterial,
    );
    eye.position.set(side * 0.038, 0.016, 0.09);
    eyes.add(eye);
    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(0.07, 0.055),
      haloMaterial,
    );
    halo.position.copy(eye.position);
    eyes.add(halo);
  }
  model.add(eyes);
  // Compile while the static poster remains visible; avoid synchronous shader
  // compilation on the first animated frame when the driver supports it.
  try {
    await renderer.compileAsync(scene, camera);
    if (signal.aborted) throw new DOMException("Aborted", "AbortError");
  } catch (error) {
    disposeTree(scene);
    renderer.dispose();
    renderer.forceContextLoss();
    throw error;
  }
  const cubeScene = document.querySelector("[data-model]")?.parentElement;
  const mouth = new THREE.Vector3();
  const heroTarget = new THREE.Vector3();
  let disposed = false,
    width = 0,
    height = 0;
  return {
    render(progress: number) {
      if (disposed) return;
      const w = innerWidth,
        h = innerHeight,
        compact = w <= 640;
      if (w !== width || h !== height) {
        width = w;
        height = h;
        renderer.setPixelRatio(
          Math.min(devicePixelRatio || 1, compact ? 1 : 1.35),
        );
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      const pose = skullPose(progress, compact);
      const planeHeight =
        2 *
        Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) *
        camera.position.z;
      rig.position.set(
        (pose.x - 0.5) * planeHeight * camera.aspect,
        (0.5 - pose.y) * planeHeight,
        0,
      );
      rig.rotation.set(pose.pitch, pose.yaw, pose.tilt);
      rig.scale.setScalar(pose.scale);
      jaw.rotation.x = pose.jaw;
      // Align the open mouth with the actual cube, including stacked mobile layouts.
      const heroBlend = 1 - THREE.MathUtils.smoothstep(progress, 0, 0.16);
      if (heroBlend > 0 && cubeScene) {
        const rect = cubeScene.getBoundingClientRect();
        const targetX = rect.left + rect.width * 0.60;
        const targetY = rect.top + rect.height * 0.46;
        mouth
          .set(0, -0.075, 0.1)
          .multiplyScalar(12.5 * pose.scale)
          .applyEuler(rig.rotation);
        const depthFactor = (camera.position.z - mouth.z) / camera.position.z;
        rig.position.lerp(
          heroTarget.set(
            (targetX / w - 0.5) * planeHeight * camera.aspect * depthFactor -
              mouth.x,
            (0.5 - targetY / h) * planeHeight * depthFactor - mouth.y,
            0,
          ),
          heroBlend,
        );
      }
      eyeMaterial.opacity = pose.eyes * 0.22;
      haloMaterial.opacity = pose.eyes * 0.08;
      canvas.style.opacity = String(pose.opacity);
      canvas.dataset.progress = progress.toFixed(3);
      canvas.dataset.jaw = pose.jaw.toFixed(3);
      canvas.dataset.eyes = pose.eyes.toFixed(3);
      canvas.dataset.x = pose.x.toFixed(3);
      canvas.dataset.yaw = pose.yaw.toFixed(3);
      canvas.dataset.pitch = rig.rotation.x.toFixed(3);
      renderer.render(scene, camera);
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      disposeTree(scene);
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
