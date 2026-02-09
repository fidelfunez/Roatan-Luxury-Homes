import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Roatán Luxury Homes';
const DEFAULT_OG_IMAGE = '/Photos/hero-banner-optimized.jpg';

/**
 * SEO component: per-page title, description, canonical, Open Graph, Twitter Card.
 * Use on every public page; for dynamic pages (property, blog, service) pass entity-specific props.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  jsonLd = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Buy & Rent Houses in Roatan, Honduras & Caribbean`;
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = canonical ? (canonical.startsWith('http') ? canonical : `${origin}${canonical}`) : (typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : '');

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || `Buy or rent a house in Roatán, Honduras & the Bay Islands. ${SITE_NAME} – Caribbean real estate: luxury homes, villas, beachfront in Roatan.`} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || `Buy or rent a house in Roatán, Honduras. Caribbean real estate – luxury homes in Roatan & Bay Islands. ${SITE_NAME}.`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      {ogImage && <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || `Buy or rent a house in Roatán, Honduras. Caribbean real estate – Roatan & Bay Islands. ${SITE_NAME}.`} />
      {ogImage && <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`} />}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
