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
  name: 'inhalte',
  title: 'Inhalte',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      description: 'Hier bitte darauf achten, dass der Text nicht zu lang, bzw. auf der Website nicht zu hoch wird. Dafür spielt vor allem auch die Zahl der Absätze eine Rolle. Etwa eine Länge von 100 Wörtern und ca. 4 Absätzen wird empfohlen.',
      of: [blockContent],
    }),
  ],
})
