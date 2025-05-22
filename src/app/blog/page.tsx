import React from 'react';
import Link from 'next/link';
import client from '../../../lib/contentful';

async function getBlogPosts() {
  const entries = await client.getEntries({ content_type: 'blogPost' });
  return entries.items;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.fields.slug} className="mb-8">
            <Link href={`/blog/${post.fields.slug}`} className="text-xl font-semibold text-primary hover:underline">
              {post.fields.title}
            </Link>
            <div className="mt-2 text-neutral-700">
              {typeof post.fields.body === 'string'
                ? post.fields.body.substring(0, 150)
                : ''}
              ...
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
} 