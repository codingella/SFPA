import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'podcasts',
  title: 'Podcasts',
  type: 'document',

  fields: [
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
    }),
    defineField({
      name: 'text',
      title: 'Teaser',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Datum der Veröffentlichung',
      type: 'date',
      description:
        'Das Datum wird auf der Website nicht angezeigt, dient aber zur automatischen Nummerierung der Folgen.',
      options: {
        dateFormat: 'DD.MM.YYYY',
      },
      validation: (Rule) => Rule.required().error('A date is required'),
    }),
    defineField({
      name: 'duration',
      title: 'Dauer der Folge',
      description: 'Zum Beispiel: "1Std 45 Min"',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links zum Podcast',
      type: 'array',
      of: [{ type: 'linkObject' }],
    }),
  ],

  preview: {
    select: {
      text: 'text', // Select the teaser field for title
      date: 'date',
      cover: 'cover',
    },
    prepare(selection) {
      const { text, date, cover } = selection

      // Truncate teaser text to the first 20 characters
      const teaser = text.length > 20 ? `${text.substring(0, 20)}...` : text

      // Format the date for the subtitle
      const formattedDate = date
        ? new Date(date).toLocaleDateString('de-DE')
        : 'No date'

      return {
        title: teaser,
        subtitle: formattedDate,
        media: cover,
      }
    },
  },
})
