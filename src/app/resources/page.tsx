import client from '../../../lib/contentful';
import Link from 'next/link';

// Define the BlogPost type for Contentful data
type BlogPost = {
  title: string;
  slug: string;
  body: string;
};

// Fetch blog posts from Contentful
async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries({ content_type: 'blogPost' });
  return entries.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    body: item.fields.body,
  }));
}

export default async function ResourcesPage() {
  const posts = await getBlogPosts();

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-28 page-header">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="page-title">Resources</h1>
          <p className="page-subtitle">Insights and articles to keep you informed</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-primary mb-8">Resources</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post.slug} className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-primary mb-4">{post.title}</h2>
                <div className="text-sm text-neutral-500 mb-2">
                  {/* Add date or excerpt here if available from Contentful */}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 