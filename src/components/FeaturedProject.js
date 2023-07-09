import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturedProjectBanner from "./elements/FeaturedProjectBanner";

const FeaturedProject = ({ title, summary, image, hostedLink, githubLink }) => {
  return (
    <article className="w-full my-8 flex items-center justify-around space-x-6 rounded-3xl bg-light shadow-2xl shadow-dark p-6 hover:shadow-night dark:bg-dark dark:shadow-light dark:hover:shadow-night">
      <div className="object-cover">
        <Image src={image} alt={title} className="w-full h-auto" />
      </div>

      <div className="w-1/2 h-full grid grid-cols-1 grid-rows-3 items-center">
        <div className="row-span-1">
          <FeaturedProjectBanner />
        </div>

        <div className="row-span-2 justify-center text-center">
          <h2 className="my-2 w-full text-4xl font-extrabold dark:text-light">
            {title}
          </h2>
          <p className="my-2 font-medium text-lg text-dark dark:text-light">
            {summary}
          </p>
        </div>
        <div className="row-span-3 flex justify-center text-center">
          <Link
            href={hostedLink}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:"
          >
            View Website
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
          >
            View Code
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
