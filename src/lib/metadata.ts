import type { Metadata } from 'next';
import { SITE_NAME } from './site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** Use the title exactly as given, without the brand suffix */
  absoluteTitle?: boolean;
  images?: { url: string; width?: number; height?: number; alt?: string }[];
  type?: 'website' | 'article';
  publishedTime?: string;
}

export const DEFAULT_OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Shuri Management Group: we manage and market safari lodges',
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  images,
  type = 'website',
  publishedTime,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const ogImages = images && images.length > 0 ? images : [DEFAULT_OG_IMAGE];

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_ZA',
      type,
      images: ogImages,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ogImages.map((image) => image.url),
    },
  };
}
