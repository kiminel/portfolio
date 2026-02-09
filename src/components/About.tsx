import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatedText } from "./elements/AnimatedText";
import aboutMePic from "../../public/images/profile/Headshot.png";
import aboutMeWavePic from "../../public/images/profile/Headshot-Wave.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedNumbersProps = {
  value: number;
};

const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        // toFixed to avoid the fraction values 50.01 - 50.99
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
};

const About = () => {
  const [pic, setPic] = useState(false);

  return (
    <div
      id="about"
      className="w-full grid lg:grid-cols-3 gap-8 md:gap-16 items-center px-20 pt-8 md:pt-0"
    >
      <div className="col-span-1 flex flex-col items-start justify-center text-md md:text-lg py-6 order-2 lg:order-1">
        <h2 className="mb-4 text-lg md:text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
          Hi, I&apos;m Kimi!
        </h2>
        <p className="font-medium dark:text-light">
          I am a Full Stack / Front-End Developer with a passion for creating
          beautiful, responsive websites!
        </p>
        <p className="font-medium my-4 dark:text-light">
          I enjoy exploring and experimenting with the latest trends and
          technologies as well as optimizing the projects that I work on. I am a
          bookworm and often read educational books to understand and avoid
          common mistakes around coding, business management and teamwork.
        </p>
        <p className="font-medium dark:text-light">
          I take pride in writing well-tested, clean and scalable code. I sleep
          easy at night, knowing at the end of the day,{" "}
          <span className="italic">my code will be legacy!</span>
        </p>
      </div>

      <div className="relative col-span-1 h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light dark:border-[1px] order-1">
        <div className="absolute top-0 -right-5 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />

        <div className="w-full flex flex-col justify-center items-center">
          <AnimatedText
            text={"Hello World!"}
            className="mb-4 dark:text-light text-center text-5xl lg:text-6xl"
          />
          <Image
            className="w-auto max-h-[600px] rounded-2xl cursor-pointer"
            onMouseOver={() => setPic(true)}
            onMouseOut={() => setPic(false)}
            alt="Kimi Nel"
            src={pic ? aboutMeWavePic : aboutMePic}
          />
        </div>
      </div>

      <div className="h-full col-span-1 flex flex-col justify-between dark:text-light py-8 gap-y-4 lg:gap-y-0 order-3">
        <div className="flex flex-col lg:items-end items-center">
          <span className="inline-block text-7xl font-bold">
            <AnimatedNumbers value={4} />+
          </span>
          <h2 className="text-xl font-medium text-dark/75 dark:text-light">
            Showcase Projects
          </h2>
        </div>

        <div className="flex flex-col lg:items-end items-center text-center md:text-end">
          <span className="inline-block text-7xl font-bold">
            <AnimatedNumbers value={10} />+
          </span>
          <h2 className="text-xl font-medium text-dark/75 dark:text-light">
            Languages & Frameworks
          </h2>
        </div>

        <div className="flex flex-col lg:items-end items-center">
          <span className="inline-block text-7xl font-bold">
            <AnimatedNumbers value={3} />+
          </span>
          <h2 className="text-xl font-medium text-dark/75 dark:text-light">
            Years Of Experience
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
