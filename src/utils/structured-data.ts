/**
 * Structured Data (JSON-LD) Schema Generators
 * All schemas follow Schema.org specifications
 */

export interface OrganizationSchema {
  '@context': string;
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone?: string;
    contactType?: string;
    email?: string;
  };
  sameAs?: string[];
}

export interface WebsiteSchema {
  '@context': string;
  '@type': 'WebSite';
  name: string;
  url: string;
  description?: string;
  publisher?: {
    '@type': 'Organization';
    name: string;
  };
}

export interface ArticleSchema {
  '@context': string;
  '@type': 'Article';
  headline: string;
  description?: string;
  image?: string | string[];
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  publisher?: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
}

export interface ServiceSchema {
  '@context': string;
  '@type': 'Service';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
  };
  areaServed?: string;
  serviceType?: string;
}

export interface PersonSchema {
  '@context': string;
  '@type': 'Person';
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface FAQPageSchema {
  '@context': string;
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export interface LocalBusinessSchema {
  '@context': string;
  '@type': 'LocalBusiness' | 'ProfessionalService';
  name: string;
  description?: string;
  address?: {
    '@type': 'PostalAddress';
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  telephone?: string;
  email?: string;
  url: string;
  priceRange?: string;
  image?: string;
}

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema(data: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  email?: string;
  phone?: string;
  socialLinks?: string[];
}): OrganizationSchema {
  const schema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
  };

  if (data.logo) {
    schema.logo = data.logo;
  }

  if (data.description) {
    schema.description = data.description;
  }

  if (data.email || data.phone) {
    schema.contactPoint = {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
    };
    if (data.email) schema.contactPoint.email = data.email;
    if (data.phone) schema.contactPoint.telephone = data.phone;
  }

  if (data.socialLinks && data.socialLinks.length > 0) {
    schema.sameAs = data.socialLinks;
  }

  return schema;
}

/**
 * Generate Website Schema
 */
export function generateWebsiteSchema(data: {
  name: string;
  url: string;
  description?: string;
  publisherName?: string;
}): WebsiteSchema {
  const schema: WebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
  };

  if (data.description) {
    schema.description = data.description;
  }

  if (data.publisherName) {
    schema.publisher = {
      '@type': 'Organization',
      name: data.publisherName,
    };
  }

  return schema;
}

/**
 * Generate Article Schema
 */
export function generateArticleSchema(data: {
  headline: string;
  description?: string;
  image?: string | string[];
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorType?: 'Person' | 'Organization';
  publisherName?: string;
  publisherLogo?: string;
}): ArticleSchema {
  const schema: ArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
  };

  if (data.description) {
    schema.description = data.description;
  }

  if (data.image) {
    schema.image = data.image;
  }

  if (data.datePublished) {
    schema.datePublished = data.datePublished;
  }

  if (data.dateModified) {
    schema.dateModified = data.dateModified;
  }

  if (data.authorName) {
    schema.author = {
      '@type': data.authorType || 'Person',
      name: data.authorName,
    };
  }

  if (data.publisherName) {
    schema.publisher = {
      '@type': 'Organization',
      name: data.publisherName,
    };
    if (data.publisherLogo) {
      schema.publisher.logo = {
        '@type': 'ImageObject',
        url: data.publisherLogo,
      };
    }
  }

  return schema;
}

/**
 * Generate Service Schema
 */
export function generateServiceSchema(data: {
  name: string;
  description: string;
  providerName: string;
  areaServed?: string;
  serviceType?: string;
}): ServiceSchema {
  const schema: ServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: data.providerName,
    },
  };

  if (data.areaServed) {
    schema.areaServed = data.areaServed;
  }

  if (data.serviceType) {
    schema.serviceType = data.serviceType;
  }

  return schema;
}

/**
 * Generate Person Schema
 */
export function generatePersonSchema(data: {
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  url?: string;
  socialLinks?: string[];
}): PersonSchema {
  const schema: PersonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
  };

  if (data.jobTitle) {
    schema.jobTitle = data.jobTitle;
  }

  if (data.description) {
    schema.description = data.description;
  }

  if (data.image) {
    schema.image = data.image;
  }

  if (data.url) {
    schema.url = data.url;
  }

  if (data.socialLinks && data.socialLinks.length > 0) {
    schema.sameAs = data.socialLinks;
  }

  return schema;
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url?: string }>): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

/**
 * Generate FAQ Page Schema
 */
export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Local Business Schema
 */
export function generateLocalBusinessSchema(data: {
  name: string;
  description?: string;
  url: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  phone?: string;
  email?: string;
  priceRange?: string;
  image?: string;
  businessType?: 'LocalBusiness' | 'ProfessionalService';
}): LocalBusinessSchema {
  const schema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': data.businessType || 'LocalBusiness',
    name: data.name,
    url: data.url,
  };

  if (data.description) {
    schema.description = data.description;
  }

  if (data.address) {
    schema.address = {
      '@type': 'PostalAddress',
      ...data.address,
    };
  }

  if (data.phone) {
    schema.telephone = data.phone;
  }

  if (data.email) {
    schema.email = data.email;
  }

  if (data.priceRange) {
    schema.priceRange = data.priceRange;
  }

  if (data.image) {
    schema.image = data.image;
  }

  return schema;
}

/**
 * Render JSON-LD script tag
 */
export function renderJsonLd(schema: any): string {
  return JSON.stringify(schema, null, 2);
}

