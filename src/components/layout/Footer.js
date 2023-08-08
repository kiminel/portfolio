import React from 'react'
import { CustomLink } from '../elements/CustomLink'

const Footer = () => {
  return (
    <footer className="w-full px-2 lg:px-32 py-8 font-medium flex items-center justify-between relative bg-dark dark:border-t dark:border-light">
      <span className="text-xs text-light">
        {new Date().getFullYear()} &copy; All Rights Reserved
      </span>
      <CustomLink
        href={'https://www.linkedin.com/in/kimi-monique-nel-67a289191/'}
        title={'Kimi Monique Nel'}
        target="_blank"
        className="text-light"
      />
    </footer>
  )
}

export default Footer
