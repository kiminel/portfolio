import React from "react";
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { AnimatedText } from "@/components/elements/AnimatedText";
import FeaturedProject from "@/components/FeaturedProject";
import saFoodBlogCoverImage from "../images/SA-Food-Blog.png";
import flowerPowerSpaCoverImage from "../images/Flower-Power-Spa.png";
import toDoPlannerCoverImage from "../images/To-Do-Planner.png";
import Project from "@/components/Project";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Kimi Nel</title>
        <meta name="projects" description="Showcase Projects"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <div className="my-8">
            <AnimatedText
              text={"Reality has limits. Imagination is boundless!"}
              className="lg:text-center"
            />
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div className="col-span-2">
              <FeaturedProject
                image={saFoodBlogCoverImage}
                title={"South African Food Blog"}
                summary={
                  "A food blog containing popular, traditional South African recipes. In this project I am focusing on learning GraphQL and using hygraphCMS to manage the content. React.js and Tailwind CSS has been used for the front-end. Future features will be launched periodically as part of an educational experiment - the feature Backlog is captured in the project's README.md."
                }
                hostedLink={"https://sa-food-blog.netlify.app/"}
                githubLink={"https://github.com/kiminel/food-blog"}
              />
            </div>
            <div className="col-span-2 xl:col-span-1">
              <Project
                image={flowerPowerSpaCoverImage}
                title={"Flower Power Spa"}
                summary={
                  "In this basic brochure website, I played around with video animation capabilities. Further expansions include adding pages to the Header Titles, featuring more animation experiments. The Tech Stack includes React, Typescript, WindiCSS and framer-motion."
                }
                hostedLink={"https://flower-power-spa.netlify.app/"}
                githubLink={"https://github.com/kiminel/flower-power"}
              />
            </div>
            <div className="col-span-2 xl:col-span-1">
              <Project
                image={toDoPlannerCoverImage}
                title={"To-Do Planner"}
                summary={
                  "The focus for this To-Do Planner was to learn the basics of Vue.js. I also used TailwindCSS for the first time and ended up loving it! I prefer using it in my personal projects - it makes styling easy to read and write and quick edit. As always, this website was built with the mobile-first mindset and is fully responsive."
                }
                hostedLink={"https://to-do-planner.vercel.app/"}
                githubLink={"https://github.com/kiminel/ToDo-Planner"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
