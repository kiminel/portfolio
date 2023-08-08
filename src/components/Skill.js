import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, xPosition, yPosition, href }) => {
  return (
    <motion.a
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-3 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark text-xs md:text-lg"
      href={href}
      target="_blank"
      whileHover={{ scale: 1.15 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: xPosition, y: yPosition }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {name}
    </motion.a>
  )
}

export default Skill
