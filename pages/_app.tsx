import '../styles/globals.css'
//@ts-ignore

import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  //this is a fix to a bug ocurring with css modules + Next.js + Framer Motion Page Transitions

  return (
      <Component {...pageProps} />
  )
}
