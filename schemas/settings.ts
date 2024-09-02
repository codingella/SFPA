import { defineField, defineType } from 'sanity'
import { defaultSeo } from './objects/seo'

export default defineType({
  name: 'settings',
  title: 'Einstellungen',
  type: 'document',
  fields: [
    defineField({
      title: 'Desktop Navigation',
      name: 'desktopNav',
      type: 'array',
      of: [
        {
          type: "link",
        },
      ],
    }),
    defineField({
      title: 'Mobile Navigation',
      name: 'mobileNav',
      type: 'array',
      of: [
        {
         type: 'link'
        }
      ],
    }),
    defineField(defaultSeo),
  ]
})