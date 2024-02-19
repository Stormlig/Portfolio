import About from '../../components/background/About/About'
import BallAnimationWithToolsBadge from '../../components/background/Skill/components/BallAnimationWithToolsBadge'
import Contact from '../../components/background/Contact/Contact'
import Footer from '../../components/background/Footer/Footer'
import Header from '../../components/background/Header/Header'
import Project from '../../components/background/Project/Project'

const Home = () => {
  return (
    <main className="overflow-x-hidden flex flex-col">
      <Header />
      <span className='w-[100%]   h-[3px] bg-slate-400 roubded-sm'></span>
      <About />
      <span className='w-[100%]   h-[5px] bg-slate-400 roubded-sm'></span>
      <BallAnimationWithToolsBadge />
      <span className='w-[100%]   h-[8px] bg-slate-400 roubded-sm'></span>
      <Project />
      <span className='w-[100%]   h-[8px] bg-slate-400 roubded-sm'></span>
      <Contact />
      <span className='w-[100%]   h-[8px] bg-slate-400 roubded-sm'></span>
      <Footer />
    </main>
  )
}

export default Home
