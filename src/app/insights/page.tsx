import { BookOpen, Mail, Store } from 'lucide-react';
import NewsletterBlock from '@/components/site/NewsletterBlock';
import PostList from '@/components/site/PostList';
import { Eyebrow, Section, TextLink } from '@/components/site/ui';
import { pageMetadata } from '@/lib/metadata';
import { getPosts } from '@/lib/sanity';
import { FREE_GUIDE, GUMROAD_STORE_URL, SUBSTACK_URL } from '@/lib/site';

export const revalidate = 3600; // keep in step with INSIGHTS_REVALIDATE

export const metadata = pageMetadata({
  title: 'Insights',
  description:
    'Articles and guides from Shuri Management Group on running, marketing and growing safari lodges, including a free guide to defining your ideal guests.',
  path: '/insights',
});

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container py-12 sm:py-16 lg:py-20">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-[2.25rem] text-earth sm:text-5xl lg:text-[3.4rem]">
            Insights for safari lodge owners
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Articles and guides on running, marketing and growing safari lodges, written from the
            work we do every week.
          </p>
        </div>
      </section>

      <Section tone="ivory" labelledBy="articles-heading">
        <h2 id="articles-heading" className="text-3xl text-earth">
          Articles
        </h2>
        {posts.length > 0 ? (
          <div className="mt-10">
            <PostList posts={posts} />
          </div>
        ) : (
          <div className="mt-8 max-w-2xl border-l-2 border-accent pl-6">
            <p className="text-lg leading-relaxed text-foreground/85">
              No articles yet. We are writing the first ones now. Until they are up, the free guide
              below covers where good lodge marketing starts, and past newsletter issues are on our
              Substack.
            </p>
          </div>
        )}
      </Section>

      <Section tone="sand" labelledBy="guides-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Guides</Eyebrow>
            <h2 id="guides-heading" className="mt-3 text-3xl text-earth sm:text-4xl">
              Guides you can use this week
            </h2>
          </div>
          <div className="lg:col-span-8">
            <article className="rounded-sm border border-earth/10 bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3 text-sm font-medium text-primary">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
                Free guide
              </div>
              <h3 className="mt-4 text-2xl text-earth sm:text-[1.7rem]">{FREE_GUIDE.title}</h3>
              <p className="mt-2 text-lg text-foreground/80">{FREE_GUIDE.subtitle}</p>
              <p className="mt-4 leading-relaxed text-foreground/80">
                A short, practical guide to working out who your lodge is really for, and planning
                content those guests will stop scrolling for.
              </p>
              <TextLink href={FREE_GUIDE.href} external className="mt-5">
                Get the free guide
              </TextLink>
            </article>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              <li className="flex gap-4 rounded-sm border border-earth/10 bg-background p-5">
                <Store className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-earth">More guides</p>
                  <TextLink href={GUMROAD_STORE_URL} external>
                    Browse our Gumroad store
                  </TextLink>
                </div>
              </li>
              <li className="flex gap-4 rounded-sm border border-earth/10 bg-background p-5">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-earth">Newsletter archive</p>
                  <TextLink href={SUBSTACK_URL} external>
                    Read past issues on Substack
                  </TextLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <NewsletterBlock />
    </>
  );
}
