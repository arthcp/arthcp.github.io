import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    cover: z.string().optional(),
    thumb: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
