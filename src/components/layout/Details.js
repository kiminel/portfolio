import React, { useRef } from "react";
import ListIcon from "../elements/ListIcon";
import Clock from "../icons/Clock";
import Location from "../icons/Location";
import { motion } from "framer-motion";

const Details = ({
  title,
  titleLink,
  place,
  placeLink,
  time,
  location,
  description,
}) => {
  const ref = useRef(null);

  return (
    <li ref={ref} key={ref} className="px-12 xl:px-32 my-12">
      <ListIcon reference={ref} />
      <motion.div
        className="p-4 rounded-2xl shadow-2xl dark:shadow-light"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <h3 className="font-bold text-md md:text-3xl dark:text-light">
          {titleLink ? (
            <motion.a
              href={titleLink}
              target="_blank"
              className="flex text-center justify-center p-2 rounded-lg text-primary dark:text-night capitalize"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              {title}
            </motion.a>
          ) : (
            <p className="text-center text-primary dark:text-night">{title}</p>
          )}
          <p className="text-center">at</p>
          <motion.a
            href={placeLink}
            target="_blank"
            className="flex text-center justify-center capitalize "
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            {place}
          </motion.a>
        </h3>

        <div className="flex flex-wrap gap-2 text-lg my-4 dark:text-light md:justify-center">
          <span className="flex gap-x-2 items-center">
            <Clock className={"md:w-6 md:h-6 w-4 h-4 dark:text-light"} />
            <span className="whitespace-nowrap text-xs lg:text-lg">{time}</span>
          </span>

          <span className="flex gap-x-2 items-center">
            <Location className={"md:w-6 md:h-6 w-4 h-4 dark:text-light"} />
            <span className="whitespace-nowrap text-xs lg:text-lg">
              {location}
            </span>
          </span>
        </div>

        <p className="font-medium w-full text-sm lg:text-xl px-4 dark:text-light">
          {description}
        </p>
      </motion.div>
    </li>
  );
};

export default Details;
