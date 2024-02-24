import { SiGithub, SiLinkedin } from 'react-icons/si'
import { github, linkedin } from '../../../utils/socials'
import { FaRegCopyright } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className=" pb-20 pt-8 bg-[#02050a] text-white lg:py-10">
      <div className='flex flex-row-auto justify-around '>
        <p className='text-[20px] flex'><FaRegCopyright className='w-[1.6rem] h-[2rem]' /> 2024 <span className='text-yellow-300 '> Herrison </span></p>
        <ul className='flex flex-row text-[2rem] '>
          <li className='mx-2 hover:text-yellow-100 duration-300'>
            <a href={linkedin} target="_blank"
              rel="noopener noreferrer">
              <SiLinkedin />
            </a>
          </li>

          <li className='mx-2 hover:text-yellow-100 duration-300'>
            <a href={github} target="_blank"
              rel="noopener noreferrer">
              <SiGithub />
            </a>
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer
