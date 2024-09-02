/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
//import { productionUrl } from 'plugins/productionUrl'
import { settingsPlugin} from 'plugins/settings'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'


import {StudioStructure} from './studioStructure'
import {schemaTypes} from './schemas'

import settingsType from 'schemas/settings'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Studentisches Forum Psychoanalyse Zürich'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    
    structureTool({
      structure: StudioStructure,
    }),
    // Configures the global "new document" button, exclude new documents feature for these
    settingsPlugin({ type: settingsType.name}),

    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
