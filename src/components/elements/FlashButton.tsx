import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

type FlashButtonProps = {
  text: string;
  href: string;
  target?: string;
  className?: string;
};

export const FlashButton = ({
  text,
  href,
  target,
  className,
}: FlashButtonProps) => {
  return (
    <>
      <MotionLink
        target={target}
        href={href}
        className={className}
        whileHover={{
          backgroundColor: [
            "#121212", // black
            "rgba(131,58,180,1)", // purple
            "rgba(30, 139, 195, 1)", // blue
            "rgba(46, 204, 113,1)", // green
            "rgba(30, 139, 195, 1)", // blue
            "rgba(131,58,180,1)", // purple
            "#121212", // black
          ],
          transition: { duration: 2.5, repeat: Infinity },
        }}
      >
        <span className="h-full flex justify-center items-center">{text}</span>
      </MotionLink>
    </>
  );
};
