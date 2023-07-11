import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturedProjectBanner from "./elements/FeaturedProjectBanner";

const FeaturedProject = ({ title, summary, image, hostedLink, githubLink }) => {
  return (
    <article className="w-full h-full flex rounded-3xl bg-light shadow-2xl shadow-dark hover:shadow-night dark:bg-dark dark:shadow-light dark:hover:shadow-night">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="object-cover col-span-1 h-full">
          <Image
            src={image}
            alt={title}
            className="h-full w-full min-h-[200px] rounded-t-3xl xl:rounded-l-3xl xl:rounded-r-none"
            priority="true"
          />
        </div>

        <div className="col-span-1 p-8">
          <div className="grid grid-cols-1 items-center gap-2">
            <div className="row-span-1">
              <FeaturedProjectBanner />
            </div>

            <div className="row-span-1 justify-center text-center">
              <h2 className="my-2 w-full text-2xl 2xl:text-4xl font-extrabold dark:text-light">
                {title}
              </h2>
              <p className="my-2 font-medium 2xl:text-lg text-dark dark:text-light">
                {summary}
              </p>
            </div>
            <div className="row-span-1 flex justify-center text-center">
              <Link
                href={hostedLink}
                target="_blank"
                className="rounded-lg bg-dark text-light p-2 2xl:px-6 2xl:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:"
              >
                View Website
              </Link>
              <Link
                href={githubLink}
                target="_blank"
                className="ml-4 rounded-lg bg-dark text-light p-2 2xl:px-6 2xl:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              >
                View Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
