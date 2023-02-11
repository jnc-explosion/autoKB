import "~/global.css"

import { Comfortaa, Hachi_Maru_Pop, Inter } from "@next/font/google"
import { AppProps } from "next/app"

const inter = Inter({
  subsets: ["latin"],
  variable: "--f-inter",
})

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400"],
  preload: false,
  variable: "--f-pepsi",
})

const hmp = Hachi_Maru_Pop({
  weight: ["400"],
  preload: false,
  variable: "--f-hmp",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={[inter.variable, hmp.variable, hmp.className, comfortaa.variable].join(" ")}>
      <Component {...pageProps} />
    </main>
  )
}
