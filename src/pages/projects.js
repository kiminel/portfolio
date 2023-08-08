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
      <div className="w-full mb-16 flex flex-col items-center justify-center mt-16 lg:pt-40">
        <div className="pb-8">
          <AnimatedText
            text={'Reality has limits. Imagination is boundless!'}
            className="lg:text-center px-4 text-5xl lg:text-6xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 lg:gap-24 mt-4">
          <div className="col-span-2 xl:col-span-1">
            <Project
              image={saFoodBlogCoverImage}
              title={'South African Food Blog'}
              summary={
                'A food blog containing popular, traditional South African recipes. My main goal for this project was learning GraphQL and I used hygraphCMS to manage the content. I used the DALL-E AI to generate the colour-splashed animals and flag.'
              }
              skills={[
                { skill: 'React.js', link: 'https://react.dev/' },
                {
                  skill: 'react-router-dom',
                  link: 'https://www.npmjs.com/package/react-router-dom',
                },
                {
                  skill: 'JavaScript',
                  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                },
                { skill: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { skill: 'TailwindCSS', link: 'https://https://tailwindcss.com/' },
                { skill: 'GraphQL', link: 'https://graphql.org/' },
                { skill: 'graphql-request', link: 'https://www.npmjs.com/package/graphql-request' },
                { skill: 'hygraphCMS', link: 'https://hygraph.com/' },
              ]}
              hostedLink={'https://sa-food-blog.netlify.app/'}
              githubLink={'https://github.com/kiminel/food-blog'}
            />
          </div>

          <div className="col-span-2 xl:col-span-1">
            <Project
              image={chevonTutoringCoverImage}
              title={"Chevon's Tutoring Services"}
              summary={
                'I am currently working with a client to build a website offering part-time Tutoring Services from a Qualified Teacher. I used Canva to create the classroom background art and Adobe Express to make moving stickers. I loved getting creative and incorporating movement!'
              }
              skills={[
                { skill: 'Canva', link: 'https://www.canva.com/' },
                { skill: 'React.js', link: 'https://react.dev/' },
                {
                  skill: 'react-router-dom',
                  link: 'https://www.npmjs.com/package/react-router-dom',
                },
                {
                  skill: 'JavaScript',
                  link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                },
                { skill: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { skill: 'TailwindCSS', link: 'https://https://tailwindcss.com/' },
                { skill: 'framer-motion', link: 'https://www.framer.com/motion/' },
              ]}
              hostedLink={'https://chevon-kuik-tutoring.netlify.app/'}
              githubLink={'https://github.com/kiminel/chevon-tutoring'}
            />
          </div>

          <div className="col-span-2 xl:col-span-1">
            <Project
              image={flowerPowerSpaCoverImage}
              title={'Flower Power Spa'}
              summary={
                'In this basic brochure website, I played around with video animation capabilities and the importance of server-side rendering for large-media. '
              }
              skills={[
                { skill: 'React.js', link: 'https://react.dev/' },
                {
                  skill: 'react-router-dom',
                  link: 'https://www.npmjs.com/package/react-router-dom',
                },
                {
                  skill: 'Vite',
                  link: 'https://vitejs.dev/',
                },
                {
                  skill: 'TypeScript',
                  link: 'https://www.typescriptlang.org/docs/',
                },
                { skill: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { skill: 'WindiCSS', link: 'https://windicss.org/' },
                { skill: 'framer-motion', link: 'https://www.framer.com/motion/' },
              ]}
              hostedLink={'https://flower-power-spa.netlify.app/'}
              githubLink={'https://github.com/kiminel/flower-power'}
            />
          </div>

          <div className="col-span-2 xl:col-span-1">
            <Project
              image={toDoPlannerCoverImage}
              title={'To-Do Planner'}
              summary={
                'The focus for this To-Do Planner was to learn the basics of Vue.js. I also used TailwindCSS for the first time and ended up loving it! As always, this website was built with the mobile-first mindset and is fully responsive.'
              }
              skills={[
                { skill: 'Vue.js', link: 'https://vuejs.org/' },
                {
                  skill: 'Vite',
                  link: 'https://vitejs.dev/',
                },
                { skill: 'TailwindCSS', link: 'https://https://tailwindcss.com/' },
              ]}
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
