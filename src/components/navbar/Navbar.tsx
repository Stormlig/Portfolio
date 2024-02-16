import { Text3D } from "@react-three/drei";

export function Navbar() {
  return (
    <>
      <Text3D
        position={[-8, 0, -4]}
        scale={1}
        size={2}
        font={"/RubikBurned_Regular.json"}
      >
        Welcome
      </Text3D>
    </>
  );
}
