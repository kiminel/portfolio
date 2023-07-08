import { Layout } from "@/components/layout/Layout";
import { AnimatedText } from "@/components/elements/AnimatedText";
import { Contact } from "@/components/elements/Contact";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/Kimi_Wave.png";
import NewTabArrow from "@/components/icons/NewTabArrow";

export default function Home() {
  return (
    <>
      <Head>
        <title>KN</title>
        <meta
          name="portfolio"
          content="Showcase developer journey and skills"
        />
      </Head>
      <main className="flex text-dark w-full h-full px-10">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-end">
              <Image
                src={profilePic}
                alt="Kimi Nel"
                className="w-auto h-auto"
                priority="true"
              />
            </div>

            <div className="col-span-1 flex justify-center self-center">
              <div className="flex flex-col">
                <AnimatedText
                  text={"Developing Your Visions"}
                  className="flex flex-wrap justify-start px-8
                xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl
                "
                />
                <p className="my-4 text-base font-medium px-16 dark:text-light">
                  I am a passionate, enthusiastic and eager developer with 2+
                  years&apos; experience. I enjoy all creative challenges and
                  will make your design dreams come true!
                </p>
                <div className="flex items-center justify-center text-center mt-2 px-8">
                  <Link
                    href="/Kimi_Nel_CV.pdf"
                    target="_blank"
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  >
                    CV
                    <NewTabArrow className={"w-5 h-5 ml-2"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Contact />
        </Layout>
      </main>
    </>
  );
}
