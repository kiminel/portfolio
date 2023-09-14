import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = ({ title, summary, skills, image, hostedLink, githubLink }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        whileInView={{ rotate: 360, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
        whileHover={{ scale: 1.1 }}
        className="flex-col p-4 gap-4 rounded-2xl bg-light shadow-xl hover:shadow-2xl dark:bg-dark dark:shadow-light/25 dark:text-light dark:hover:shadow-night"
      >
        <Link href={hostedLink} target="_blank">
          <div className="w-auto h-full flex justify-center">
            <Image
              src={image}
              alt={title}
              className="w-auto h-full min-w-[200px]"
            />
          </div>
        </Link>

        <Link href={hostedLink} target="_blank">
          <h2 className="my-2 w-full text-center text-3xl font-bold dark:text-light px-2">
            {title}
          </h2>
        </Link>

        <div className="grid lg:grid-cols-2">
          <div className="p-2 font-medium text-dark dark:text-light">
            {summary}
          </div>
          <div>
            <div className="p-2 flex flex-wrap gap-4 justify-center md:justify-normal">
              {skills?.map((skill) => (
                <a
                  href={skill.link}
                  target="_blank"
                  key={skill.skill}
                  className="bg-primary/30 text-primary dark:bg-night/40 dark:text-night py-1 px-2 rounded-lg font-medium hover:bg-primary hover:text-light hover:dark:bg-night hover:dark:text-light"
                >
                  {skill.skill}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center self-center">
          <Link
            href={hostedLink}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-4 text-sm hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
          >
            View Website
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-4 text-sm hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
          >
            View Code
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
