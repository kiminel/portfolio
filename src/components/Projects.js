import React from "react";
import Link from "next/link";
import { AnimatedText } from "@/components/elements/AnimatedText";
import spaceXCoverImage from "../../public/images/projects/Space-X.png";
import iPhoneCoverImage from "../../public/images/projects/iPhone.png";
import Project from "@/components/Project";

const Projects = () => {
  return (
    <div id="projects" className="md:px-20">
      <div className="w-full mb-16 flex flex-col items-center justify-center mt-16 lg:pt-40 lg:mt-40 p-6 md:p-0">
        <div className="pb-12">
          <AnimatedText
            text={"Reality has limits. Imagination is boundless!"}
            className="lg:text-center px-4 text-5xl lg:text-6xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-14 lg:gap-24 mt-4">
          <div className="col-span-2 xl:col-span-1">
            <Project
              image={spaceXCoverImage}
              title={"SpaceX Launches"}
              summary={
                "I used the publicly available SpaceX API to build this concept website using the latest technologies and trends. Instead of using packages to help with scrolling animations, I opted for pure JavaScript to showcase how different React Hooks operate."
              }
              skills={[
                { skill: "React.js", link: "https://react.dev/" },
                {
                  skill: "Next.js",
                  link: "https://nextjs.org/",
                },
                {
                  skill: "JavaScript",
                  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                },
                {
                  skill: "Tailwind CSS",
                  link: "https://tailwindcss.com/",
                },
                {
                  skill: "MaterialUI",
                  link: "https://mui.com/",
                },
                {
                  skill: "MUI icons",
                  link: "https://mui.com/material-ui/material-icons/",
                },
                {
                  skill: "SpaceX API",
                  link: "https://github.com/r-spacex/SpaceX-API",
                },
                {
                  skill: "react-moment",
                  link: "https://www.npmjs.com/package/react-moment",
                },
              ]}
              hostedLink={"https://spacex-concept.vercel.app/"}
              githubLink={"https://github.com/kiminel/sapcex"}
            />
          </div>

          <div className="col-span-2 xl:col-span-1">
            <Project
              image={iPhoneCoverImage}
              title={"iPhone 3D Showcase"}
              summary={
                "This iPhone concept website incorporates 3D animations that change when the user scrolls on the page. Additionally, the user can preview and interact with the phone model."
              }
              skills={[
                { skill: "React.js", link: "https://react.dev/" },
                {
                  skill: "Vite",
                  link: "https://vitejs.dev/",
                },
                {
                  skill: "Three.js",
                  link: "https://threejs.org/",
                },
                {
                  skill: "WebGi SDK",
                  link: "https://webgi.xyz/",
                },
                {
                  skill: "GSAP",
                  link: "https://greensock.com/gsap//",
                },
                {
                  skill: "CSS",
                  link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                },
                {
                  skill: "Sketchfab",
                  link: "https://sketchfab.com/3d-models/iphone-13-pro-max-4f92b60d824a42c89bbf1833374c4f73",
                },
              ]}
              hostedLink={"https://iphone-concept.vercel.app/"}
              githubLink={"https://github.com/kiminel/iphone"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <Link
          href="https://github.com/kiminel?tab=repositories"
          target="_blank"
          className="ml-4 rounded-lg bg-dark text-light p-2 px-4 text-sm hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
        >
          Show More Projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;
