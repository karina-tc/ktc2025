import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    startedDate: z.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageDescription: z.string().optional(),
  })
});

export const collections = {
  blog
}; 