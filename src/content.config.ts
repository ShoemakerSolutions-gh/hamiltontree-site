import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Tina-ready content model: every editable string lives in a collection
// entry. Adding Tina later means pointing tina config at these collections.
const site = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/site" }),
  schema: z.object({
    businessName: z.string(),
    businessNameAccent: z.string(),
    kicker: z.string(),
    heroHeadline: z.string(),
    heroHeadlineAccent: z.string(),
    heroSub: z.string(),
    primaryCtaLabel: z.string(),
    contactCtaLabel: z.string(),
    contactMethodNote: z.string(),
    contactUrl: z.string().url(),
    trust: z.array(z.object({ label: z.string(), value: z.string() })),
    whyHeading: z.string(),
    whyPoints: z.array(z.string()),
    quoteText: z.string(),
    quoteAttribution: z.string(),
    reviewsHeading: z.string(),
    reviewScore: z.string(),
    reviewScoreNote: z.string(),
    reviewQuotes: z.array(z.object({ text: z.string(), attribution: z.string() })),
    reviewsFootnote: z.string(),
    quoteHeading: z.string(),
    quoteBoxHeading: z.string(),
    quoteBoxBody: z.string(),
    quoteTips: z.string(),
    ctaHeading: z.string(),
    ctaBody: z.string(),
    footerAbout: z.string(),
    footerServiceArea: z.string(),
    footerDemoNote: z.string(),
    facebookUrl: z.string().url(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/services" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { site, services };
