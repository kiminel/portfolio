import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Project = ({ title, summary, image, hostedLink, githubLink }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.1 }}
        className="flex-col p-4 gap-4 rounded-2xl bg-light shadow-xl hover:shadow-2xl dark:bg-dark dark:shadow-light/25 dark:text-light dark:hover:shadow-night"
      >
        <Link href={hostedLink} target="_blank">
          <div className="w-full h-full">
            <Image src={image} alt={title} className="h-auto min-w-[200px] max-w-[700px]" />
          </div>
        </Link>

        <div className="flex flex-col row-span-2">
          <Link href={hostedLink} target="_blank">
            <h2 className="my-2 w-full text-center text-3xl font-bold dark:text-light px-2">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

          <div className="mt-2 flex items-center self-center">
            <Link
              href={hostedLink}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-4 text-sm hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark animate-pulse"
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
      </motion.div>
    </>
  )
}

export default Project
