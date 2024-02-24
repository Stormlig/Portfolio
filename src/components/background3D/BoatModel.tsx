/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { useControls } from '../../hook/useControls'
import { useWheels } from '../../hook/useWheels'
import { Quaternion, Vector3 } from 'three'
import * as THREE from 'three'

export function BoatModel({ thirdPerson }: { thirdPerson: any }) {
  const { scene } = useLoader(GLTFLoader, '/models/fishing_boat.glb')
  const propellerRef = useRef<THREE.Mesh>()

  const position: [number, number, number] = [-0.2, 0, -10.66]
  const width: number = 0.15
  const height: number = 0.07
  const front: number = 0.15
  const wheelRadius: number = 0.05
  const hullBodyArgs: [number, number, number] = [width, height, front * 2]

  const [hullBody, hullApi] = useBox<any>(() => ({
    allowSleep: true,
    args: hullBodyArgs,
    mass: 220,
    position,
    rotation: [0, 1.5, 0]
  }),
    useRef(null)
  )

  const { wheels, wheelInfos } = useWheels(width, height, front, wheelRadius)

  const [, boatApi] = useRaycastVehicle<any>(
    () => ({
      chassisBody: hullBody,
      wheelInfos,
      wheels
    }),
    useRef(null)
  )

  useControls(boatApi, hullApi)

  useEffect(() => {
    if (!scene) return

    scene.scale.set(0.002, 0.0023, 0.002)
    scene.children[0].position.set(0, 33, 0)

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.name === 'Propeller_Boat_2_0') {
        propellerRef.current = child
      }
    })
  }, [scene])

  useFrame((state) => {
    if (!thirdPerson || !hullBody.current || !boatApi) return

    const boatPosition = new Vector3()
    const boatQuaternion = new Quaternion()
    hullBody.current.getWorldPosition(boatPosition)
    hullBody.current.getWorldQuaternion(boatQuaternion)

    const cameraOffset = new Vector3(0, 2.3, 3.2)

    cameraOffset.applyQuaternion(boatQuaternion)

    const cameraPosition = boatPosition.clone().add(cameraOffset)

    state.camera.position.copy(cameraPosition)
    state.camera.lookAt(boatPosition)

    // remover isso daqui e passar para dentro de controls
    if (propellerRef.current) {
      propellerRef.current.rotation.y += 0.2
    }
  })

  return (
    <>
      <group ref={hullBody}>
        <primitive object={scene} rotation-y={Math.PI} />
      </group>
    </>

  )
}
