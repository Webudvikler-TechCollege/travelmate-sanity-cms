import { defineField, defineType } from "sanity";

export const attraction = defineType({
  name: "attraction",
  title: "Attractions",
  type: "document",

  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),

    defineField({
      name: "latitude",
      title: "Latitude",
      type: "number",
    }),

    defineField({
      name: "longitude",
      title: "Longitude",
      type: "number",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),

    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),

    defineField({
      name: "city",
      title: "City",
      type: "reference",
      to: [{ type: "city" }],
    }),
    defineField({
      name: "info",
      title: "Language",
      type: "array",
      of: [
        {
            type: "attractionInfo"
        }
      ]
    })
  ],

  preview: {
    select: {
      title: "info.1.name",
      media: "image",
      subtitle: "city.name",
    },
  },
});