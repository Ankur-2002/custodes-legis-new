import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.custodeslegis.com';

// All slug-based SEO pages
const pagesSlugs = [
  'best-attorneys-in-delhi',
  'best-lawyers-in-delhi',
  'best-criminal-lawyers-in-delhi',
  'best-family-lawyers-in-delhi',
  'best-constitutional-lawyers-in-delhi',
  'best-property-lawyers-in-delhi',
  'best-international-lawyers-in-delhi',
  'best-business-lawyers-in-delhi',
  'best-employment-lawyers-in-delhi',
  'best-estate-lawyers-in-delhi',
  'best-health-lawyers-in-delhi',
  'best-immigration-lawyers-in-delhi',
  'best-intellectual-property-lawyers-in-delhi',
  'best-privacy-lawyers-in-delhi',
  'best-security-lawyers-in-delhi',
  'best-tax-lawyers-in-delhi',
  'best-traffic-lawyers-in-delhi',
  'best-wills-and-trusts-lawyers-in-delhi',
  // Jaipur pages
  'best-lawyers-in-jaipur',
  'best-criminal-lawyers-in-jaipur',
  'best-family-lawyers-in-jaipur',
  'best-constitutional-lawyers-in-jaipur',
  'best-property-lawyers-in-jaipur',
  'best-international-lawyers-in-jaipur',
  'best-business-lawyers-in-jaipur',
  'best-consumer-lawyers-in-jaipur',
  'best-employment-lawyers-in-jaipur',
  'best-estate-lawyers-in-jaipur',
  'best-health-lawyers-in-jaipur',
  'best-immigration-lawyers-in-jaipur',
  'best-intellectual-property-lawyers-in-jaipur',
  'best-privacy-lawyers-in-jaipur',
  'best-security-lawyers-in-jaipur',
  'best-tax-lawyers-in-jaipur',
  'best-traffic-lawyers-in-jaipur',
  'best-wills-and-trusts-lawyers-in-jaipur',
];

// All advocate profile names
const advocateNames = ['Rakesh', 'Puneet', 'Vipul', 'Taniya'];

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // SEO slug pages
  const slugRoutes: MetadataRoute.Sitemap = pagesSlugs.map(slug => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Advocate profile pages
  const advocateRoutes: MetadataRoute.Sitemap = advocateNames.map(name => ({
    url: `${BASE_URL}/Advocate/${name}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...slugRoutes, ...advocateRoutes];
}
