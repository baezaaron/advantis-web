import React from 'react';
import client from '../../../../lib/contentful';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function isContentfulDocument(body: any): body is { nodeType: string; content: any[]; data: any } {
  return (
    body &&
    typeof body === 'object' &&
    typeof body.nodeType === 'string' &&
    Array.isArray(body.content) &&
    typeof body.data === 'object'
  );
}

function isEntryWithFields(obj: any): obj is { fields: any } {
  return obj && typeof obj === 'object' && 'fields' in obj;
}

function isAssetWithFile(obj: any): obj is { fields: { file: { url: string }, title?: string } } {
  return isEntryWithFields(obj) && obj.fields.file && typeof obj.fields.file.url === 'string';
}

function isAuthor(obj: any): obj is { fields: { name?: string, photo?: any } } {
  return isEntryWithFields(obj) && (typeof obj.fields.name === 'string' || obj.fields.photo);
}

function isTopic(obj: any): obj is { fields: { name: string } } {
  return isEntryWithFields(obj) && typeof obj.fields.name === 'string';
}

async function getBlogPost(slug: string) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    include: 2,
  });
  return entries.items[0];
}

export async function generateStaticParams() {
  try {
    const entries = await client.getEntries({ content_type: 'blogPost' });
    return entries.items
      .filter(
        (item: any) =>
          typeof item.fields.slug === 'string' &&
          item.fields.slug.trim().length > 0 &&
          item.fields.slug !== 'undefined'
      )
      .map((item: any) => ({
        slug: item.fields.slug,
      }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// SEO: Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  if (!post) return {};
  const { title, description, featuredImage, body, author } = post.fields;

  // Long-tail keywords for meta description
  const longTailKeywords = [
    'remote patient monitoring for seniors',
    'best remote health monitoring devices for elderly',
    'in-home health monitoring for elderly patients',
    'wearable health trackers for seniors',
    'telehealth solutions for elderly care',
    'fall detection devices for elderly at home',
    'continuous health monitoring for Alzheimer\'s patients',
    'remote vital sign monitoring for elderly',
    'chronic disease management with remote monitoring',
    'wireless health monitoring for seniors',
    'home-based cardiac monitoring for elderly',
    'remote patient monitoring services for seniors',
    'caregiver tools for elderly remote monitoring',
    'remote patient monitoring for chronic conditions in elderly',
    'technology for independent living seniors',
  ];

  // Use description field, or generate from body, and append long-tail keywords
  let metaDescription = '';
  if (typeof description === 'string' && description.length > 0) {
    metaDescription = description;
  } else if (isContentfulDocument(body)) {
    // Try to extract first paragraph from rich text
    const firstParagraph = body.content.find((node: any) => node.nodeType === 'paragraph');
    if (
      firstParagraph &&
      Array.isArray(firstParagraph.content) &&
      firstParagraph.content[0] &&
      firstParagraph.content[0].nodeType === 'text' &&
      typeof firstParagraph.content[0].value === 'string'
    ) {
      metaDescription = firstParagraph.content[0].value;
    }
  }
  metaDescription +=
    ' | ' + longTailKeywords.slice(0, 4).join(', ');

  const imageUrl = isAssetWithFile(featuredImage)
    ? `https:${featuredImage.fields.file.url}`
    : undefined;

  return {
    title: typeof title === 'string' ? title : 'Blog Post',
    description: metaDescription,
    openGraph: {
      title: typeof title === 'string' ? title : 'Blog Post',
      description: metaDescription,
      images: imageUrl ? [imageUrl] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: typeof title === 'string' ? title : 'Blog Post',
      description: metaDescription,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  if (!post) return notFound();

  const { title, date, readTime, featuredImage, author, topics, body, description } = post.fields;

  // Split the title into 4 lines for dramatic effect
  let titleLines: string[] = [];
  if (typeof title === 'string') {
    // Try to split the title into 4 roughly equal lines
    const words = title.split(' ');
    const lines = 4;
    const wordsPerLine = Math.ceil(words.length / lines);
    for (let i = 0; i < lines; i++) {
      titleLines.push(words.slice(i * wordsPerLine, (i + 1) * wordsPerLine).join(' '));
    }
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "image": isAssetWithFile(featuredImage)
      ? `https:${featuredImage.fields.file.url}` : undefined,
    "datePublished": date,
    "author": isAuthor(author) ? author.fields.name : undefined,
    "description": (typeof description === 'string' && description.length > 0)
      ? description
      : 'remote patient monitoring for seniors, best remote health monitoring devices for elderly, in-home health monitoring for elderly patients, wearable health trackers for seniors',
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blog/${params.slug}`
    },
    "keywords": [
      'remote patient monitoring for seniors',
      'best remote health monitoring devices for elderly',
      'in-home health monitoring for elderly patients',
      'wearable health trackers for seniors',
      'telehealth solutions for elderly care',
      'fall detection devices for elderly at home',
      'continuous health monitoring for Alzheimer\'s patients',
      'remote vital sign monitoring for elderly',
      'chronic disease management with remote monitoring',
      'wireless health monitoring for seniors',
      'home-based cardiac monitoring for elderly',
      'remote patient monitoring services for seniors',
      'caregiver tools for elderly remote monitoring',
      'remote patient monitoring for chronic conditions in elderly',
      'technology for independent living seniors',
    ].join(', ')
  };

  return (
    <main className="bg-gray-100 min-h-screen pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Header Section - full width background */}
      <section className="w-full bg-blue-50 pt-32 pb-16 px-4 flex justify-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl w-full min-h-[340px]">
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
              {typeof date === 'string' || typeof date === 'number' ? (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {new Date(date).toLocaleDateString()}
                </span>
              ) : null}
              {readTime && (typeof readTime === 'string' || typeof readTime === 'number') && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {readTime} min read
                </span>
              )}
            </div>
            <h1 className="text-5xl font-bold mb-8 break-words leading-tight">
              {titleLines.length > 0
                ? titleLines.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))
                : (typeof title === 'string' ? title : 'Untitled')}
            </h1>
          </div>
          {isAssetWithFile(featuredImage) && (
            <img
              src={featuredImage.fields.file.url}
              alt={featuredImage.fields.title || 'Featured image'}
              className="rounded-lg shadow-lg w-full max-w-md object-cover h-[260px] lg:h-[340px]"
              style={{ minHeight: '180px', maxHeight: '340px' }}
            />
          )}
        </div>
      </section>

      {/* Author and Topics Sidebar + Body */}
      <section className="max-w-6xl mx-auto px-4 mt-10 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 flex flex-col items-start mb-8 lg:mb-0">
          {isAuthor(author) && (
            <div className="flex items-center gap-2 mb-8">
              {isAssetWithFile(author.fields.photo) && (
                <img
                  src={author.fields.photo.fields.file.url}
                  alt={author.fields.name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <span className="font-medium text-gray-700">by {author.fields.name}</span>
            </div>
          )}
          {topics && Array.isArray(topics) && (
            <div className="mt-4">
              <div className="font-semibold mb-2">Topics</div>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic: any, idx: number) => (
                  <span
                    key={idx}
                    className="border border-blue-400 text-blue-700 px-3 py-1 rounded text-xs font-medium bg-white"
                  >
                    {typeof topic === 'string'
                      ? topic
                      : isTopic(topic)
                        ? topic.fields.name
                        : ''}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Social Share Buttons */}
          <div className="mt-8 w-full">
            <div className="font-semibold mb-2">Share this article</div>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourdomain.com/blog/${params.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/></svg>
              </a>
              {/* X (formerly Twitter) */}
              <a
                href={`https://x.com/intent/tweet?url=${encodeURIComponent(`https://yourdomain.com/blog/${params.slug}`)}&text=${encodeURIComponent(typeof title === 'string' ? title : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="text-black hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.477l-4.06 4.885 5.19 6.16h-2.07l-4.06-4.885-5.19-6.16h2.07l4.06 4.885 5.19-6.16z"/></svg>
              </a>
              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://yourdomain.com/blog/${params.slug}`)}&title=${encodeURIComponent(typeof title === 'string' ? title : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="text-blue-700 hover:text-blue-900"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </a>
              {/* Email */}
              <a
                href={`mailto:?subject=${encodeURIComponent(typeof title === 'string' ? title : '')}&body=${encodeURIComponent(`Check out this article: https://yourdomain.com/blog/${params.slug}`)}`}
                aria-label="Share by Email"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0V8m0 4v4m-8-4v4m0-4V8m0 4h8" /></svg>
              </a>
            </div>
          </div>
        </aside>
        {/* Body */}
        <section className="flex-1 min-w-0">
          <article className="prose prose-lg">
            {isContentfulDocument(body)
              ? documentToReactComponents(body)
              : typeof body === 'string'
                ? body
                : <p>No content available.</p>}
          </article>
        </section>
      </section>
    </main>
  );
}