import { defineField, defineType } from 'sanity'
import { defaultSeo } from './objects/seo'

export default defineType({
  name: 'settings',
  title: 'Einstellungen',
  type: 'document',
  fields: [
    defineField(defaultSeo),
    defineField({
      title: 'Inhalte auswählen',
      name: 'positions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'inhalte' }],
          options: {
            disableNew: true
          }
        }
      ],
      description: 'Hier können die Seiten geändert werden, die als erste bzw. zweite Seite auf der Website erscheinen.',
    }),
  ]
})