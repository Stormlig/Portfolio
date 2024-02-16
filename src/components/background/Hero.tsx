/* eslint-disable react/jsx-no-undef */
import { Particles } from './Particles'
import TextEffect from './TextEffect'

const Hero = () => {
  return (
    <div className='h-[88vh] relative  '>
      <Particles/>
      <div className='absolute w-full h-full mt-[8vh] flex flex-col items-start left-10 top-16 max-sm:left-4 sm:mt-[4vh] '>

      <div>
         <h1 className='text-[30px] md:text-[35px] text-white font-secondary'>
          Olá, eu sou o <span className='text-yellow-300'>Herrison</span>
        </h1>

        <p className='mt-[2rem] mb-[1rem] text-[20px] text-[#ffffff92] w-[80%]'>
          Desbravando esse vasto oceano, cheio de mistérios e desafios, busco refinar cada dia meus conhecimentos como:
        </p>
        <TextEffect/>
      </div>

      {/* <div className='w-[500px] hidden bg-[#55e6a5] relative -right-1/3
       lg:flex items-center rounded-full h-[500px]'>
        <img src='/images/u1.jpg' alt='user' className='object-cover rounded-full' />
      </div> */}

      </div>
    </div>
  )
}

export default Hero
