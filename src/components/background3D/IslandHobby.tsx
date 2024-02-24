import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export function IslandHobby() {
  const { scene, materials } = useLoader(GLTFLoader, '/models/house_small.glb')

  useEffect(() => {
    if (!scene) return

    scene.scale.set(0.4, 0.15, 0.3)
    scene.children[0].position.set(-25.5, 2.5, 16)

    materials.water.visible = false
  }, [])

  return <primitive object={scene} />
}
