/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
import { LuDownload } from 'react-icons/lu'
import TextEffect from './components/TextEffect'
import { memo } from 'react'
import HexaneParticles from './components/HexaneParticles'

const Hero = memo(() => {
  return (
    <section className='flex flex-col items-baseline ml-10 mt-48 mb-24 max-[320px]:mt-32 md:ml-20 md:mt-60 md:mb-36 xl:ml-36 2xl:ml-48 2xl:mb-48 2xl:mt-72 relative'>

      <img className=' w-96 h-96 rounded-full absolute right-14 mr-6 max-[1023px]:hidden lg:right-20 2xl:right-36' src="https://avatars.githubusercontent.com/u/114263838?s=400&u=80660d84dad59c4193624bf00b3b2f03dbccb3b5&v=4" alt="foto" />

      <div style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }}>
        <HexaneParticles />
      </div>

      <div className=' z-10'>
        <h1 className='text-[28px] md:text-[40px] text-white '>
          Olá, eu sou o <span className='text-yellow-300'>Herrison</span>
        </h1>

        <p className='w-[80%] mt-[2rem] mb-[1rem] text-[20px] md:text-[26px] md:w-[80%] lg:w-[50%] text-[#ffffffdd] max-sm:w-3/4 italic font-semibold'>
          Desbravando este vasto mundo, cheio de mistérios e desafios, busco refinar cada dia meus conhecimentos como:
        </p>

        <TextEffect />

        <div className='mt-12 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
          <button className='px-8 md:text-[24px] md:space-x-4 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-3 '>
            <p>Download CV</p>
            <LuDownload className='w-[1.6rem] h-[1.7rem]' />
          </button>
        </div>
      </div>
    </section >

  )
})

export default Hero
