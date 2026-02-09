import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-2 lg:px-32 py-8 font-medium flex items-center justify-between relative bg-dark dark:border-t dark:border-light">
      <span className="text-xs text-light">
        {new Date().getFullYear()} &copy; All Rights Reserved
      </span>
      <Link
        href={"https://www.linkedin.com/in/kimi-monique-nel-67a289191/"}
        target="_blank"
        className="text-light"
      >
        Kimi Monique Nel
      </Link>
    </footer>
  );
};

export default Footer;
