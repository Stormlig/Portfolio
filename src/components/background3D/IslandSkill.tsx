import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export function IslandSkill() {
  const { scene } = useLoader(GLTFLoader, '/models/kauai_island_hawaii_-_pacific_ocean.glb')

  scene.renderOrder = 1

  useEffect(() => {
    if (!scene) return

    scene.scale.set(0.00022, 0.001, 0.00022)
    scene.children[0].position.set(0, 0, -1000)
  }, [])

  return <primitive object={scene} />
}
