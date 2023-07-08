import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { AnimatedText } from "@/components/elements/AnimatedText";
import { Layout } from "@/components/layout/Layout";
import aboutMePic from "../../public/images/profile/Headshot.png";
import aboutMeWavePic from "../../public/images/profile/Headshot-Wave.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Image from "next/image";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  //https://www.framer.com/motion/motionvalue
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        //toFixed to avoid the fraction values 50.01 - 50.99
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export const About = () => {
  const [pic, setPic] = useState(false);

  return (
    <>
      <Head>
        <title>About | Kimi Nel</title>
        <meta name="about" description="About Kimi Nel"></meta>
      </Head>
      <main className="flex w-full flex-col item-center justify-center">
        <Layout className="py-12">
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-center text-lg ">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                Hi, I&apos;m Kimi!
              </h2>
              <p className="font-medium dark:text-light">
                I am a Web/ Full Stack Developer with a passion for creating
                beautiful, responsive websites!
              </p>
              <p className="font-medium my-4 dark:text-light">
                I enjoy exploring the latest standards and optimizing the
                projects that I work on. I am also a bookworm and often read
                educational books to understand and avoid common mistakes around
                coding, business management and teamwork.
              </p>
              <p className="font-medium dark:text-light">
                I take pride in writing well-tested, clean code. I sleep easy at
                night, knowing that at the end of the day, my code WILL be
                legacy!
              </p>
            </div>

            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light dark:border-[1px]">
              <div className="absolute top-0 -right-5 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />
              <AnimatedText
                text={"Hello World!"}
                className="mb-4 dark:text-light"
              />
              <Image
                className="w-auto h-1/2 rounded-2xl cursor-pointer"
                onMouseOver={() => setPic(true)}
                onMouseOut={() => setPic(false)}
                alt="Kimi Nel"
                src={pic ? aboutMeWavePic : aboutMePic}
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between dark:text-light">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light">
                  Showcase Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Languages & Frameworks
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <Experience />
          <Education />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default About;
