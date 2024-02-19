import { SiDiscord, SiGithub, SiLinkedin } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className=" pt-[2rem] pb-[2rem] bg-[#02050a] text-white ">
      <div className='flex flex-row-auto justify-around '>
        <p className='text-[20px]'>@2024 <span className='text-yellow-300 '> Herrison </span></p>
        <ul className='flex flex-row text-[2rem]'>
          <li className='mx-2'>
            <a href="https://www.linkedin.com/in/herrison-souza-630118187/">
              <SiLinkedin />
            </a>
          </li>

          <li className='mx-2'>
            <a href="https://github.com/Stormlig">
              <SiGithub />
            </a>
          </li>

          <li className='mx-2'>
            <a href="">
              <SiDiscord />
            </a>
          </li>

        </ul>
      </div>

    </footer>
  )
}

export default Footer
