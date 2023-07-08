import React from "react";
import { CircularText } from "../icons/CircularText";
import { FlashButton } from "./FlashButton";

export const Contact = () => {
  return (
    <div className="absolute left-4 bottom-16 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto items-center justify-center">
        <CircularText className="animate-spin dark:text-light" />
        <FlashButton
          text={"Contact"}
          href={"mailto:kiminel25@gmail.com"}
          target={"_blank"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold"
        />
      </div>
    </div>
  );
};
