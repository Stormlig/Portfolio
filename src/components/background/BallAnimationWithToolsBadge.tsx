import { motion } from 'framer-motion'
import {
  SiCss3,
  SiElectron,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRuby,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

const iconsWithColors = [
  { Icon: SiHtml5, color: '#E34F26' },
  { Icon: SiCss3, color: '#1572B6' },
  { Icon: SiTailwindcss, color: '#38B2AC' },
  { Icon: SiReact, color: '#61DAFB' },
  { Icon: SiNextdotjs, color: '#000000' },
  { Icon: SiNodedotjs, color: '#68A063' },
  { Icon: SiNestjs, color: '#E0234E' },
  { Icon: SiPostgresql, color: '#336791' },
  { Icon: SiJavascript, color: '#F7DF1E' },
  { Icon: SiJest, color: '#C21325' },
  { Icon: SiExpress, color: '#000000' },
  { Icon: SiElectron, color: '#47848F' },
  { Icon: SiRuby, color: '#CC342D' },
  { Icon: SiGithub, color: '#181717' },
  { Icon: SiTypescript, color: '#3178C6' },
  { Icon: SiGit, color: '#F05032' }
]

const BallAnimationWithToolsBadge = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[80%] my-36 mx-auto '>
      <h1 className='text-[#b6e655] text-[45px] text-center mb-28'>Ferramentas</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  items-center gap-[3rem]  text-white'>

        {iconsWithColors.map(({ Icon, color }, index) => (
          <div key={index} className='rounded-full w-[120px] h-[120px] p-2 -m-4 bg-white '>
            <motion.div
              className='absolute'
              animate={{
                x: [50, 0, 50],
                y: [0, 50, 0],
                transition: {
                  repeat: Infinity,
                  duration: 10,
                  ease: 'linear',
                  delay: Math.random() * 1
                }
              }}
            >
              <Icon size={40} style={{ color }} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default BallAnimationWithToolsBadge
