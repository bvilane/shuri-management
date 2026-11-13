import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/sanity';
import { SITE_URL } from '@/lib/site';

export const revalidate = 3600; // keep in step with INSIGHTS_REVALIDATE

const staticRoutes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/lodge-management', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/reserve-management', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/safari-tech-consulting', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ventures', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/insights/${post.slug}`,
      lastModified: new Date(post._updatedAt || post.publishedAt || now),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
