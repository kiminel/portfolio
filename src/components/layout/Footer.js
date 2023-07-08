import React from "react";
import { Layout } from "./Layout";
import { CustomLink } from "../elements/CustomLink";

const Footer = () => {
  return (
    <footer className="font-medium text-lg w-full border-dark border-[1px] border-t-light">
      <Layout className="py-2.5 flex items-center justify-between !bg-dark text-light ">
        <span className="text-xs">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <CustomLink
          href={"https://portfolio-kimi-nel.vercel.app/"}
          title={"Kimi Monique Nel"}
          target="_blank"
          className="dark:text-light"
        />
      </Layout>
    </footer>
  );
};

export default Footer;
