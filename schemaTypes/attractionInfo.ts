import {defineField, defineType} from 'sanity'

export const attractionInfo = defineType({
  name: 'attractionInfo',
  title: 'Translations',
  type: 'object',

  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'reference',
      to: [{type: 'language'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'attractionInfo.name',
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "code",
      media: 'language.image',
      language: 'language.code',
    },    
    prepare({title, language, media}) {
      return {
        media: media,
        title: `${title} (${language || 'Unknown language'})`,
      }
    },
  },
})
