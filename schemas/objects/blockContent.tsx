import React from 'react'

const HighlightIcon = () => (
  <span>ABC</span>
)
const HighlightDecorator = props => (
  <span style={{ textTransform: 'uppercase', fontSize: '0.8em'}}>{props.children}</span>
)


export const blockContent = {
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'Heading', value: 'h5' },
  ],
  lists: [{ title: 'Bullet', value: 'bullet' }],
  marks: {
    decorators: [
      { title: 'Bold', value: 'strong' },
      { title: 'Italic', value: 'em' },
      {
        title: 'Caps',
        value: 'uppercase',
        icon: HighlightIcon,
        component: HighlightDecorator
      }
    ],
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'Link',
        fields: [
          {
            name: 'linkType',
            type: 'string',
            title: 'Link Type',
            options: {
              list: [
                { title: 'External URL', value: 'external' },
               /* { title: 'Internal Reference', value: 'internal' },*/
                { title: 'Custom Path', value: 'custom' }
              ],
              layout: 'radio'
            }
          },
          {
            name: 'href',
            type: 'url',
            title: 'External URL',
            hidden: ({ parent }) => parent?.linkType !== 'external',
            validation: Rule => Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel']
            })
          },
          /*{
            name: 'internalReference',
            type: 'reference',
            title: 'Internal Reference',
            hidden: ({ parent }) => parent?.linkType !== 'internal',
            to: [{ type: 'page' }, { type: 'post' }], // Adjust these types according to your schema
          },*/
          {
            name: 'customPath',
            type: 'string',
            title: 'Custom Path',
            hidden: ({ parent }) => parent?.linkType !== 'custom',
            validation: Rule => Rule.regex(/^\/[a-zA-Z0-9-_\/]*$/, {
              name: 'path', 
              invert: false,
              message: 'Custom path must start with a "/" and contain only letters, numbers, dashes, underscores, or slashes.'
            }),
          }
        ],
      },
    ],
  },
}
