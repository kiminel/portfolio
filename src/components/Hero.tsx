import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "@/components/elements/AnimatedText";
import NewTabArrow from "@/components/icons/NewTabArrow";
import Contact from "./elements/Contact";
import profilePic from "../../public/images/profile/Kimi_Wave.png";
import { getYearsOfExperience } from "../utils/personalInfo";

const Hero = () => {
  const { years, isExactAnniversary } = getYearsOfExperience();

  return (
    <div id="home" className="grid grid-cols-1 xl:grid-cols-2 space-y-6">
      <div className="lg:pt-32 col-span-1 flex justify-center xl:justify-end">
        <Image
          src={profilePic}
          alt="Kimi Nel"
          className="w-auto min-w-[300px] max-h-[300px] md:max-h-[400px] lg:min-h-[500px]"
          priority
        />
      </div>

      <div className="col-span-1 flex justify-center self-center lg:pt-32">
        <div className="flex flex-col md:px-12 lg:px-0">
          <AnimatedText
            text={"Developing Your Visions"}
            className="flex flex-wrap text-5xl lg:text-6xl justify-center px-8 text-center"
          />
          <p className="my-8 text-base md:text-lg font-medium px-4 lg:px-0 text-center dark:text-light">
            I am a passionate, enthusiastic and eager developer with {years}
            {!isExactAnniversary && "+"} years of experience, specializing in
            React and Vue. I enjoy all creative challenges and will make your design
            dreams come true!
          </p>
          <div className="flex items-center justify-center text-center mt-2 px-8 animate-bounce">
            <Link
              href="/CV-KimiNel.pdf"
              target="_blank"
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
            >
              CV
              <NewTabArrow className={"w-5 h-5 ml-2"} />
            </Link>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Hero;
