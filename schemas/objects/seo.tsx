// seoFields.ts

import { defineField, defineType } from 'sanity'

export const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description:
    'Page specific SEO information. Will overwrite Default SEO set in Settings',
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      title: 'Index',
      name: 'index',
      type: 'boolean',
      description: 'Tells search engines to index this page. (Default: true)',
    },
    {
      title: 'Follow',
      name: 'follow',
      type: 'boolean',
      description:
        'Tells search engines to follow links on this page. (Default: true)',
    },
    {
      title: 'Preview',
      name: 'preview',
      type: 'image',
      description:
        'Preview image for social media. Recommended size is 1200px x 630px',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description:
        'The recommended length for descriptions is between 50 and 160 characters',
    },
  ],
}

export const defaultSeo = {
  name: 'defaultseo',
  title: 'SEO',
  type: 'object',
  description:
    'Einstellungen für die Suchmaschienenoptiomierung',
  options: { collapsible: false, collapsed: false },
  fields: [
    {
      title: 'Index',
      name: 'index',
      type: 'boolean',
      description: 'Weist Suchmaschinen an, diese Seite zu listen.',
    },
    {
      title: 'Follow',
      name: 'follow',
      type: 'boolean',
      description: 'Weist Suchmaschinen an, den Links auf dieser Seite zu folgen.',
    },
    {
      title: 'Vorschau',
      name: 'preview',
      type: 'image',
      description:
        'Vorschaubild für soziale Medien. Empfohlene Größe ist 1200px x 630px',
    },
    {
      title: 'Seitentitel',
      name: 'pagetitle',
      type: 'string',
      description: 'Seitentitel, der von Suchmaschienen angezeigt wird.',
    },
    {
      title: 'Beschreibung',
      name: 'description',
      type: 'text',
      description:
        'Seitenbeschreibung. Die empfohlene Länge für Beschreibungen liegt zwischen 50 und 160 Zeichen.',
    },
  ],
}
