import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { AnimatedText } from "./elements/AnimatedText";
import Details from "./layout/Details";

export type TimelineDetail = {
  title: string;
  titleLink?: string;
  place: string;
  placeLink: string;
  time: string;
  location: string;
  description?: string;
};

type TimeLineProps = {
  title: string;
  details: TimelineDetail[];
};

const TimeLine = ({ title, details }: TimeLineProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-4 lg:my-36">
      <h2 className="font-bold text-5xl md:text-7xl xs:mb-12 lg:mb-32 w-full text-center dark:text-light mb-6 md:mb-0">
        <AnimatedText text={title} />
      </h2>

      <div ref={ref} className="w-[90%] lg:w-[75%] mx-auto relative">
        <ul>
          {details.map((element) => {
            return (
              <div key={element.placeLink}>
                <motion.div
                  style={{ scaleY: scrollYProgress }}
                  className="absolute left-0 top-2 w-[4px] h-full bg-dark origin-top dark:bg-light"
                />
                <Details
                  title={element.title}
                  titleLink={element.titleLink ?? ""}
                  place={element.place}
                  placeLink={element.placeLink}
                  time={element.time}
                  location={element.location}
                  description={element.description}
                  listKey={element.placeLink}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;
