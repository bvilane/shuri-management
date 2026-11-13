import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import CtaBand from '@/components/site/CtaBand';
import JsonLd from '@/components/site/JsonLd';
import { Eyebrow } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';
import {
  categoryLabel,
  formatDate,
  getPost,
  getPosts,
  urlFor,
  type SanityImage,
} from '@/lib/sanity';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const revalidate = 3600; // keep in step with INSIGHTS_REVALIDATE
export const dynamicParams = true;

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Article not found', robots: { index: false } };

  const images = post.coverImage?.asset
    ? [
        {
          url: urlFor(post.coverImage).width(1200).height(630).fit('crop').url(),
          width: 1200,
          height: 630,
          alt: post.coverImage.alt || post.title,
        },
      ]
    : undefined;

  return pageMetadata({
    title: post.title,
    description: post.excerpt || `${post.title}, an article from ${SITE_NAME}.`,
    path: `/insights/${post.slug}`,
    images,
    type: 'article',
    publishedTime: post.publishedAt,
  });
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(1400).fit('max').url()}
            alt={value.alt || ''}
            width={1400}
            height={933}
            sizes="(min-width: 768px) 704px, 100vw"
            className="h-auto w-full rounded-sm"
          />
          {value.caption ? (
            <figcaption className="mt-2 text-sm text-foreground/60">{value.caption}</figcaption>
          ) : null}
        </figure>
      );
    },
  },
  block: {
    // The article title is the page's only h1, so demote any h1 in the body
    h1: ({ children }) => <h2>{children}</h2>,
  },
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href || '#';
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
  },
};

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/insights/${post.slug}`;
  const coverUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1600).height(900).fit('crop').url()
    : undefined;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: { '@type': 'Organization', name: post.author || SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/smg.png` },
    },
    mainEntityOfPage: url,
    url,
    ...(coverUrl ? { image: coverUrl } : {}),
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article>
        <header className="bg-background">
          <div className="container py-12 sm:py-16"><div className="mx-auto max-w-3xl">
            <Link
              href="/insights"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All insights
            </Link>
            {post.categories?.length ? (
              <Eyebrow className="mt-6">{post.categories.map(categoryLabel).join(', ')}</Eyebrow>
            ) : null}
            <h1 className="mt-4 text-[2.1rem] text-earth sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-foreground/70">
              {post.author || SITE_NAME}
              {post.publishedAt ? (
                <>
                  {' · '}
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </>
              ) : null}
            </p>
          </div></div>
        </header>
        {coverUrl ? (
          <div className="container"><div className="mx-auto max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-sand">
              <Image
                src={coverUrl}
                alt={post.coverImage?.alt || ''}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            </div>
          </div></div>
        ) : null}
        <div className="container py-12 sm:py-16"><div className="mx-auto max-w-3xl">
          <div className="prose-smg">
            {post.body?.length ? <PortableText value={post.body} components={components} /> : null}
          </div>
        </div></div>
      </article>
      <CtaBand />
    </>
  );
}
