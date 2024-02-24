/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, useEffect, useState } from 'react'
import { OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei'
import { type Vector3 } from '@react-three/fiber'
// import { IslandSkill } from '../../components/background3D/IslandSkill'
// import { IslandHobby } from '../../components/background3D/IslandHobby'
// import { IslandProjects } from '../../components/background3D/IslandProjects'
import { Water } from '../../components/background3D/Water'
import { Ground } from '../../components/background3D/Ground'
import { BoatModel } from '../../components/background3D/BoatModel'
import { IslandAbout } from '../../components/background3D/IslandAbout'

export function Scene() {
  const [thirdPerson, setThirdPerson] = useState(true)
  const [cameraPosition, setCameraPosition] = useState<Vector3 | any>([-6, 3.9, 6.21])

  useEffect(() => {
    function keyDownHandler(e: any) {
      if (e.key === 'k') {
        if (thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.02])
        setThirdPerson(!thirdPerson)
      }
    }

    window.addEventListener('keydown', keyDownHandler)
    return () => { window.removeEventListener('keydown', keyDownHandler) }
  }, [thirdPerson])

  return (

    <Suspense fallback={null}>
      <PerspectiveCamera far={50} near={0.1} resolution={512} position={cameraPosition} fov={40} />
      {!thirdPerson && <OrbitControls target={[-2.64, 0.51, 0.03]} />}

      <directionalLight
        castShadow
        intensity={2}
        color={'#fdfdfd'}
        shadow-bias={-0.05}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-camera-left={-6.2}
        shadow-camera-right={6.4}
      />
      <BoatModel thirdPerson={thirdPerson} />
      <Water />
      <Sky sunPosition={[500, 150, -1000]} turbidity={10} />
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />

      {/* <IslandSkill /> */}

      <pointLight position={[50, 50, 50]} />
      <pointLight position={[-50, -50, -50]} />
      <IslandAbout />
      {/* <IslandHobby /> */}
      {/* <IslandProjects /> */}
      <Ground />
    </Suspense>

  )
}
