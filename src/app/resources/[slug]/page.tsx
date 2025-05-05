import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug, BlogPost } from '@/data/blog-posts';
import { Metadata, ResolvingMetadata } from 'next';

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Advantis Resources`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  // If post not found, show 404
  if (!post) {
    notFound();
  }
  
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/resources"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Resources
            </Link>
            
            <div className="text-sm text-white/80 font-medium mb-4">
              {post.category} • {post.date}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
              {post.title}
            </h1>
            
            <div className="flex items-center mt-0">
              <div className="h-12 w-12 rounded-full bg-white/20 mr-4"></div>
              <div className="text-sm text-white/80">{post.author.title}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      {/* Featured Image removed per design */}
      
      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Render markdown content as HTML */}
              <article className="blog-content">
                {renderMarkdown(post.content)}
              </article>
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-neutral-500">Tags:</span>
                <span className="bg-neutral-100 rounded-full px-3 py-1 text-sm text-primary">
                  {post.category}
                </span>
                <span className="bg-neutral-100 rounded-full px-3 py-1 text-sm text-primary">
                  Healthcare
                </span>
                <span className="bg-neutral-100 rounded-full px-3 py-1 text-sm text-primary">
                  Home Care
                </span>
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8">
              <div className="text-neutral-700 font-medium mb-3">Share this article:</div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label="Share via Email"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Related Articles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Get up to 3 posts from the same category, excluding current post */}
            {blogPosts
              .filter(p => p.category === post.category && p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <RelatedPostCard key={relatedPost.id} post={relatedPost} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Simple helper to render markdown-like content as HTML
function renderMarkdown(content: string) {
  // Split content by lines
  const lines = content.trim().split('\n');
  
  return (
    <div>
      {lines.map((line, i) => {
        const trimmedLine = line.trim();
        // Heading 1
        if (trimmedLine.startsWith('# ')) {
          return <h1 key={i} className="text-3xl font-bold mt-8 mb-4">{trimmedLine.substring(2)}</h1>;
        }
        // Heading 2
        if (trimmedLine.startsWith('## ')) {
          return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{trimmedLine.substring(3)}</h2>;
        }
        // Heading 3
        if (trimmedLine.startsWith('### ')) {
          return <h3 key={i} className="text-xl font-bold mt-6 mb-4">{trimmedLine.substring(4)}</h3>;
        }
        // List item
        if (trimmedLine.startsWith('- ')) {
          return <li key={i} className="ml-6 mb-2">{trimmedLine.substring(2)}</li>;
        }
        // Numbered list item
        if (trimmedLine.match(/^\d+\.\s/)) {
          const content = trimmedLine.substring(trimmedLine.indexOf('.') + 2);
          return <li key={i} className="ml-6 mb-2">{content}</li>;
        }
        // Empty line
        if (trimmedLine === '') {
          return <div key={i} className="h-4"></div>;
        }
        // Regular paragraph
        return <p key={i} className="mb-4">{trimmedLine}</p>;
      })}
    </div>
  );
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-neutral-200 h-40 flex items-center justify-center">
        <p className="text-neutral-500">Related post image</p>
      </div>
      <div className="p-6">
        <div className="text-sm text-accent font-medium mb-2">
          {post.category} • {post.date}
        </div>
        <h3 className="text-lg font-semibold text-primary mb-3">
          {post.title}
        </h3>
        <Link
          href={`/resources/${post.slug}`}
          className="inline-flex items-center text-accent font-medium hover:text-secondary transition-colors"
        >
          Read article
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 