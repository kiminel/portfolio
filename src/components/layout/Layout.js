import React from 'react'

export const Layout = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light px-2 lg:px-32 dark:bg-dark p-4 ${className}`}
    >
      {children}
    </div>
  )
}
