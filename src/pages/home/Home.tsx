/* eslint-disable react/display-name */
import About from '../../components/background/About/About'
import Contact from '../../components/background/Contact/Contact'
import Footer from '../../components/background/Footer/Footer'
import Header from '../../components/background/Header/Header'
import { lazy, memo } from 'react'

const Skill = lazy(async () => (await import('../../components/background/Skill/components/BallAnimationWithToolsBadge')))
const Project = lazy(async () => (await import('../../components/background/Project/Project')))

const Home = memo(() => {
  return (
    <main className="overflow-x-hidden flex flex-col">
      <Header />
      <span className='w-[100%]   h-[3px] bg-slate-400 roubded-sm'></span>
      <About />
      <span className='w-[100%]   h-[5px] bg-slate-400 roubded-sm'></span>
      <Skill />
      <span className='w-[100%]   h-[8px] bg-slate-400 roubded-sm'></span>
      <Project />
      <span className='w-[100%]   h-[8px] bg-slate-400 roubded-sm'></span>
      <Contact />
      <span className='w-[100%]   h-[8px] bg-slate-400 roubded-sm'></span>
      <Footer />
    </main>
  )
})

export default Home
