import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    status: z.enum(['draft', 'published']).default('draft'),
    title: z.string(),
    publishDate: z.date(),
    startedDate: z.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    image: z.string().optional(),
    imageDescription: z.string().optional(),
  })
});

export const collections = {
  blog
}; 