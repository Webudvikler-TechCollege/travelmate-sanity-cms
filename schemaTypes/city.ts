import { defineField, defineType } from "sanity";

export const city = defineType({
  name: "city",
  title: "City",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),        
    defineField({
      name: "image",
      title: "Image",
      type: "image"
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "reference",
      validation: Rule => Rule.required(),
      to: [{ type: "country" }],
    }),    
    defineField({
      name: "info",
      title: "Language",
      type: "array",
      of: [
        {
            type: "cityInfo"
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