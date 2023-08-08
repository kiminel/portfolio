import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { AnimatedText } from './elements/AnimatedText'
import aboutMePic from '../../public/images/profile/Headshot.png'
import aboutMeWavePic from '../../public/images/profile/Headshot-Wave.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        //toFixed to avoid the fraction values 50.01 - 50.99
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const About = () => {
  const [pic, setPic] = useState(false)

  return (
    <div className="w-full lg:grid grid-cols-3 gap-16 items-center">
      <div className="col-span-1 flex flex-col items-start justify-center text-md md:text-lg py-6">
        <h2 className="mb-4 text-lg md:text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
          Hi, I&apos;m Kimi!
        </h2>
        <p className="font-medium dark:text-light">
          I am a Software Engineer/ Full Stack Developer with a passion for creating beautiful,
          responsive websites!
        </p>
        <p className="font-medium my-4 dark:text-light">
          I enjoy exploring the latest standards and optimizing the projects that I work on. I am
          also a bookworm and often read educational books to understand and avoid common mistakes
          around coding, business management and teamwork.
        </p>
        <p className="font-medium dark:text-light">
          I take pride in writing well-tested, clean code. I sleep easy at night, knowing that at
          the end of the day, my code WILL be legacy!
        </p>
      </div>

      <div className="relative col-span-1 h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-night dark:border-[1px]">
        <div className="absolute top-0 -right-5 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-night" />

        <div className="w-full flex flex-col justify-center items-center">
          <AnimatedText text={'Hello World!'} className="mb-4 dark:text-light text-center" />
          <Image
            className="w-auto max-h-[600px] rounded-2xl cursor-pointer"
            onMouseOver={() => setPic(true)}
            onMouseOut={() => setPic(false)}
            alt="Kimi Nel"
            src={pic ? aboutMeWavePic : aboutMePic}
          />
        </div>
      </div>

      <div className="h-full col-span-1 flex flex-col items-center lg:items-end justify-between dark:text-light py-8 gap-y-4 lg:gap-y-0">
        <div className="flex flex-col lg:items-end items-center lg:justify-center">
          <span className="inline-block text-7xl font-bold">
            <AnimatedNumbers value={4} />+
          </span>
          <h2 className="text-xl font-medium text-dark/75 dark:text-light">Showcase Projects</h2>
        </div>
        <div className="flex flex-col lg:items-end items-center lg:justify-center">
          <span className="inline-block text-7xl font-bold">
            <AnimatedNumbers value={10} />+
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
            Languages & Frameworks
          </h2>
        </div>
        <div className="flex flex-col lg:items-end items-center lg:justify-center">
          <span className="inline-block text-7xl font-bold">
            <AnimatedNumbers value={2} />+
          </span>
          <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
            Years Of Experience
          </h2>
        </div>
      </div>
    </div>
  )
}

export default About
