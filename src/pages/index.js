import Head from 'next/head'
import { Layout } from '@/components/layout/Layout'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import EducationExperience from '@/components/EducationExperience'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimi Nel | Portfolio</title>
        <meta name="portfolio" content="Showcase developer journey and skills" />
      </Head>

      <main className="flex text-dark w-full h-full px-2 lg:px-10">
        <Layout className="pt-8">
          <Hero />
          <Skills />
          <EducationExperience />
          <About />
          <Projects />
        </Layout>
      </main>
    </>
  )
}
