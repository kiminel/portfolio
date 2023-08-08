import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/Hero'
import { Contact } from '@/components/elements/Contact'
import Head from 'next/head'
import Skills from '@/components/Skills'
import Tech from './tech'
import { About } from '@/components/About'
import Projects from './projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimi Nel | Portfolio</title>
        <meta name="portfolio" content="Showcase developer journey and skills" />
      </Head>
      <main className="flex text-dark w-full h-full px-10">
        <Layout className="pt-8">
          <Hero />
          <Contact />
          <Skills />
          <Tech />
          <About />
          <Projects />
        </Layout>
      </main>
    </>
  )
}
