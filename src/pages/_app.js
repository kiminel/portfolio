import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light flex flex-col items-center justify-between min-h-screen w-full dark:bg-dark`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
