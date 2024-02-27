import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { ColliderBox } from './ColliderBox'
import { OutDoor } from './OutDoor'

export function Water() {
  const waterRef = useRef()

  const waterGeometry = new THREE.BoxGeometry(28, -1.5, 28)
  const waterTexture = new THREE.TextureLoader().load('/images/waternormals.jpeg')

  const waterMaterial = new THREE.MeshBasicMaterial({
    map: waterTexture,
    transparent: false,
    opacity: 0.7,
    side: THREE.DoubleSide,
    color: '#13e8f0'
  })

  const waterMesh = new THREE.Mesh(waterGeometry, waterMaterial)

  waterMesh.rotation.x = -Math.PI

  // Adicione a animação simples de oscilação à água
  useFrame(({ clock }) => {
    waterMesh.position.y = -0.55 + Math.sin(clock.elapsedTime) * 0.093
    const offsetX = Math.tan(clock.elapsedTime) * 0.000001
    const offsetY = Math.cos(clock.elapsedTime) * 0.05
    waterTexture.offset.set(offsetX, offsetY)
  })

  return (<>
    <primitive object={waterMesh} ref={waterRef} />

    {/* mountain  */}
    <ColliderBox position={[0.3, 0, 0.05]} scale={[12.8, 2, 7.4]} />

    {/* market-fishing */}
    <ColliderBox position={[2.8, 0.2, 12.6]} scale={[2.2, 1.5, 2.3]} />

    {/* house */}
    <ColliderBox position={[-0.3, 0.2, -12.34]} scale={[2.4, 1.5, 2.65]} />

    {/* house-bar */}
    <ColliderBox position={[-9.3, 0.2, 4.8]} scale={[1.52, 1.5, 1.13]} />

    <OutDoor text='Sobre mim' position={[-5, 0.5, -12]} />

    {/* barrier */}
    <ColliderBox position={[0, 0, -13.8]} scale={[28, 1.5, 1.13]} />

    <ColliderBox position={[0, 0, 13.8]} scale={[28, 1.5, 1.13]} />

    <ColliderBox position={[0, 0, 13.8]} scale={[28, 1.5, 1.13]} />

    <ColliderBox position={[13.8, 0, 0]} scale={[2, 1.5, 28.13]} />

    <ColliderBox position={[13.8, 0, 0]} scale={[2, 1.5, 28.13]} />

    <ColliderBox position={[-13.8, 0, 0]} scale={[2, 1.5, 28.13]} />
  </>)
}
