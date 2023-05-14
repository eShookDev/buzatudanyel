import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} key={router.asPath} />
    </main>
  )
}
