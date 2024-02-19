import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import { allProjects } from '../data/allProjects'
import 'swiper/css'
import 'swiper/css/scrollbar'

const ProjectDesktop = () => {
  return (
    <section id="project" className="w-[80%] pt-16 md:pt-32 pb-20 mx-auto">
      <h1 className="heading mb-10">
        Meus <span className="text-[#b6e655]">Projetos</span>
      </h1>
      <div className='mt-20 flex flex-row'>
        <Swiper
          modules={[EffectCards]}
          effect='cards'
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {allProjects.map((project, index) => (
            <SwiperSlide key={index} >

              <div className='group  relative flex flex-col w-fit  duration-100 ease-in  text-black'>

                <div className='rounded-t-xl flex justify-center items-center '>
                  <img className="object-cover" loading='eager' src={project.media} alt={project.title} />
                </div>

                <div className='absolute hidden group-hover:flex justify-center items-center hover:bg-white opacity-80  w-fit h-full duration-100 ease-in p-10 text-justify animate-fade animate-ease-in-out animate-duration-400 flex-col'>
                  <h2 className='text-center font-bold text-[35px]'>{project.title}</h2>
                  <p className='text-center mx-4 mb-8'>{project.context}</p>
                  <a className='text-black flex flex-row text-[20px]' href={project.link}>Clique aqui</a>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ProjectDesktop
