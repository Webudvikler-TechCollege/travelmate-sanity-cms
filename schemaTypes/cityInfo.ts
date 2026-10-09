import {defineField, defineType} from 'sanity'

export const cityInfo = defineType({
  name: 'cityInfo',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'language.image',
      language: 'language.code',
    },
    prepare({title, language, media}) {
      return {
        media: media,
        title: `${title} (${language || 'Unknown language'})`
      }
    },
  },
})
