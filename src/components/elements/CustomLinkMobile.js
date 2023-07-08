import React from "react";
import { useRouter } from "next/router";

export const CustomLinkMobile = ({
  href,
  title,
  className = "",
  target,
  toggle,
}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      target={target}
      className={`${className} relative group my-3`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 dark:bg-dark
          ${router.asPath === href ? "w-full" : "w-0"} `}
      >
        &nbsp;
      </span>
    </button>
  );
};
