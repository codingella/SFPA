import React from 'react'

const HighlightIcon = () => (
  <span>ABC</span>
)
const HighlightDecorator = props => (
  <span style={{ textTransform: 'uppercase'}}>{props.children}</span>
)


export const blockContent = {
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
  //  { title: 'Heading', value: 'h5' },
  ],
  lists: [{ title: 'Bullet', value: 'bullet' }],
  marks: {
    decorators: [
     // { title: 'Bold', value: 'strong' },
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
            name: 'href',
            type: 'url',
            title: 'External URL',
            description: 'Always paste the hole link address here. For example: "https://www.my-link.com". For emails use: "mailto:example@example.com" and for phone numbers "tel:0176 123 123 123"',
            validation: (Rule) =>
              Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
              }).required(),
          },
        ],
      },
    ],
  },
}

/*
export const blockContent = {
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    // { title: 'Heading', value: 'h5' },
  ],
  lists: [/*{ title: 'Bullet', value: 'bullet' }],
  marks: {
    decorators: [
      // { title: 'Bold', value: 'strong' },
      { title: 'Italic', value: 'em' },
      {
        title: 'Caps',
        value: 'uppercase',
        icon: HighlightIcon,
        component: HighlightDecorator,
      },
    ],
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'Link',
        fields: [
          {
            name: 'href',
            type: 'url',
            title: 'External URL',
            description: 'Always paste the hole link address here. For example: "https://www.my-link.com". For emails use: "mailto:example@example.com" and for phone numbers "tel:0176 123 123 123"',
            validation: (Rule) =>
              Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
              }).required(),
          },
        ],
      },
    ],
  },
};*/