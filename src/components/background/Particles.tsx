/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable react/prop-types */
import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { FilmPass, WaterPass, UnrealBloomPass, LUTPass, LUTCubeLoader } from 'three-stdlib'

extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass })

export const Particles = () => (
  <Canvas linear flat legacy dpr={1} camera={{ fov: 105, position: [0, 0, 3] }}>
    <ambientLight intensity={0.3} />
    <pointLight distance={15} intensity={1} color="#ff0000" />
    <spotLight intensity={1} penumbra={1} color="#fb0202" />

    <Swarm count={200} dummy={undefined} />
    <Postpro />

  </Canvas>
)

function Swarm({ count, dummy = new THREE.Object3D() }: { count: number, dummy: any }) {
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
  useFrame((state) => {
    if (light.current) {
      light.current.position.set((-state.mouse.x * state.viewport.width) / 5, (-state.mouse.y * state.viewport.height) / 5, 0)
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle
        t = particle.t += speed / 2
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
      <pointLight ref={light} distance={1000} intensity={1} color="#fff">
        {/* <mesh scale={[6, 2, 6]}>
          <dodecahedronGeometry args={[0.1, 5]} />
        </mesh> */}
      </pointLight>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[2, 10]} />
        <meshStandardMaterial color="#ebe9e4f0" roughness={0.1} />
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
  const data = useLoader(LUTCubeLoader, '/cubicle.CUBE')
  useFrame((state) => (water.current.time = state.clock.elapsedTime * 4))
  return (
    <Effects disableGamma>
      <waterPass ref={water} factor={1} />
      <unrealBloomPass args={[undefined, 1.25, 1, 0]} />
      <filmPass args={[0.2, 0.5, 1500, false]} />
      <lUTPass lut={data.texture} intensity={0.5} />
    </Effects>
  )
}
