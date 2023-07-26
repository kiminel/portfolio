import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { AnimatedText } from "@/components/elements/AnimatedText";
import { Layout } from "@/components/layout/Layout";
import aboutMePic from "../../public/images/profile/Headshot.png";
import aboutMeWavePic from "../../public/images/profile/Headshot-Wave.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Image from "next/image";
import TimeLine from "@/components/TimeLine";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

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
      <main className="w-full flex flex-col item-center justify-center px-4">
        <Layout className="py-8">
          <div className="w-full lg:grid grid-cols-8 gap-16 items-center">
            <div className="col-span-3 flex flex-col items-start justify-center text-md md:text-lg py-6">
              <h2 className="mb-4 text-lg md:text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                Hi, I&apos;m Kimi!
              </h2>
              <p className="font-medium dark:text-light">
                I am a Software Engineer/ Full Stack Developer with a passion
                for creating beautiful, responsive websites!
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

            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light dark:border-[1px]">
              <div className="absolute top-0 -right-5 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />

              <div className="w-full flex flex-col justify-center items-center">
                <AnimatedText
                  text={"Hello World!"}
                  className="mb-4 dark:text-light text-center"
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

            <div className="h-full col-span-2 flex flex-col items-center lg:items-end justify-between dark:text-light py-8 gap-y-4 lg:gap-y-0">
              <div className="flex flex-col lg:items-end items-center lg:justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light">
                  Showcase Projects
                </h2>
              </div>
              <div className="flex flex-col lg:items-end items-center lg:justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Languages & Frameworks
                </h2>
              </div>
              <div className="flex flex-col lg:items-end items-center lg:justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <TimeLine title={"Experience"} details={experienceDetails} />
          <TimeLine title={"Education"} details={educationDetails} />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

const experienceDetails = [
  {
    title: "Software Engineer",
    place: "WORTH Internet Systems",
    placeLink: "https://worth.systems/",
    time: "Dec 2021 - May 2023",
    location: "Reading | United Kingdom",
    description:
      "Worked on a variety of projects, ranging in different technologies and teams. After 4 months, I was placed on one of the company's Funding Service clients' projects. I worked with numerous team members, including Product Owners, Business Analysts, Quality Assurance testers, Delivery- and Tech Leads, as well as UI/UX designers and Content Writers.",
  },
  {
    title: "Junior Web Developer",
    place: "Newsclip Media Monitoring",
    placeLink: "https://www.newsclip.co.za/",
    time: "Feb 2021 - Nov 2021",
    location: "Cape Town | South Africa",
    description:
      "Worked with a team member to refactor, maintain and build the company CRM system. Later, I was paired with another team member to design and build a product-training system, to teach users how to use the main product. We worked closely with the Sales- and Support- Departments; as well as provided regular feedback demos to the CEO and CTO.",
  },
];

const educationDetails = [
  {
    title: "Bachelor of Science in Information Technology",
    place: "Pearson Institute of Higher Education",
    placeLink:
      "https://universities.co.za/places/pearson-institute-of-higher-education/",
    time: "obtained in 2020",
    location: "Durbanville | Cape Town",
  },
  {
    title: "Higher Certificate in Information Systems Engineering",
    place: "CTI Education Group",
    placeLink: "https://sastudy.co.za/about-cti/",
    time: "obtained in 2017",
    location: "Durbanville | Cape Town",
  },
  {
    title: "High School Diploma",
    place: "Paarl Gymnasium High",
    placeLink: "https://www.facebook.com/groups/131441200200865/?locale=af_ZA",
    time: "obtained in 2015",
    location: "Paarl | Winelands",
  },
];

export default About;
