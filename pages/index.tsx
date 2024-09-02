import { getAllData } from 'lib/sanity.client'
import { GetStaticProps } from 'next';
import HeadSection from '../components/elements/HeadSection';
import Home from '../components/Home';

export default function Page({data}) {
  const { settings } = data;
  const { defaultseo } = settings || {}

  return (
    <div>
      <HeadSection seo={null} defaultSeo={defaultseo} />
      <Home content={data}/>
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  // Fetch all data using the combined query
  const data = await getAllData();

  return {
    props: {
      data
    },
    // Triggering ISR every 60 seconds
    revalidate: 60,
  }
}
