import React from 'react';
import { Helmet } from 'react-helmet-async';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Roatán Luxury Homes',
  description: 'Buy or rent a house in Roatán, Honduras and the Bay Islands. Roatán Luxury Homes – Caribbean real estate: luxury homes, villas, beachfront properties in Roatan.',
  url: '',
  telephone: '+504 3341-9532',
  email: 'info@roatanluxuryhomes.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Roatán',
    addressRegion: 'Islas de la Bahía',
    addressCountry: 'HN',
  },
  areaServed: [
    { '@type': 'Place', name: 'Roatán, Honduras' },
    { '@type': 'Place', name: 'Bay Islands, Honduras' },
    { '@type': 'Place', name: 'Caribbean' },
  ],
  sameAs: [],
};

export default function JsonLdOrganization() {
  const url = typeof window !== 'undefined' ? window.location.origin : '';
  const schema = { ...organizationSchema, url: url || 'https://roatan-luxury-homes.com' };
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
