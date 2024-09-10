import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { blockContent} from './objects/blockContent'
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
  name: 'veranstaltungen',
  title: 'Veranstaltungen',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) =>Rule.required(),
    }),
    {
      title: 'Startdatum',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY', // This controls the input format in the editor
      },
      description: 'Startdatum ist ausschlaggebend für die Sortierung der Veranstaltunegn"',
      validation: (Rule) =>Rule.required(),
    },
    {
      title: 'Enddatum (Optional, falls mehrtägiges Event)',
      name: 'endDate',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY', // This controls the input format in the editor
      },
    },
    {
      title: 'Uhrzeit',
      name: 'time',
      type: 'string',
      description: 'Zum Beispiel: "19:00 Uhr"'
    },
    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'array',
      description: 'Kurzer Event-Teaser',
       of: [blockContent],
    }),
    defineField({
      name: 'registration',
      title: 'Registration',
      type: 'array',
      description: 'Hinweise zur Anmeldung',
       of: [blockContent],
    }),
    defineField({
      name: 'description',
      title: 'Beschreibungstext',
      type: 'array',
      description: 'Längerer Beschreibungstext',
       of: [blockContent],
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'array',
       of: [blockContent],
    }),
  ],
})
