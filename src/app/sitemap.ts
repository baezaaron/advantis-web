import type { MetadataRoute } from 'next';

const baseUrl = 'https://advantis.care';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/services/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/careers/`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy/`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms-of-service/`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
