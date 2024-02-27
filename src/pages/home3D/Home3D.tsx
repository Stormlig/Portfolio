/* eslint-disable react/display-name */
import { Physics } from '@react-three/cannon'
import { Canvas } from '@react-three/fiber'
import { Scene } from '../../components/background3D/Scene'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { memo } from 'react'

export const Home3D = memo(() => {
  return (
    <div className='h-[100vh] '>
      <div className='absolute w-[220px] top-1 right-[1%] bg-[#454141] opacity-70 text-white rounded-2xl py-6 z-10'>

        <h2 className='text-center text-[22px]'>Teclas de Controle</h2>

        <br />

        <ul className='ml-10'>
          <li>W - Frente</li>
          <li>S - Ré</li>
          <li>A - Bombordo</li>
          <li>D - Estibordo</li>
          <li>ESPAÇO - Âncora</li>

          <br />

          <li>R - Reiniciar</li>
          <li>K - Câmera</li>

          <br />

          <li>Mouse com<span className='text-yellow-400'> K </span>ativo</li>
          <li>Pressione esquerdo</li>
          <li>Pressione direito</li>

        </ul>

        <a href="/" className="flex items-center text-lg mt-4 pl-4 bg-orange-500 cursor-pointer hover:bg-orange-800">
          <IoReturnUpBackOutline className="text-[40px] " />
          <span className="pl-4">Página principal</span>
        </a>
      </div>

      <Canvas >
        <Physics broadphase="SAP" gravity={[0, -2, 0]}>

          <Scene />

        </Physics>
      </Canvas>
    </div>

  )
})
