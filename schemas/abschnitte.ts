import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { blockContent } from './objects/blockContent'
import { seo } from './objects/seo'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'abschnitte',
  title: 'Abschnitte',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),

    defineField({
      name: 'text',
      title: 'Inhalt',
      type: 'array',      
      of: [blockContent],
    }),
  ],
})
