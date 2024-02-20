/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable react/display-name */
/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable react/prop-types */
import * as THREE from 'three'
import { useRef, useMemo, memo } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { FilmPass, WaterPass, UnrealBloomPass, LUTPass, LUTCubeLoader } from 'three-stdlib'
import { Perf } from 'r3f-perf'

extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass })

export const ParticlesBg = memo(() => (
  <Canvas linear flat legacy dpr={1} camera={{ fov: 100, position: [0, 0, 30] }}>
    <Perf />

    <ambientLight intensity={1} />
    <Bubbles count={10} dummy={undefined} />
    <Postpro />

  </Canvas>
))

function Bubbles({ count, dummy = new THREE.Object3D() }: { count: number, dummy: any }) {
  const mesh = useRef<any>()
  const light = useRef<any>()
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])
  useFrame((state, delta) => {
    if (light.current) { // Atualiza a cada segundo frame
      light.current.position.set((-state.mouse.x * state.viewport.width) / 5, (-state.mouse.y * state.viewport.height) / 5, 0)
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle
        t = particle.t += speed / 2 * delta // Leva em conta o delta para garantir animação suave
        const a = Math.cos(t) + Math.sin(t * 1) / 10
        const b = Math.sin(t) + Math.cos(t * 2) / 10
        const s = Math.cos(t)
        particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01
        particle.my += (state.mouse.y * 1000 - 1 - particle.my) * 0.01
        dummy.position.set(
          (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        )
        dummy.scale.setScalar(s)
        dummy.rotation.set(s * 5, s * 5, s * 5)
        dummy.updateMatrix()
        mesh.current.setMatrixAt(i, dummy.matrix)
      })
      mesh.current.instanceMatrix.needsUpdate = true
    }
  })
  return (
    <>
      <pointLight ref={light} distance={1000} intensity={1} color="#5a1748" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <bufferGeometry attach="geometry" {...mergeGeometries(particles)} />
        <meshStandardMaterial color="#b52323ed" roughness={0.1} />
      </instancedMesh>
    </>
  )
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      waterPass: any // Defina o tipo apropriado se disponível
      unrealBloomPass: any // Defina o tipo apropriado se disponível
      filmPass: any // Defina o tipo apropriado se disponível
      lUTPass: any // Defina o tipo apropriado se disponível
    }
  }
}

extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass })

function Postpro() {
  const water = useRef<any>()
  const data = useLoader(LUTCubeLoader, 'models/cubicle.CUBE')
  useFrame((state) => (water.current.time = state.clock.elapsedTime * 4))
  return (
    <Effects disableGamma>
      <waterPass ref={water} factor={2} />
      <unrealBloomPass args={[undefined, 1.25, 1, 0]} />
      <filmPass args={[0.2, 0.5, 1500, false]} />
      <lUTPass lut={data.texture} intensity={0.75} />
    </Effects>
  )
}

function mergeGeometries(particles: any) {
  const mergedGeometry = new THREE.BufferGeometry()
  const positions: number[] = []
  const normals: number[] = []
  const uvs: number[] = []

  particles.forEach((particle: { xFactor: number, yFactor: number, zFactor: number }) => {
    const geometry = new THREE.DodecahedronGeometry(1, 0) // Use a mesma geometria que você estava usando antes
    geometry.translate(particle.xFactor, particle.yFactor, particle.zFactor) // Translade a geometria para a posição da partícula

    const positionAttribute = geometry.getAttribute('position')
    const normalAttribute = geometry.getAttribute('normal')
    const uvAttribute = geometry.getAttribute('uv')

    for (let i = 0; i < positionAttribute.count; i++) {
      positions.push(positionAttribute.getX(i), positionAttribute.getY(i), positionAttribute.getZ(i))
      normals.push(normalAttribute.getX(i), normalAttribute.getY(i), normalAttribute.getZ(i))
      uvs.push(uvAttribute.getX(i), uvAttribute.getY(i))
    }
  })

  mergedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  mergedGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
  mergedGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))

  return mergedGeometry
}
