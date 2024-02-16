/* eslint-disable react-hooks/exhaustive-deps */
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function IslandAbout() {
  const {scene, materials} =  useLoader(GLTFLoader, "/casa_obj.glb");

 useEffect(() => {
  if (!materials || !materials.agua) return;
  
  scene.scale.set(0.14, 0.18, 0.13);
  scene.children[0].position.set(-2, 2, -99);
  
  materials.agua.visible = false;
}, [materials]);

  return <primitive  object={scene} />;
}