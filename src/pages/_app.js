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
        className={`w-full min-h-screen flex flex-col items-center justify-between bg-light dark:bg-dark font-mont ${montserrat.variable}`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
