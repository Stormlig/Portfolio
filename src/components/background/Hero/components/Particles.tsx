/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable react/display-name */
/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable react/prop-types */
import * as THREE from 'three'
import { useRef, useMemo, memo, useCallback } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { FilmPass, WaterPass, UnrealBloomPass, LUTPass, LUTCubeLoader } from 'three-stdlib'
import { InstancedMesh, PointLight } from 'three'

extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass })

export const ParticlesBg = memo(() => (
  <Canvas linear flat legacy dpr={1} camera={{ fov: 100, position: [0, 0, 30] }} >

    <ambientLight intensity={0.002} />
    <Bubbles count={6} />
    <Postpro />

  </Canvas>
))

function Bubbles({ count }: { count: number }) {
  const mesh = useRef<InstancedMesh>(null)
  const light = useRef<PointLight>(null)

  const particles = useMemo(() => {
    const newParticles = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        xFactor: -50 + Math.random() * 100,
        yFactor: -50 + Math.random() * 100,
        zFactor: -50 + Math.random() * 100,
        mx: 0,
        my: 0
      })
    }
    return newParticles
  }, [count])

  const updateLightBubbles = useCallback((state: { mouse: { x: number, y: number }, viewport: { width: number, height: number } }, delta: number) => {
    const { mouse, viewport } = state
    const { x, y } = mouse
    const { width, height } = viewport
    const multiplier = 0.01

    if (!light.current || !mesh.current) return

    light.current.position.set((-x * width) / 5, (-y * height) / 5, 0)

    particles.forEach((particle, i) => {
      const { t, factor, speed, xFactor, yFactor, zFactor, mx, my } = particle

      particle.t += speed / 2 * delta

      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)

      particle.mx += (x * 1000 - mx) * multiplier
      particle.my += (y * 1000 - 1 - my) * multiplier

      const positionX = (mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10
      const positionY = (my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10
      const positionZ = (my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10

      const matrix = new THREE.Matrix4().compose(
        new THREE.Vector3(positionX, positionY, positionZ),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(s * 5, s * 5, s * 5)),
        new THREE.Vector3(s, s, s)
      )

      if (mesh.current === null) return
      mesh.current.setMatrixAt(i, matrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true
  }, [particles, mesh, light])

  useFrame((state, delta) => { updateLightBubbles(state, delta) })

  return (
    <>
      <pointLight ref={light} distance={5000} intensity={0.001} color="#7cccb4" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <bufferGeometry attach="geometry" {...mergeGeometries(particles)} />
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

  const updatePositionWater = useCallback((state: { clock: { elapsedTime: number } }) => {
    (water.current.time = state.clock.elapsedTime * 4)
  }, [])
  useFrame((state) => { updatePositionWater(state) })

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
    const geometry = new THREE.DodecahedronGeometry(1, 0)
    geometry.translate(particle.xFactor, particle.yFactor, particle.zFactor)

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
