import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div id="skills">
      <h2 className="w-full font-bold lg:mt-44 mt-12 lg:pt-40 pb-4 lg:pb-0 lg:mb-8 text-5xl lg:text-7xl text-center dark:text-light">
        Skills
      </h2>

      <div
        id="desktop-view"
        className="hidden w-full min-h-[400px] lg:h-[80vh] relative md:flex items-center justify-center rounded-full bg-circularLightSmall lg:bg-circularLightLarge dark:bg-circularDarkSmall lg:dark:bg-circularDarkLarge"
      >
        <motion.div className="flex items-center p-8 justify-center rounded-full font-semibold bg-primary dark:bg-night text-light shadow-dark">
          Dev
        </motion.div>

        <Skill
          name={'CSS'}
          xPosition={'-7vw'}
          yPosition={'-5vw'}
          href={'https://developer.mozilla.org/en-US/docs/Web/CSS'}
        />
        <Skill
          name={'HTML'}
          xPosition={'5vw'}
          yPosition={'-9vw'}
          href={'https://developer.mozilla.org/en-US/docs/Web/HTML'}
        />
        <Skill
          name={'TypeScript'}
          xPosition={'27vw'}
          yPosition={'-8vw'}
          href={'https://www.typescriptlang.org/docs/'}
        />
        <Skill
          name={'framer-motion'}
          xPosition={'-30vw'}
          yPosition={'0vw'}
          href={'https://www.framer.com/motion/'}
        />
        <Skill
          name={'HeadlessUI'}
          xPosition={'-30vw'}
          yPosition={'-10vw'}
          href={'https://headlessui.com/'}
        />
        <Skill
          name={'C#'}
          xPosition={'37vw'}
          yPosition={'1vw'}
          href={'https://learn.microsoft.com/en-us/dotnet/csharp/'}
        />
        <Skill
          name={'SQL'}
          xPosition={'-10vw'}
          yPosition={'14vw'}
          href={'https://dev.mysql.com/'}
        />
        <Skill
          name={'TypeORM'}
          xPosition={'-23vw'}
          yPosition={'9vw'}
          href={'https://typeorm.io/'}
        />
        <Skill
          name={'Docker'}
          xPosition={'25vw'}
          yPosition={'10vw'}
          href={'https://docs.docker.com/'}
        />
        <Skill name={'React'} xPosition={'-2vw'} yPosition={'-15vw'} href={'https://react.dev/'} />
        <Skill
          name={'Tailwind CSS'}
          xPosition={'-20vw'}
          yPosition={'-15vw'}
          href={'https://https://tailwindcss.com/'}
        />
        <Skill
          name={'AWS'}
          xPosition={'11vw'}
          yPosition={'14vw'}
          href={'https://docs.aws.amazon.com/'}
        />
        <Skill
          name={'JavaScript'}
          xPosition={'18vw'}
          yPosition={'-15vw'}
          href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}
        />
        <Skill
          name={'Node.js'}
          xPosition={'24vw'}
          yPosition={'2vw'}
          href={'https://nodejs.org/en'}
        />
        <Skill
          name={'Next.js'}
          xPosition={'11vw'}
          yPosition={'-2vw'}
          href={'https://nextjs.org/'}
        />
        <Skill name={'GIT'} xPosition={'3vw'} yPosition={'9vw'} href={'https://git-scm.com/doc'} />
        <Skill
          name={'Canva'}
          xPosition={'-21vw'}
          yPosition={'-6vw'}
          href={'https://www.canva.com/'}
        />
        <Skill
          name={'Figma'}
          xPosition={'-11vw'}
          yPosition={'3vw'}
          href={'https://www.figma.com/'}
        />
      </div>

      <div
        id="mobile-view"
        className="md:hidden w-full min-h-[400px] lg:h-[80vh] relative flex items-center justify-center rounded-full bg-circularLightSmall lg:bg-circularLightLarge dark:bg-circularDarkSmall lg:dark:bg-circularDarkLarge"
      >
        <motion.div className="flex items-center p-8 justify-center rounded-full font-semibold bg-primary dark:bg-night text-light shadow-dark">
          Dev
        </motion.div>

        <Skill
          name={'CSS'}
          xPosition={'-7vw'}
          yPosition={'-15vw'}
          href={'https://developer.mozilla.org/en-US/docs/Web/CSS'}
        />
        <Skill
          name={'HTML'}
          xPosition={'5vw'}
          yPosition={'-21vw'}
          href={'https://developer.mozilla.org/en-US/docs/Web/HTML'}
        />
        <Skill
          name={'TypeScript'}
          xPosition={'27vw'}
          yPosition={'-20vw'}
          href={'https://www.typescriptlang.org/docs/'}
        />
        <Skill
          name={'framer-motion'}
          xPosition={'-30vw'}
          yPosition={'0vw'}
          href={'https://www.framer.com/motion/'}
        />
        <Skill
          name={'HeadlessUI'}
          xPosition={'-30vw'}
          yPosition={'-20vw'}
          href={'https://headlessui.com/'}
        />
        <Skill
          name={'C#'}
          xPosition={'37vw'}
          yPosition={'13vw'}
          href={'https://learn.microsoft.com/en-us/dotnet/csharp/'}
        />
        <Skill
          name={'SQL'}
          xPosition={'-10vw'}
          yPosition={'32vw'}
          href={'https://dev.mysql.com/'}
        />
        <Skill
          name={'TypeORM'}
          xPosition={'-23vw'}
          yPosition={'23vw'}
          href={'https://typeorm.io/'}
        />
        <Skill
          name={'Docker'}
          xPosition={'25vw'}
          yPosition={'25vw'}
          href={'https://docs.docker.com/'}
        />
        <Skill name={'React'} xPosition={'-2vw'} yPosition={'-40vw'} href={'https://react.dev/'} />
        <Skill
          name={'Tailwind CSS'}
          xPosition={'-20vw'}
          yPosition={'-30vw'}
          href={'https://https://tailwindcss.com/'}
        />
        <Skill
          name={'AWS'}
          xPosition={'11vw'}
          yPosition={'34vw'}
          href={'https://docs.aws.amazon.com/'}
        />
        <Skill
          name={'JavaScript'}
          xPosition={'18vw'}
          yPosition={'-30vw'}
          href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}
        />
        <Skill
          name={'Node.js'}
          xPosition={'22vw'}
          yPosition={'8vw'}
          href={'https://nodejs.org/en'}
        />
        <Skill
          name={'Next.js'}
          xPosition={'30vw'}
          yPosition={'-7vw'}
          href={'https://nextjs.org/'}
        />
        <Skill name={'GIT'} xPosition={'3vw'} yPosition={'24vw'} href={'https://git-scm.com/doc'} />
        <Skill
          name={'Canva'}
          xPosition={'-21vw'}
          yPosition={'-10vw'}
          href={'https://www.canva.com/'}
        />
        <Skill
          name={'Figma'}
          xPosition={'-11vw'}
          yPosition={'13vw'}
          href={'https://www.figma.com/'}
        />
      </div>
    </div>
  )
}

export default Skills
