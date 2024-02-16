import { Canvas } from "@react-three/fiber";
import { Navbar } from "../../components/navbar/Navbar";
import { OrbitControls } from "@react-three/drei";

export function Scene() {
  return (
    <Canvas>
      <OrbitControls />
      <Navbar />
    </Canvas>
  );
}
