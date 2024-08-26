import { getAllData } from 'lib/sanity.client'
import HeadSection from '../components/elements/HeadSection';
import Imprint from '../components/Imprint';

export default function Page({settings, legal}) {
  const { defaultseo } = settings

  console.log(legal);

  return (
    <div>
      <HeadSection seo={null} defaultSeo={defaultseo} />
      {legal?.imprint && <Imprint content={legal.imprint}/>}
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
