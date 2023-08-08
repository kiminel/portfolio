import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ title, summary, image, hostedLink, githubLink }) => {
  return (
    <article className="flex flex-col lg:flex-row items-center p-4 gap-4 rounded-lg bg-light shadow-xl hover:shadow-dark dark:bg-dark dark:shadow-light/25 dark:text-light dark:hover:shadow-light">
      <div className="w-full h-full">
        <Image
          src={image}
          alt={title}
          className="w-full h-auto min-w-[200px] rounded-t-lg md:rounded-t-none"
        />
      </div>

      <div className="flex flex-col row-span-2">
        <h2 className="my-2 w-full text-center text-3xl font-bold dark:text-light px-2">{title}</h2>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center self-center">
          <Link
            href={hostedLink}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-4 text-sm hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark animate-pulse"
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
  )
}

export default Project
