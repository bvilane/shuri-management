import Image from 'next/image';
import Link from 'next/link';
import { categoryLabel, formatDate, urlFor, type PostSummary } from '@/lib/sanity';

export default function PostList({ posts }: { posts: PostSummary[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <li key={post._id}>
          <Link href={`/insights/${post.slug}`} className="group block">
            <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-sand">
              {post.coverImage?.asset ? (
                <Image
                  src={urlFor(post.coverImage).width(900).height(600).fit('crop').url()}
                  alt={post.coverImage.alt || ''}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : null}
            </div>
            <p className="mt-4 text-sm text-foreground/60">
              {formatDate(post.publishedAt)}
              {post.categories?.[0] ? ` · ${categoryLabel(post.categories[0])}` : ''}
            </p>
            <h3 className="mt-2 text-xl text-earth group-hover:text-primary">{post.title}</h3>
            {post.excerpt ? <p className="mt-2 line-clamp-3 text-foreground/80">{post.excerpt}</p> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
