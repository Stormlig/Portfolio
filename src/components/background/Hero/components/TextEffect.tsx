/* eslint-disable react/display-name */
import { memo } from 'react'
import { TypeAnimation } from 'react-type-animation'

const TextEffect = memo(() => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Desenvolvedor',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Empreendedor',
        1500,
        'Investidor',
        1500
      ]}

      speed={50}
      className='text-[2rem] md:text-[2rem] text-[#b6e655] font-bold uppercase'
      repeat={Infinity}
    />
  )
})

export default TextEffect
