import React, { useState } from 'react'
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'
import LinkedInLogo from '../icons/LinkedInLogo'
import GithubLogo from '../icons/GithubLogo'
import useThemeSwitcher from '../hooks/useThemeSwitcher'
import Logo from '../icons/Logo'
import HamburgerMenu from '../icons/HamburgerMenu'
import Xmark from '../icons/Xmark'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const scrollToHome = () => {
    const section = document.querySelector(`#home`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToSkills = () => {
    const section = document.querySelector(`#skills`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToEducation = () => {
    const section = document.querySelector(`#education`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToExperience = () => {
    const section = document.querySelector(`#experience`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToAbout = () => {
    const section = document.querySelector(`#about`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToProjects = () => {
    const section = document.querySelector(`#projects`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToMobileHome = () => {
    const section = document.querySelector(`#home`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    handleClick()
  }
  const scrollToMobileSkills = () => {
    const section = document.querySelector(`#skills`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    handleClick()
  }
  const scrollToMobileEducation = () => {
    const section = document.querySelector(`#education`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    handleClick()
  }
  const scrollToMobileExperience = () => {
    const section = document.querySelector(`#experience`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    handleClick()
  }
  const scrollToMobileAbout = () => {
    const section = document.querySelector(`#about`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    handleClick()
  }
  const scrollToMobileProjects = () => {
    const section = document.querySelector(`#projects`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    handleClick()
  }

  return (
    <header className="w-full px-32 py-6 font-medium flex items-center justify-between dark:border-b dark:border-light sticky top-0 z-50 bg-light dark:bg-dark shadow-lg">
      <div className="absolute left-12 flex items-center justify-center mt-2">
        {!isOpen && (
          <Link href={'/'}>
            <Logo className={'w-8 h-8 md:w-12 md:h-12 dark:text-light'} />
          </Link>
        )}
      </div>

      <div className="w-full sm:flex justify-between items-center hidden">
        <nav className="dark:text-light space-x-6">
          <button onClick={scrollToHome} className="">
            Home
          </button>
          <button onClick={scrollToSkills} className="">
            Skills
          </button>
          <button onClick={scrollToEducation} className="">
            Education
          </button>
          <button onClick={scrollToExperience} className="">
            Experience
          </button>
          <button onClick={scrollToAbout} className="">
            About
          </button>
          <button onClick={scrollToProjects} className="">
            Projects
          </button>
        </nav>
        <nav className="flex items-center justify-center flex-wrap space-x-2">
          <a
            href={'https://www.linkedin.com/in/kimi-monique-nel-67a289191'}
            target={'_blank'}
            className="bg-dark text-light border-[2px] p-2 rounded-full hover:-translate-y-1 transition duration-200 hover:bg-light hover:border-solid hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
          >
            <LinkedInLogo className={'h-4 w-4'} />
          </a>
          <a
            href={'https://github.com/kiminel'}
            target={'_blank'}
            className="hover:-translate-y-1 transition duration-200 bg-dark text-light border-[2px] rounded-full p-1 hover:bg-light hover:border-solid hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
          >
            <GithubLogo className={'h-6 w-6'} />
          </a>

          <button
            className="hover:-translate-y-1 transition duration-200"
            onClick={() => {
              setMode(mode === 'light' ? 'dark' : 'light')
            }}
          >
            {mode === 'light' ? (
              <Moon className="h-9 w-9 bg-dark text-light border-[2px] rounded-full p-1 hover:bg-light hover:border-solid hover:text-dark dark:text-light dark:hover:text-dark" />
            ) : (
              <Sun className="h-9 w-9 bg-light text-dark border-[2px] rounded-full p-1 hover:bg-dark hover:border-solid hover:text-light dark:text-dark dark:hover:text-light" />
            )}
          </button>
        </nav>
      </div>

      <button
        className="absolute right-12 items-center justify-center mt-2 flex sm:hidden"
        onClick={handleClick}
      >
        {!isOpen ? <HamburgerMenu className={'w-7 h-7 dark:text-light'} /> : <></>}
      </button>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 text-light dark:text-dark"
        >
          <button onClick={handleClick} className="absolute top-0 right-0 pt-6 pr-6">
            <Xmark className={'w-8 h-8 dark:text-light'} />
          </button>
          <nav className="dark:text-light flex flex-col gap-4">
            <button onClick={scrollToMobileHome} className="">
              Home
            </button>
            <button onClick={scrollToMobileSkills} className="">
              Skills
            </button>
            <button onClick={scrollToMobileEducation} className="">
              Education
            </button>
            <button onClick={scrollToMobileExperience} className="">
              Experience
            </button>
            <button onClick={scrollToMobileAbout} className="">
              About
            </button>
            <button onClick={scrollToMobileProjects} className="">
              Projects
            </button>
          </nav>
          <nav className="flex items-center justify-center flex-wrap space-x-6 mt-4">
            <a
              href={'https://www.linkedin.com/in/kimi-monique-nel-67a289191'}
              target={'_blank'}
              className="bg-dark text-light border-[2px] p-2 rounded-full hover:-translate-y-1 transition duration-200 hover:bg-light hover:border-solid hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
            >
              <LinkedInLogo className={'h-4 w-4'} />
            </a>
            <a
              href={'https://github.com/kiminel'}
              target={'_blank'}
              className="hover:-translate-y-1 transition duration-200 bg-dark text-light rounded-full p-1 hover:bg-light hover:border-solid hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
            >
              <GithubLogo className={'h-6 w-6'} />
            </a>

            <button
              className="hover:-translate-y-1 transition duration-200"
              onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light')
              }}
            >
              {mode === 'light' ? (
                <Moon className="h-9 w-9 bg-dark text-light border-[2px] rounded-full p-1 hover:bg-light hover:border-solid hover:text-dark dark:text-light dark:hover:text-dark" />
              ) : (
                <Sun className="h-9 w-9 bg-light text-dark border-[2px] rounded-full p-1 hover:bg-dark hover:border-solid hover:text-light dark:text-dark dark:hover:text-light" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  )
}

export default Navbar
