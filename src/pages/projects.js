import React from "react";
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { AnimatedText } from "@/components/elements/AnimatedText";
import FeaturedProject from "@/components/FeaturedProject";
import saFoodBlogCoverImage from "../../public/images/projects/SA-Food-Blog.png";
import toDoPlannerCoverImage from "../../public/images/projects/To-Do-Planner.png";
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
          <AnimatedText
            text={"Reality has limits. Imagination is boundless!"}
          />

          <div className="grid grid-cols-2 gap-24">
            <div className="col-span-2">
              <FeaturedProject
                image={saFoodBlogCoverImage}
                title={"South African Food Blog"}
                summary={
                  "A food blog containing popular, traditional South African recipes. In this project I am focussing on learning GraphQL and using hygraphCMS to manage the content. React.js and Tailwind CSS has been used for the front-end. Future features will be launched periodocally as part of an educational experiment - the feature Backlog is captured in the project's README.md."
                }
                hostedLink={"https://sa-food-blog.netlify.app/"}
                githubLink={"https://github.com/kiminel/food-blog"}
              />
            </div>
            <div className="col-span-1">
              <Project
                image={toDoPlannerCoverImage}
                title={"To-Do Planner"}
                summary={
                  "The focus for this basic To-Do Planner was to learn Vue.js and Tailwind CSS for the first time. I ended up loving Tailwind and prefer using it in my personal projects."
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
