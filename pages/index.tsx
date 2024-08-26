import { getAllData } from 'lib/sanity.client'
import { GetStaticProps } from 'next';
import HeadSection from '../components/elements/HeadSection';
import Home from '../components/Home';

export default function Page({settings, showIntro}) {
  const { defaultseo } = settings || {}

  return (
    <div>
      <HeadSection seo={null} defaultSeo={defaultseo} />
     SFPZ Home
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  // Fetch all data using the combined query
  const { settings, legal } = await getAllData();

  return {
    props: {
      settings,
      legal,
    },
    // Triggering ISR every 60 seconds
    revalidate: 60,
  }
}
