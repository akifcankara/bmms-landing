import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bridgemena.com';

  // Static pages
  const staticRoutes = ['', '/services', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service filter pages
  const serviceFilters = ['profile', 'industry', 'service'].map((filter) => ({
    url: `${baseUrl}/services/${filter}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceFilters];
}
