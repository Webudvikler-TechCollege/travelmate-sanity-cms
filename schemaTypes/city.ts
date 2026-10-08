import { defineField, defineType } from "sanity";

export const city = defineType({
  name: "city",
  title: "Byer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Titel",
      type: "string"
    }),
    defineField({
      name: "image",
      title: "Billede",
      type: "image"
    }),
    defineField({
      name: "country",
      title: "Land",
      type: "reference",
      validation: Rule => Rule.required(),
      to: [{ type: "country" }],
    }),    
    defineField({
      name: "info",
      title: "Sprog",
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
      title: 'name',
      media: "image",
      subtitle: "country.name",
    },
  },
});