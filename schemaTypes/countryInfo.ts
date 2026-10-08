import { defineField, defineType } from "sanity";

export const countryInfo = defineType({
    name: "countryInfo",
    title: "Oversættelse",
    type: "object",

    fields: [
        defineField({
            name: "language",
            title: "Sprog",
            type: "reference",
            to: [{ type: "language" }],
            validation: Rule => Rule.required()
        }),

        defineField({
          name: "name",
          title: "Titel",
          type: "string"
        }),
        defineField({
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
          },
        }),        
        defineField({
          name: "description",
          title: "Beskrivelse",
          type: "text"
        })

      ]

})
