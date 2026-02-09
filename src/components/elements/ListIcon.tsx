import type { RefObject } from "react";
import { motion, useScroll } from "framer-motion";

type ListIconProps = {
  reference: RefObject<HTMLElement>;
};

const ListIcon = ({ reference }: ListIconProps) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute -left-9 stroke-dark dark:stroke-night z-10">
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90">
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-[5px] fill-none dark:stroke-night"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-primary dark:fill-night"
        />
      </svg>
    </figure>
  );
};

export default ListIcon;
