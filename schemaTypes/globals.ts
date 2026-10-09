import { defineField, defineType } from "sanity";

export const globals = defineType({
  name: "globals",
  title: "Global settings",
  type: "document",
  fields: [
    defineField({
      name: "footerContent",
      title: "Footer Content",
      type: "array",
      of: [
        { type: "block" }
      ]
    })
  ]
});
