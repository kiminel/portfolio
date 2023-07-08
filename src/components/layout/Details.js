import React, { useRef } from "react";
import ListIcon from "../elements/ListIcon";
import Clock from "../icons/Clock";
import Location from "../icons/Location";

const Details = ({ title, place, placeLink, time, location, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center"
    >
      <ListIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-3xl dark:text-light">
          {title} @{" "}
          <a
            href={placeLink}
            target="_blank"
            className="text-primary capitalize hover:underline dark:text-night"
          >
            {place}
          </a>
        </h3>

        <div className="text-lg my-4 flex dark:text-light">
          <span className="pr-4">
            <Clock className={"w-6 h-6 dark:text-light"} />
          </span>
          <span>{time}</span>

          <span className="px-4">
            <Location className={"w-6 h-6 dark:text-light"} />
          </span>
          <span>{location}</span>
        </div>

        <p className="font-medium w-full text-xl dark:text-light">{work}</p>
      </div>
    </li>
  );
};

export default Details;
