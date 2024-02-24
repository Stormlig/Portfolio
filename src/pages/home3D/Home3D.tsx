import { Physics } from '@react-three/cannon'
import { Canvas } from '@react-three/fiber'
import { Scene } from '../../components/background3D/Scene'

export function Home3D() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <Physics broadphase="SAP" gravity={[0, -2, 0]}>

        <Scene />

      </Physics>
    </Canvas>
  )
}
