import React, { useState } from 'react'
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'
import LinkedInLogo from '../icons/LinkedInLogo'
import GithubLogo from '../icons/GithubLogo'
import useThemeSwitcher from '../hooks/useThemeSwitcher'
import Logo from '../icons/Logo'
import HamburgerMenu from '../icons/HamburgerMenu'
import Xmark from '../icons/Xmark'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const NavLinks = () => {
    return (
      <nav className="text-light md:text-dark dark:text-dark md:dark:text-light space-x-6 flex flex-col md:flex-row text-center pr-8 md:pr-0">
        <Link
          activeClass="active"
          smooth
          spy
          offset={-95}
          to="home"
          className="hover:cursor-pointer hover:bg-dark hover:text-light p-2 rounded-lg pl-8 md:pl-2"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          offset={50}
          to="skills"
          className="hover:cursor-pointer hover:bg-dark hover:text-light p-2 rounded-lg"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          offset={-5}
          to="education"
          className="hover:cursor-pointer hover:bg-dark hover:text-light p-2 rounded-lg"
        >
          Education
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          offset={-5}
          to="experience"
          className="hover:cursor-pointer hover:bg-dark hover:text-light p-2 rounded-lg"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          offset={-95}
          to="about"
          className="hover:cursor-pointer hover:bg-dark hover:text-light p-2 rounded-lg"
        >
          About
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          offset={-95}
          to="projects"
          className="hover:cursor-pointer hover:bg-dark hover:text-light p-2 rounded-lg"
        >
          Projects
        </Link>
      </nav>
    )
  }

  return (
    <header className="w-full px-32 py-6 font-medium flex items-center justify-between dark:border-b dark:border-light sticky top-0 z-50 bg-light dark:bg-dark shadow-lg">
      <div className="absolute left-12 flex items-center justify-center mt-2">
        {!isOpen && <Logo className={'w-8 h-8 md:w-12 md:h-12 dark:text-light'} />}
      </div>

      <div className="w-full sm:flex justify-between items-center hidden">
        {NavLinks()}

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
          className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <button onClick={handleClick} className="absolute top-0 right-0 pt-6 pr-6">
            <Xmark className={'w-8 h-8 text-light dark:text-dark'} />
          </button>
          {NavLinks()}

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
