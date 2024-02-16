import { useBox } from '@react-three/cannon'
import { Text } from '@react-three/drei'

export function OutDoor ({ position, text }: { position: [number, number, number], text: string }) {
  useBox(() => ({
    position,
    type: 'Static',
    mass: 0
  }))

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[5, 0.22, -1]} />
        <meshBasicMaterial />
      </mesh>

      <Text color="black" anchorX="center" anchorY="bottom">
        {text}
      </Text>
    </group>
  )
}
