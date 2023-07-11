import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-36 w-full text-center dark:text-light">
        Skills
      </h2>
      <div className="w-full min-h-[300px] lg:h-screen relative flex items-center justify-center rounded-full bg-circularLightSmall lg:bg-circularLightLarge dark:bg-circularDarkSmall lg:dark:bg-circularDarkLarge">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-primary text-light p-8 shadow-dark dark:bg-night">
          Dev
        </motion.div>
        <Skill
          name={"CSS"}
          xPosition={"-15vw"}
          yPosition={"-12vw"}
          href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
        />
        <Skill
          name={"HTML"}
          xPosition={"-35vw"}
          yPosition={"2vw"}
          href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
        />
        <Skill
          name={"Docker"}
          xPosition={"-37vw"}
          yPosition={"-11vw"}
          href={"https://docs.docker.com/"}
        />
        <Skill
          name={"TypeScript"}
          xPosition={"1vw"}
          yPosition={"18vw"}
          href={"https://www.typescriptlang.org/docs/"}
        />
        <Skill
          name={"React"}
          xPosition={"-17vw"}
          yPosition={"-21vw"}
          href={"https://react.dev/"}
        />
        <Skill
          name={"C#"}
          xPosition={"-25vw"}
          yPosition={"-5vw"}
          href={"https://learn.microsoft.com/en-us/dotnet/csharp/"}
        />
        <Skill
          name={"SQL"}
          xPosition={"33vw"}
          yPosition={"-5vw"}
          href={"https://dev.mysql.com/"}
        />
        <Skill
          name={"Node.js"}
          xPosition={"-20vw"}
          yPosition={"10vw"}
          href={"https://nodejs.org/en"}
        />
        <Skill
          name={"Next.js"}
          xPosition={"1vw"}
          yPosition={"-18vw"}
          href={"https://nextjs.org/"}
        />
        <Skill
          name={"AWS"}
          xPosition={"19vw"}
          yPosition={"3vw"}
          href={"https://docs.aws.amazon.com/"}
        />
        <Skill
          name={"JavaScript"}
          xPosition={"25vw"}
          yPosition={"13vw"}
          href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
        />
        <Skill
          name={"TypeORM"}
          xPosition={"18vw"}
          yPosition={"-12vw"}
          href={"https://typeorm.io/"}
        />
        <Skill
          name={"GIT"}
          xPosition={"28vw"}
          yPosition={"-20vw"}
          href={"https://git-scm.com/doc"}
        />
      </div>
    </>
  );
};

export default Skills;
