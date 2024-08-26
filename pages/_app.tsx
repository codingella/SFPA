import '../styles/globals.css'
//@ts-ignore
import useFouc from '../helpers/use-fouc-fix';

import { AppProps } from 'next/app'
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {

  //this is a fix to a bug ocurring with css modules + Next.js + Framer Motion Page Transitions
  useFouc();

  return (
    <Layout>
      <Component {...pageProps} />
      </Layout>
  )
}
