/* eslint-disable no-empty-pattern */
import { usePlane } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { BufferAttribute, type BufferGeometry, type Mesh, TextureLoader } from 'three'

interface ExtendedMesh extends Mesh {
  geometry: BufferGeometry
}

export function Ground() {
  const [] = usePlane(
    () => ({
      type: 'Static',
      rotation: [-Math.PI / 2, 0, 0]
    }),
    useRef(null)
  )

  const gridMap = useLoader(TextureLoader, '/images/waternormals.jpeg')

  const meshRef = useRef<ExtendedMesh | null>(null)
  const meshRef2 = useRef<ExtendedMesh | null>(null)

  useEffect(() => {
    if (!gridMap) return

    gridMap.anisotropy = 16
  }, [gridMap])

  useEffect(() => {
    if (meshRef.current) {
      const uvs = meshRef.current.geometry.attributes.uv.array
      meshRef.current.geometry.setAttribute('uv2', new BufferAttribute(uvs, 2))
    }

    if (meshRef2.current) {
      const uvs = meshRef2.current.geometry.attributes.uv.array
      meshRef2.current.geometry.setAttribute(
        'uv2',
        new BufferAttribute(uvs, 2)
      )
    }
  }, [meshRef.current])

  return (
    <>
      <mesh
        ref={meshRef2}
        position={[0, -1.4, 0]}
        rotation-x={-Math.PI * 0.5}
      >
        <planeGeometry args={[29, 29]} />
        <meshBasicMaterial
          opacity={0.125}
          alphaMap={gridMap}
          transparent={false}
          color={'#08fcf8'}
        />
      </mesh>

    </>
  )
}
