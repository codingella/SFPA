import Head from 'next/head'
import React, { useEffect,useState } from 'react'

import { getImageRatio,urlFor } from '../../helpers/sanity-img-url.js'

const getSeoValues = (seo, defaultSeo, fallbackValues) => {
  return {
    title: seo?.title || defaultSeo?.title || fallbackValues.title,
    description:
      seo?.description || defaultSeo?.description || fallbackValues.description,
    index:
      seo?.index !== undefined
        ? seo.index
        : defaultSeo?.index !== undefined
          ? defaultSeo.index
          : fallbackValues.index,
    follow:
      seo?.follow !== undefined
        ? seo.follow
        : defaultSeo?.follow !== undefined
          ? defaultSeo.follow
          : fallbackValues.follow,
    preview: seo?.preview || defaultSeo?.preview || null,
  }
}

const HeadSection = ({ seo, defaultSeo }) => {
  const fallbackValues = {
    title: 'Studentisches Forum Psychoanalyse Zürich',
    description: '',
    index: true,
    follow: true,
  }

  const { title, description, index, follow, preview } = getSeoValues(
    seo,
    defaultSeo,
    fallbackValues,
  )

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta
        name="robots"
        content={`${follow ? 'follow' : 'nofollow'}, ${index ? 'index' : 'noindex'}`}
      ></meta>
      {preview && <meta property="og:image" content={urlFor(preview.asset)} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#BF1622" />
    </Head>
  )
}

export default HeadSection
