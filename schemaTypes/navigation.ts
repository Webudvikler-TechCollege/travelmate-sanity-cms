import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "path",
      title: "Path",
      type: "string",
    }),        
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
    }),        
    defineField({
      name: "info",
      title: "Language",
      type: "array",
      of: [
        {
            type: "navigationInfo"
        }
      ]
    }),    
  ],
  preview: {
    select: {
      title: "info.0.name"
    },
  },
});