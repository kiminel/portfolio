import Link from "next/link";
import { AnimatedText } from "@/components/elements/AnimatedText";
import spaceXCoverImage from "../../public/images/projects/Space-X.png";
import iPhoneCoverImage from "../../public/images/projects/iPhone.png";
import eatCuriousCoverImage from "../../public/images/projects/eatCurious.png";
import saFoodBlogCoverImage from "../../public/images/projects/SAfoodBlog.png";
import Project from "@/components/Project";
import { PERSONAL_LINKS } from "../utils/personalInfo";

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
                "Using the publicly available SpaceX API, this website displays Launch information, such as ship name and date of launch. The API has some limitations, which is why I mathematically randomized cover image displays. The goals for this project included utilizing tools such as MaterialUI correctly and fully; while also opting for pure JavaScript animations, instead of using packages."
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
                  skill: "REST API",
                  link: "https://restfulapi.net/",
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
              summary={`This iPhone concept website incorporates 3D animations that change when the user scrolls on the page. The user also has the ability to preview and interact with the phone model when clicking "Try Me". The goals for this project included learning Three.js and incorporating 3D, interactable models.`}
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

          <div className="col-span-2 xl:col-span-1">
            <Project
              image={eatCuriousCoverImage}
              title={"Eat Curious Clone"}
              summary={`This is a clone of the official Eat Curious website, where I incorporated multiple animations and movements, including Marquees, Carousels, Animated Text and Images, etc. The goal for this project was to replicate the original website as much as possible, while learning fundamental Front-End concepts and incorporating the latest trends and technologies.`}
              skills={[
                {
                  skill: "Eat Curious Official Website",
                  link: "https://eat-curious.com/",
                },
                { skill: "React.js", link: "https://react.dev/" },
                {
                  skill: "Next.js",
                  link: "https://nextjs.org/",
                },
                {
                  skill: "Tailwind css",
                  link: "https://tailwindcss.com/",
                },
                {
                  skill: "framer-motion",
                  link: "https://www.framer.com/",
                },
              ]}
              hostedLink={"https://eat-curious-clone.vercel.app/"}
              githubLink={"https://github.com/kiminel/eat-curious-clone"}
            />
          </div>

          <div className="col-span-2 xl:col-span-1">
            <Project
              image={saFoodBlogCoverImage}
              title={"South African Food Blog"}
              summary={`The goal for this project was to learn GraphQL. I used the Hygraph CMS software to manage the backend information and behaviours. The splash images were created using the DALL-E AI model from OpenAI. `}
              skills={[
                { skill: "React.js", link: "https://react.dev/" },
                {
                  skill: "Tailwind css",
                  link: "https://tailwindcss.com/",
                },
                {
                  skill: "Hygraph CMS",
                  link: "https://hygraph.com/",
                },
                {
                  skill: "GraphQL",
                  link: "https://graphql.org/",
                },
                {
                  skill: "graphql-request",
                  link: "https://www.npmjs.com/package/graphql-request",
                },
                {
                  skill: "react-router-dom",
                  link: "https://www.npmjs.com/package/react-router-dom",
                },
              ]}
              hostedLink={"https://sa-food-blog.netlify.app/"}
              githubLink={"https://github.com/kiminel/food-blog"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <Link
          href={PERSONAL_LINKS.githubRepos}
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
