import { StructureBuilder, StructureResolver } from "sanity/structure";
import { CogIcon, UserIcon, InfoOutlineIcon, OlistIcon, CalendarIcon, PlayIcon } from '@sanity/icons'

export const StudioStructure = (S : StructureBuilder) =>

//List = root item, will appear in Studios first column since it is not a child
S.list()
.title('Desk')
.items([
    
      // Regular document types, allows multiple documents
    S.documentTypeListItem("veranstaltungen").title("Veranstaltungen").icon(CalendarIcon),
    // Section for "Podcasts"
    S.listItem()
    .title('Podcasts')
    .icon(PlayIcon)
    .child(
      S.list()
      .title('Podcasts')
      .items([
        // Singleton document for Podcasts Introduction
        S.listItem()
          .title('Podcasts Introduction')
          .id('podcastIntro')
          .child(
            S.document()
              .schemaType('podcastIntro')
              .documentId('podcastIntro')
              .title('Podcasts Introduction')
          ),
        // Correctly list all Podcast documents using documentTypeListItem
        S.documentTypeListItem('podcasts').title('All Podcasts')
      ])
  ),

    S.documentTypeListItem("abschnitte").title("Weitere Abschnitte").icon(InfoOutlineIcon),

    //Single Page Document
    S.listItem()
    .title("Einstellungen")
    .id("settings")
    .icon(CogIcon)
    .child(
      S.document()
        .schemaType("settings")
        .documentId("settings")
        .title("Einstellungen")
    ),
//Single Page Document


])