import { StructureBuilder, StructureResolver } from "sanity/structure";
import { CogIcon, UserIcon, InfoOutlineIcon, OlistIcon, CalendarIcon, CaseIcon } from '@sanity/icons'

export const StudioStructure = (S : StructureBuilder) =>

//List = root item, will appear in Studios first column since it is not a child
S.list()
.title('Desk')
.items([
    
      // Regular document types, allows multiple documents
    S.documentTypeListItem("inhalte").title("Inhalte").icon(UserIcon),

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
    S.listItem()
    .title("Impressum")
    .id("legal")
    .icon(CaseIcon)
    .child(
     
        S.document()
          .schemaType("legal")
          .documentId("legal")
          .title("Imprint")
  ),

])