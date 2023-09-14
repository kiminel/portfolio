import React, { useState } from "react";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import LinkedInLogo from "../icons/LinkedInLogo";
import GithubLogo from "../icons/GithubLogo";
import Logo from "../icons/Logo";
import HamburgerMenu from "../icons/HamburgerMenu";
import Xmark from "../icons/Xmark";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const NavLinks = () => {
    return (
      <nav className="flex flex-col md:flex-row items-center pb-4 md:pb-0 space-x-2 text-light md:text-dark dark:text-dark md:dark:text-light">
        <Link
          smooth
          spy
          offset={-200}
          to="home"
          className="md:ml-8 hover:cursor-pointer hover:bg-light hover:text-dark md:hover:bg-dark md:hover:text-light dark:md:hover:bg-light dark:md:hover:text-dark p-2 rounded-lg"
        >
          Home
        </Link>
        <Link
          smooth
          spy
          offset={50}
          to="skills"
          className="hover:cursor-pointer hover:bg-light hover:text-dark md:hover:bg-dark md:hover:text-light dark:md:hover:bg-light dark:md:hover:text-dark p-2 rounded-lg"
        >
          Skills
        </Link>
        <Link
          smooth
          spy
          offset={-25}
          to="education"
          className="hover:cursor-pointer hover:bg-light hover:text-dark md:hover:bg-dark md:hover:text-light dark:md:hover:bg-light dark:md:hover:text-dark p-2 rounded-lg"
        >
          Education
        </Link>
        <Link
          smooth
          spy
          offset={-25}
          to="experience"
          className="hover:cursor-pointer hover:bg-light hover:text-dark md:hover:bg-dark md:hover:text-light dark:md:hover:bg-light dark:md:hover:text-dark p-2 rounded-lg"
        >
          Experience
        </Link>
        <Link
          smooth
          spy
          offset={-95}
          to="about"
          className="hover:cursor-pointer hover:bg-light hover:text-dark md:hover:bg-dark md:hover:text-light dark:md:hover:bg-light dark:md:hover:text-dark p-2 rounded-lg"
        >
          About
        </Link>
        <Link
          smooth
          spy
          offset={-95}
          to="projects"
          className="hover:cursor-pointer hover:bg-light hover:text-dark md:hover:bg-dark md:hover:text-light dark:md:hover:bg-light dark:md:hover:text-dark p-2 rounded-lg"
        >
          Projects
        </Link>
      </nav>
    );
  };

  const SocialLinks = () => {
    return (
      <nav className="flex items-center justify-center space-x-2">
        <a
          href={"https://www.linkedin.com/in/kimi-monique-nel-67a289191"}
          target={"_blank"}
          className="bg-dark text-light border-2 p-2 rounded-full hover:-translate-y-1 transition duration-200 hover:bg-light hover:border-solid hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
        >
          <LinkedInLogo className={"h-4 w-4"} />
        </a>
        <a
          href={"https://github.com/kiminel"}
          target={"_blank"}
          className="hover:-translate-y-1 transition duration-200 bg-dark text-light border-2 rounded-full p-1 hover:bg-light hover:border-solid hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
        >
          <GithubLogo className={"h-6 w-6"} />
        </a>

        <button
          className="hover:-translate-y-1 transition duration-200"
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
          }}
        >
          {mode === "light" ? (
            <Moon className="h-9 w-9 bg-dark text-light border-2 rounded-full p-1 hover:bg-light hover:border-solid hover:text-dark dark:text-light dark:hover:text-dark" />
          ) : (
            <Sun className="h-9 w-9 bg-light text-dark border-2 rounded-full p-1 hover:bg-dark hover:border-solid hover:text-light dark:text-dark dark:hover:text-light" />
          )}
        </button>
      </nav>
    );
  };

  return (
    <header className="w-full px-8 py-8 md:py-6 font-medium flex items-center justify-between dark:border-b dark:border-light sticky top-0 z-50 bg-light dark:bg-dark shadow-lg">
      <div className="absolute left-6 flex items-center justify-center">
        <Logo className={"w-12 h-12 dark:text-light"} />
      </div>

      <div id="desktop-view" className="w-full md:grid hidden grid-cols-4">
        <div className="col-span-3 pl-8">{NavLinks()}</div>
        <div className="col-span-1 flex justify-end">{SocialLinks()}</div>
      </div>

      <button
        className="absolute right-12 items-center justify-center mt-2 flex md:hidden"
        onClick={handleClick}
      >
        {!isOpen ? (
          <div className="-mt-2">
            <HamburgerMenu className={"w-10 h-10 dark:text-light"} />
          </div>
        ) : (
          <></>
        )}
      </button>

      {isOpen ? (
        <motion.div
          id="mobile-view"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <button
            onClick={handleClick}
            className="absolute top-0 right-0 pt-6 pr-6"
          >
            <Xmark className={"w-8 h-8 text-light dark:text-dark"} />
          </button>
          {NavLinks()}
          {SocialLinks()}
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
