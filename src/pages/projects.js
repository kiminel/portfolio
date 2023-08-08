import React from 'react'
import { AnimatedText } from '@/components/elements/AnimatedText'
import saFoodBlogCoverImage from '../../public/images/projects/SA-Food-Blog.png'
import flowerPowerSpaCoverImage from '../../public/images/projects/Flower-Power-Spa.png'
import chevonTutoringCoverImage from '../../public/images/projects/Chevon-Tutoring.png'
import toDoPlannerCoverImage from '../../public/images/projects/To-Do-Planner.png'
import Project from '@/components/Project'

const Projects = () => {
  return (
    <>
      <div className="w-full mb-8 flex flex-col items-center justify-center mt-12 lg:pt-40">
        <div className="pb-12">
          <AnimatedText
            text={'Reality has limits. Imagination is boundless!'}
            className="lg:text-center"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 lg:gap-24">
          <div className="col-span-2 xl:col-span-1">
            <Project
              image={saFoodBlogCoverImage}
              title={'South African Food Blog'}
              summary={
                'A food blog containing popular, traditional South African recipes. In this project I am focusing on learning GraphQL and using hygraphCMS to manage the content. React.js and Tailwind CSS has been used for the front-end. Future features will be launched periodically as part of an educational experiment - the feature Backlog is captured in the project README.md.'
              }
              hostedLink={'https://sa-food-blog.netlify.app/'}
              githubLink={'https://github.com/kiminel/food-blog'}
            />
          </div>
          <div className="col-span-2 xl:col-span-1">
            <Project
              image={chevonTutoringCoverImage}
              title={"Chevon's Tutoring Services"}
              summary={
                'I am currently working with a client to build a website offering part-time Tutoring Services. The Tech Stack includes React, JavaScript, TailwindCSS and framer-motion. Additional tools include Canva and Adobe Express. I love creating interesting and engaging websites using movement and animations!'
              }
              hostedLink={'https://chevon-kuik-tutoring.netlify.app/'}
              githubLink={'https://github.com/kiminel/chevon-tutoring'}
            />
          </div>
          <div className="col-span-2 xl:col-span-1">
            <Project
              image={flowerPowerSpaCoverImage}
              title={'Flower Power Spa'}
              summary={
                'In this basic brochure website, I played around with video animation capabilities. Further expansions include adding pages to the Header Titles, featuring more animation experiments. The Tech Stack includes React, Typescript, WindiCSS and framer-motion.'
              }
              hostedLink={'https://flower-power-spa.netlify.app/'}
              githubLink={'https://github.com/kiminel/flower-power'}
            />
          </div>
          <div className="col-span-2 xl:col-span-1">
            <Project
              image={toDoPlannerCoverImage}
              title={'To-Do Planner'}
              summary={
                'The focus for this To-Do Planner was to learn the basics of Vue.js. I also used TailwindCSS for the first time and ended up loving it! I prefer using it in my personal projects - it makes styling easy to read and write and quick edit. As always, this website was built with the mobile-first mindset and is fully responsive.'
              }
              hostedLink={'https://to-do-planner.vercel.app/'}
              githubLink={'https://github.com/kiminel/ToDo-Planner'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
