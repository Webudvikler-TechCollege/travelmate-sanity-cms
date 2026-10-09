import { defineField, defineType } from "sanity";

export const language = defineType({
  name: "language",
  title: "Language",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Language name, fx Danish, English eller Deutsch.",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Icon",
      type: "image",
    }),    
    defineField({
      name: "code",
      title: "Country Code",
      type: "string",
      description: "Country Code, fx da, en or de. Use fx en-US for regional variant.",
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "code",
    },
  },
});
