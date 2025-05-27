import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    }),

    content: defineCollection(
      // Extend the collection with sitemap config and schema
      asSitemapCollection({
        type: 'page',
        source: '**/*.md',
          schema: z.object({
            tags: z.array(z.string()),
            image: z.string(),
            date: z.date()
          })
        
      })
    )
  }
})
