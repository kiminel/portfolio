import { CircularText } from "../icons/CircularText";
import { FlashButton } from "./FlashButton";
import { PERSONAL_LINKS } from "../../utils/personalInfo";

const Contact = () => {
  return (
    <div className="lg:absolute lg:left-4 lg:bottom-16 flex items-center justify-center overflow-hidden">
      <div className="w-full lg:w-48 h-auto flex items-center justify-center">
        <CircularText className="animate-reverse-spin dark:text-light min-w-[200px] max-w-[200px]" />
        <FlashButton
          text={"Contact"}
          href={PERSONAL_LINKS.emailMailto}
          target={"_blank"}
          className="absolute bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold"
        />
      </div>
    </div>
  );
};

export default Contact;

