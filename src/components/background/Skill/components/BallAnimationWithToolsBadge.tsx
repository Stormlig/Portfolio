/* eslint-disable react/display-name */
import { useMemo } from 'react'
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
  { Icon: SiGithub, color: '#181717' },
  { Icon: SiTypescript, color: '#3178C6' },
  { Icon: SiGit, color: '#F05032' }
]

const BallAnimationWithToolsBadge = () => {
  const memoizedIcons = useMemo(() => {
    return iconsWithColors.map(({ Icon, color }, index) => (
      <div key={index} className='rounded-full w-[100px] h-[100px] p-2 -m-4 bg-[#ffffffaa] '>
        <Icon size={60} style={{ color }} className='ml-3 mt-3' />
      </div>
    ))
  }, [iconsWithColors])

  return (
    <div id='skills' className='flex flex-col justify-center items-center w-[80%] my-20 mx-auto '>
      <h1 className='text-[#b6e655] text-[45px] md:text-[55px] text-center mb-28 font-bold'>
        Ferramentas<br />
        <span className='text-gray-400 text-[26px]'>( Mas não todas )</span>
      </h1>

      <div className='grid grid-cols-3 max-[400px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-6  items-center gap-[4rem]  text-white'>
        {memoizedIcons}
      </div>
    </div>
  )
}

export default BallAnimationWithToolsBadge
