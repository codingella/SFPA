import { blockContent, blockContentSimple } from './objects/blockContent'

// schemas/sectionIntroduction.js
export default {
    name: 'podcastIntro',
    type: 'document',
    title: 'Podcast Intro',
    fields: [
      {
        type: 'image',
        name: 'introImage',
        title: 'Optionales Bild für den Abschnittsanfang',
      },
      {
        name: 'description',
        title: 'Einleitungstext',
        type: 'array',
         of: [blockContent],
      },
    ],
  };
  