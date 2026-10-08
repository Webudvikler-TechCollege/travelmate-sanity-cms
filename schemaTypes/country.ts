import { defineField, defineType } from "sanity";

export const country = defineType({
  name: "country",
  title: "Lande",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Titel",
      type: "string"
    }),

    defineField({
      name: "code",
      title: "Landekode",
      type: "string"
    }),
    
    defineField({
      name: "image",
      title: "Billede",
      type: "image"
    }),

    defineField({
      name: "info",
      title: "Sprog",
      type: "array",
      of: [
        {
            type: "countryInfo"
        }
      ]
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: "image",
      subtitle: "code",
    },
  },
});