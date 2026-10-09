import {defineField, defineType} from 'sanity'

export const navigationInfo = defineType({
  name: 'navigationInfo',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    })
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
        title: `${title} (${language || 'Unknown language'})`,
      }
    },
  },
})
