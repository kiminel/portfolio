import React from 'react'
import { AnimatedText } from '@/components/elements/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile/Kimi_Wave.png'
import NewTabArrow from '@/components/icons/NewTabArrow'

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 space-y-6">
      <div className="col-span-1 flex justify-center xl:justify-end">
        <Image
          src={profilePic}
          alt="Kimi Nel"
          className="w-auto min-w-[300px] max-h-[300px] md:max-h-[400px] lg:min-h-[500px]"
          priority="true"
        />
      </div>

      <div className="col-span-1 flex justify-center self-center">
        <div className="flex flex-col md:px-12 lg:px-0">
          <AnimatedText
            text={'Developing Your Visions'}
            className="flex flex-wrap justify-start px-8 text-3xl text-center"
          />
          <p className="my-4 text-base font-medium px-4 lg:px-0 text-center dark:text-light">
            I am a passionate, enthusiastic and eager developer with 2+ years experience. I
            enjoy all creative challenges and will make your design dreams come true!
          </p>
          <div className="flex items-center justify-center text-center mt-2 px-8">
            <Link
              href="/CV-KimiNel.pdf"
              target="_blank"
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
            >
              CV
              <NewTabArrow className={'w-5 h-5 ml-2'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
