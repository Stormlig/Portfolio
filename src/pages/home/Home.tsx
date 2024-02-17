import About from '../../components/background/About'
import BallAnimationWithToolsBadge from '../../components/background/BallAnimationWithToolsBadge'
import Contact from '../../components/background/Contact'
import Footer from '../../components/background/Footer'
import Header from '../../components/background/Header'
import Project from '../../components/background/Project'

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
