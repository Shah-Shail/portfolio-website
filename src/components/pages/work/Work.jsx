import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip'
import WorkSliderBtns from '../../common/work-slider-btn'
import { projects } from './data'

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex
    // update project state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, translation: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] flex flex-col xl:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div>
                {/* project category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.name}
                </h2>
                {/* project type */}
                <p className="w-fit bg-pink-50/20 text-white text-sm font-medium mt-2 px-2.5 py-0.5 rounded">
                  {project.projectType}
                </p>
              </div>
              {/* project description */}
              <ul className="flex flex-col gap-[10px] list-disc marker:text-accent px-6">
                {project.description.map((item, index) => {
                  return (
                    <li key={index} className="text-[16px] text-white/60">
                      {item.text}
                    </li>
                  )
                })}
              </ul>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              {/*
                <div className="border border-white/20"></div>
                */}
              {/* buttons */}
              {/* <div className="flex items-center gap-4">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Projects</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div> */}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.8, duration: 0.4, ease: 'easeIn' }
            }}
            className="w-full lg:w-[50%]"
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[600px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
                      }}
                      className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <img src={project.image} className="w-full h-full" alt="" />
                      </div>
                    </motion.div>
                  </SwiperSlide>
                )
              })}
              {/* Slider buttons*/}
              <WorkSliderBtns
                containerSytyles="flex gap-2 absolute right-0 button-[calc(50% - 22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22] w-[44px] h-[44px] flex justify-center items-center transiltion-all"
              />
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
