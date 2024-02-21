/* eslint-disable react/display-name */
import { lazy, memo, Suspense } from 'react'

import Header from '../../components/background/Header/Header'
import About from '../../components/background/About/About'

const Skill = lazy(async () => (await import('../../components/background/Skill/components/BallAnimationWithToolsBadge')))
const Project = lazy(async () => (await import('../../components/background/Project/Project')))
const Contact = lazy(async () => (await import('../../components/background/Contact/Contact')))
const Footer = lazy(async () => (await import('../../components/background/Footer/Footer')))

const Home = memo(() => {
  return (
    <main className="overflow-x-hidden flex flex-col">

      <Header />
      <span className='w-[100%]   h-[3px] bg-slate-400 roubded-sm'></span>

      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <span className='w-[100%]   h-[5px] bg-slate-400 roubded-sm'></span>

        <Skill />
        <span className='w-[100%]   h-[5px] bg-slate-400 roubded-sm'></span>

        <Project />
        <span className='w-[100%]   h-[5px] bg-slate-400 roubded-sm'></span>

        <Contact />
        <span className='w-[100%]   h-[5px] bg-slate-400 roubded-sm'></span>

        <Footer />
      </Suspense>
    </main>
  )
})

export default Home
