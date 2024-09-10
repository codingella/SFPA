import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import { groq } from 'next-sanity'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

// Combined GROQ query to fetch all required data
const combinedQuery = groq`{ 'settings': *[_type == "settings"][0]{..., desktopNav[]{..., internalRef->}, mobileNav[]{..., internalRef->} },
    'podcasts': *[_type == "podcasts"], 'podcastIntro': *[_type == "podcastIntro"][0], 'veranstaltungen': *[_type == "veranstaltungen"] | order(date desc, time asc), 'abschnitte': *[_type == "abschnitte"] | order(order asc)
  }
`

export async function getAllData(): Promise<any> {
  if (client) {
    return await client.fetch(combinedQuery) || {}
  }
  return {}
}