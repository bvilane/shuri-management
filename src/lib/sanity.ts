import { createClient } from '@sanity/client';
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import type { PortableTextBlock } from '@portabletext/react';

/**
 * Public, read-only access to the SMG Sanity dataset (managed from the
 * shuri-management-admin studio). The dataset is public, so no token.
 */
export const sanityClient = createClient({
  projectId: '4us45vrw',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
  perspective: 'published',
});

const builder = createImageUrlBuilder({ projectId: '4us45vrw', dataset: 'production' });

export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto('format');
}

export const INSIGHTS_REVALIDATE = 3600;

export interface SanityImage {
  _type: 'image';
  asset?: { _ref: string; _type: 'reference' };
  alt?: string;
  caption?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface PostSummary {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  _updatedAt?: string;
  author?: string;
  excerpt?: string;
  categories?: string[];
  coverImage?: SanityImage;
}

export interface Post extends PostSummary {
  body?: PortableTextBlock[];
}

const summaryFields = `_id, title, "slug": slug.current, publishedAt, _updatedAt, author, excerpt, categories, coverImage`;

const listQuery = `*[_type == "blog" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) { ${summaryFields} }`;

const postQuery = `*[_type == "blog" && slug.current == $slug][0] { ${summaryFields}, body }`;

export async function getPosts(limit?: number): Promise<PostSummary[]> {
  try {
    const posts = await sanityClient.fetch<PostSummary[]>(
      listQuery,
      {},
      { next: { revalidate: INSIGHTS_REVALIDATE, tags: ['insights'] } },
    );
    const list = Array.isArray(posts) ? posts : [];
    return typeof limit === 'number' ? list.slice(0, limit) : list;
  } catch (error) {
    // Never fail a page build because the CMS is unreachable
    console.error('Sanity: failed to fetch posts', error);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return await sanityClient.fetch<Post | null>(
      postQuery,
      { slug },
      { next: { revalidate: INSIGHTS_REVALIDATE, tags: ['insights'] } },
    );
  } catch (error) {
    console.error(`Sanity: failed to fetch post "${slug}"`, error);
    return null;
  }
}

const CATEGORY_LABELS: Record<string, string> = {
  'lodge-management': 'Lodge Management',
  'safari-operations': 'Safari Operations',
  hospitality: 'Hospitality',
  conservation: 'Conservation',
  marketing: 'Marketing',
  'industry-news': 'Industry News',
};

export function categoryLabel(value: string) {
  return CATEGORY_LABELS[value] ?? value;
}

export function formatDate(iso?: string) {
  if (!iso) return '';
  return new Intl.DateTimeFormat('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Johannesburg',
  }).format(new Date(iso));
}
