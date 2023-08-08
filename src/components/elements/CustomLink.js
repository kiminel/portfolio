import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const CustomLink = ({ href, title, className = '', target }) => {
  const router = useRouter()

  return (
    <Link href={href} target={target} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 dark:bg-light
          ${router.asPath === href ? 'w-full' : 'w-0'} `}
      >
        &nbsp;
      </span>
    </Link>
  )
}
