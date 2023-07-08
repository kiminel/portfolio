import React, { useRef } from "react";
import Details from "./layout/Details";
import { motion, useScroll } from "framer-motion";

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-36">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul>
          <Details
            title={"Bachelor of Science in Information Technology"}
            place={"Pearson Institute of Higher Education"}
            placeLink={
              "https://universities.co.za/places/pearson-institute-of-higher-education/"
            }
            time={"obtained in 2020"}
            location={"Durbanville | Cape Town"}
          />
          <Details
            title={"Higher Certificate in Information Systems Engineering"}
            place={"CTI Education Group"}
            companyLink={"https://sastudy.co.za/about-cti/"}
            time={"obtained in 2017"}
            location={"Durbanville | Cape Town"}
          />
          <Details
            title={"High School Diploma"}
            place={"Paarl Gymnasium High"}
            companyLink={
              "https://www.facebook.com/groups/131441200200865/?locale=af_ZA"
            }
            time={"obtained in 2015"}
            location={"Paarl | Winelands"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
