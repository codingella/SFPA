import imageUrlBuilder from '@sanity/image-url'
import { client } from '../lib/sanity.client'

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  let url = builder.image(source)
  return url
}
