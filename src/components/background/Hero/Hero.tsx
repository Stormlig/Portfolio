/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
import { LuDownload } from 'react-icons/lu'
import TextEffect from './components/TextEffect'
// import { ParticlesBg } from './components/Particles'
import { memo } from 'react'

const Hero = memo(() => {
  return (
    <div className='relative h-[88vh] max-[320px]:h-[100vh] '>
      {/* <ParticlesBg /> */}
      <div className='absolute top-20 w-[80%] max-[360px]:top-12   flex flex-col items-baseline  sm:left-12 max-sm:left-8  md:left-20 lg:left-32 2xl:left-[10rem]'>

        <div >
          <h1 className='text-[30px] md:text-[35px] text-white '>
            Olá, eu sou o <span className='text-yellow-300'>Herrison</span>
          </h1>

          <p className='mt-[2rem] mb-[1rem] text-[20px] text-[#ffffffdd] w-[60%] max-sm:w-[80%]'>
            Desbravando esse vasto oceano, cheio de mistérios e desafios, busco refinar cada dia meus conhecimentos como:
          </p>
          <TextEffect />
        </div>

        <div className='mt-8 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
          <button className='px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
            <p>Download CV</p>
            <LuDownload className='w-[1.6rem] h-[1.7rem]' />
          </button>
        </div>

        {/* <div className='w-[400px] hidden bg-[#55e6a5] relative -right-1/3
       lg:flex items-center rounded-full h-[400px]'>
          <img src='/images/u1.jpg' alt='user' className='object-cover rounded-full' />
        </div> */}

      </div>
    </div>
  )
})

export default Hero
