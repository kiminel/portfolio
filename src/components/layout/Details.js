import React, { useRef } from "react";
import ListIcon from "../elements/ListIcon";
import Clock from "../icons/Clock";
import Location from "../icons/Location";

const Details = ({ title, place, placeLink, time, location, description }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      key={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col"
    >
      <ListIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-md md:text-3xl dark:text-light">
          {title} @{" "}
          <a
            href={placeLink}
            target="_blank"
            className="text-primary capitalize hover:underline dark:text-night"
          >
            {place}
          </a>
        </h3>

        <div className="flex flex-wrap gap-2 text-lg my-4 dark:text-light">
          <span className="flex gap-x-2 items-center">
            <Clock className={"md:w-6 md:h-6 w-4 h-4 dark:text-light"} />
            <span className="whitespace-nowrap text-sm lg:text-lg">{time}</span>
          </span>

          <span className="flex gap-x-2 items-center">
            <Location className={"md:w-6 md:h-6 w-4 h-4 dark:text-light"} />
            <span className="whitespace-nowrap text-sm lg:text-lg">
              {location}
            </span>
          </span>
        </div>

        <p className="font-medium w-full text-sm md:text-xl dark:text-light">
          {description}
        </p>
      </div>
    </li>
  );
};

export default Details;
