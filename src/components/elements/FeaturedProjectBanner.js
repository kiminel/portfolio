import React from "react";
import Sparkles from "../icons/Sparkles";
import FeatureBannerFlag from "../icons/FeatureBannerFlag";

const FeaturedProjectBanner = () => {
  return (
    <div className="w-full grid grid-cols-3 grid-rows-1 mt-12">
      <div className="col-span-1 flex justify-end pr-8">
        <Sparkles
          className={"w-10 h-10 text-sparkle animate-ping3 dark:text-night"}
        />
      </div>

      <div className="col-span-1">
        <FeatureBannerFlag className={"h-auto w-64 pb-2 dark:text-light"} />
        <div className="pl-12">
          <Sparkles
            className={
              "w-10 h-10 text-sparkle justify-center animate-ping dark:text-night"
            }
          />
        </div>
      </div>
      <div className="col-span-1 pl-6 pt-8">
        <Sparkles
          className={"w-10 h-10 text-sparkle animate-ping2 dark:text-night"}
        />
      </div>
    </div>
  );
};

export default FeaturedProjectBanner;
