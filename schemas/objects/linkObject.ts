import { defineField, defineType } from 'sanity'

export const linkObject = defineType({
    name: 'linkObject',
    title: 'Link Object',
    type: 'object',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) =>Rule.required(),
      }),
      defineField({
        name: 'link',
        title: 'Link',
        type: 'url',
        validation: (Rule) =>Rule.required(),
      }),
    ],
  });