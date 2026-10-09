import { defineField, defineType } from "sanity";

export const country = defineType({
  name: "country",
  title: "Country",
  type: "document",

  fields: [
    defineField({
      name: "code",
      title: "Country Code",
      type: "string"
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "code",
      },
    }),        
    
    defineField({
      name: "image",
      title: "Image",
      type: "image"
    }),

    defineField({
      name: "info",
      title: "Language",
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
      title: "info.0.name",
      media: "image",
      subtitle: "code",
    },
  },
});
