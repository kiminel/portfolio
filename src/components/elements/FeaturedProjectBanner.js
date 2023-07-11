import React from "react";
import Sparkles from "../icons/Sparkles";
import FeatureBannerFlag from "../icons/FeatureBannerFlag";

const FeaturedProjectBanner = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-1">
      <div className="col-span-1 flex justify-end pr-8">
        <Sparkles
          className={
            "w-6 h-6 2xl:w-10 2xl:h-10 text-sparkle animate-ping3 dark:text-night"
          }
        />
      </div>
      <div className="col-span-1 flex flex-wrap">
        <FeatureBannerFlag className={"h-auto w-64 dark:text-light"} />
        <div className="pl-16">
          <Sparkles
            className={
              "2xl:w-10 w-6 h-6 2xl:h-10 text-sparkle justify-center animate-ping dark:text-night"
            }
          />
        </div>
      </div>
      <div className="col-span-1 pl-12 pt-8">
        <Sparkles
          className={
            "w-6 h-6 2xl:w-10 2xl:h-10 text-sparkle animate-ping2 dark:text-night"
          }
        />
      </div>
    </div>
  );
};

export default FeaturedProjectBanner;
