import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ title, summary, image, hostedLink, githubLink }) => {
  return (
    <article className="w-full h-full flex items-center justify-center rounded-2xl bg-light p-6 shadow-xl hover:shadow-dark dark:bg-dark dark:shadow-light/25 dark:text-light dark:hover:shadow-light">
      <div className="w-1/2">
        <Image src={image} alt={title} className="w-full h-auto" />
      </div>

      <div className="pl-6 flex flex-col row-span-2">
        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={hostedLink}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-4 text-sm hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:"
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
      </div>
    </article>
  );
};

export default Project;
