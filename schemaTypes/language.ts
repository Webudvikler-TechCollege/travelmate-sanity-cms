import { defineField, defineType } from "sanity";

export const language = defineType({
  name: "language",
  title: "Sprog",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Navn",
      type: "string",
      description: "Sprogets navn, fx Dansk, English eller Deutsch.",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "code",
      title: "Sprogkode",
      type: "string",
      description: "Sprogkode, fx da, en eller de. Brug fx en-US til en regional variant.",
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "code",
    },
  },
});
