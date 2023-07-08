import React from "react";
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { AnimatedText } from "@/components/elements/AnimatedText";
import FeaturedProject from "@/components/FeaturedProject";
import featuredProjectImage from "../../public/images/profile/Kimi_Wave.png";
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
                image={featuredProjectImage}
                title={"South African Food Blog"}
                summary={
                  "A food blog containing popular, traditional South African recipes. The tech stack includes React, Hygraph CMS and GraphQL."
                }
                hostedLink={"/"}
                githubLink={"/"}
              />
            </div>
            <div className="col-span-1">
              <Project
                image={featuredProjectImage}
                title={"To-Do Planner"}
                summary={"A basic to do planner using React and Tailwind CSS"}
                hostedLink={"/"}
                githubLink={"/"}
              />
            </div>
            <div className="col-span-1">
              <Project
                title={"Budget Tracker"}
                summary={"this is a summary"}
                image={featuredProjectImage}
                hostedLink={"/"}
                githubLink={"/"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
