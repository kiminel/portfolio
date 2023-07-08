import React, { useRef } from "react";
import Details from "./layout/Details";
import { motion, useScroll } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-36">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul>
          <Details
            title={"Software Engineer"}
            place={"WORTH Internet Systems"}
            placeLink={"https://worth.systems/"}
            time={"Dec 2021 - May 2023"}
            location={"Reading | United Kingdom"}
            work={
              "Worked on a variety of projects, ranging in different technologies and teams. After 4 months, I was placed on one of the company's Funding Service clients' projects. I worked with numerous team members, including Product Owners, Business Analysts, Quality Assurance testers, Delivery- and Tech Leads, as well as UI/UX designers and Content Writers."
            }
          />
          <Details
            title={"Junior Web Developer"}
            place={"Newsclip Media Monitoring"}
            companyLink={"https://www.newsclip.co.za/"}
            time={"Feb 2021 - Nov 2021"}
            location={"Cape Town | South Africa"}
            work={
              "Worked with a team member to refactor, maintain and build the company CRM system. Later, I was paired with another team member to design and build a product-training system, to teach users how to use the main product. We worked closely with the Sales- and Support- Departments; as well as provided regular feedback demos to the CEO and CTO."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
