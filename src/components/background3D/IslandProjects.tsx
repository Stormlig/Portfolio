import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export function IslandProjects() {
  const { scene, materials } = useLoader(GLTFLoader, '/models/lighthouse_-_handpainted.glb')

  useEffect(() => {
    if (!scene) return

    scene.scale.set(0.12, 0.189, 0.12)
    scene.children[0].position.set(23, -1.2, 106)

    materials.sea_light_up.visible = false
    materials.ground.visible = false
  }, [])

  return <primitive object={scene} />
}
