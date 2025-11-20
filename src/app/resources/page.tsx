import client from '../../../lib/contentful';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';

// Define the BlogPost type for Contentful data
type BlogPost = {
  title: string;
  slug: string;
  body: string;
  date?: string | number;
};

// Format date helper function
function formatDate(date: string | number | undefined): string {
  if (!date) return '';
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : new Date(date);
    return dateObj.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch {
    return '';
  }
}

// Get date value for sorting
function getDateValue(date: string | number | undefined): number {
  if (!date) return 0;
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : new Date(date);
    return dateObj.getTime();
  } catch {
    return 0;
  }
}

// Fetch blog posts from Contentful
async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries({ content_type: 'blogPost' });
  console.log('Number of blog posts fetched:', entries.items.length);
  const posts = entries.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    body: item.fields.body,
    date: item.fields.date || item.sys?.createdAt,
  }));
  
  // Sort by date in descending order (newest first)
  return posts.sort((a, b) => {
    const dateA = getDateValue(a.date);
    const dateB = getDateValue(b.date);
    return dateB - dateA; // Descending order (newest first)
  });
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

      <FadeInSection>
        <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-primary mb-8">Resources</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post.slug} className="bg-white rounded-lg shadow p-6 flex flex-col relative">
                <h2 className="text-xl font-semibold text-primary mb-4">{post.title}</h2>
                <div className="text-sm text-neutral-500 mb-4 flex-grow">
                  {/* Add excerpt here if available from Contentful */}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
                {post.date && (
                  <div className="absolute bottom-4 right-6">
                    <span className="text-xs text-neutral-400">
                      {formatDate(post.date)}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </section>
      </FadeInSection>
    </>
  );
} 