import { getProperties } from './propertyUtils';

// Website-wide search functionality
export const searchWebsite = (searchTerm) => {
  const term = searchTerm.toLowerCase().trim();
  const results = {
    properties: [],
    pages: [],
    blog: [],
    services: [],
    total: 0
  };

  // Search properties
  const properties = getProperties();
  const propertyResults = properties.filter(property => 
    property.title?.toLowerCase().includes(term) ||
    property.location?.toLowerCase().includes(term) ||
    property.description?.toLowerCase().includes(term) ||
    property.type?.toLowerCase().includes(term)
  );
  results.properties = propertyResults;

  // Search pages (static content)
  const pageContent = {
    home: {
      title: 'Home',
      url: '/',
      content: 'Buy or rent a house in Roatán, Honduras. Roatán Luxury Homes – Caribbean real estate in Roatan and the Bay Islands. Luxury homes, villas, beachfront.',
      keywords: ['Roatan', 'Roatán', 'buy house in Roatan', 'rent house in Roatan', 'Honduras', 'Bay Islands', 'Caribbean', 'luxury homes', 'beachfront']
    },
    about: {
      title: 'About Us',
      url: '/about',
      content: 'About Roatán Luxury Homes. Your trusted partners for buying and renting houses in Roatán, Honduras and the Bay Islands. Caribbean real estate.',
      keywords: ['about', 'Roatan', 'Honduras', 'Bay Islands', 'team', 'mission']
    },
    services: {
      title: 'Our Services',
      url: '/services',
      content: 'Real estate services in Roatán, Honduras: buy house, rent house, property sales, vacation rentals, land development. Bay Islands and Caribbean.',
      keywords: ['services', 'buy house Roatan', 'rent house Roatan', 'vacation rentals', 'Bay Islands', 'Honduras']
    },
    contact: {
      title: 'Contact Us',
      url: '/contact',
      content: 'Contact Roatán Luxury Homes for buying or renting a house in Roatán, Honduras and the Bay Islands. Caribbean real estate.',
      keywords: ['contact', 'Roatan', 'Honduras', 'Bay Islands', 'phone', 'email']
    }
  };

  const pageResults = Object.values(pageContent).filter(page => 
    page.title.toLowerCase().includes(term) ||
    page.content.toLowerCase().includes(term) ||
    page.keywords.some(keyword => keyword.toLowerCase().includes(term))
  );
  results.pages = pageResults;

  // Search services (from services data)
  const servicesData = [
    {
      title: 'Property Sales & Acquisition',
      url: '/services/property-sales-acquisition',
      content: 'Expert assistance for buying or selling residential homes, luxury villas, condos, and commercial properties. We guide you through every step, from market analysis to closing.',
      keywords: ['property sales', 'buying', 'selling', 'acquisition', 'real estate', 'market analysis', 'closing']
    },
    {
      title: 'Legal Guidance & Assistance',
      url: '/services/legal-guidance-due-diligence',
      content: 'Navigating Honduran property law can be complex. We connect you with trusted legal professionals for due diligence, title searches, and contract reviews.',
      keywords: ['legal', 'law', 'regulations', 'transactions', 'property law', 'guidance', 'due diligence', 'title searches', 'contract review']
    },
    {
      title: 'Relocation Assistance',
      url: '/services/relocation-assistance',
      content: 'Moving to Roatán? We offer comprehensive relocation support, including advice on residency, banking, schools, and settling into island life.',
      keywords: ['relocation', 'moving', 'residency', 'banking', 'schools', 'integration', 'settling']
    },
    {
      title: 'Development & Investment',
      url: '/services/land-development-investment',
      content: 'Land development and investment opportunities in Roatán. Identify prime locations for development.',
      keywords: ['land development', 'investment', 'development', 'land', 'construction', 'architects', 'builders']
    },
    {
      title: 'Vacation Rental Management',
      url: '/services/vacation-rental-management',
      content: 'Professional vacation rental management services. Turn your property into a profitable investment.',
      keywords: ['vacation rental', 'management', 'rental', 'investment', 'tourism', 'bookings', 'maintenance']
    },
    {
      title: 'Commercial Real Estate',
      url: '/services/commercial-real-estate',
      content: 'Commercial real estate services for businesses in Roatán. Office spaces, retail, and hospitality ventures.',
      keywords: ['commercial', 'business', 'office', 'retail', 'hospitality', 'ventures']
    }
  ];

  const serviceResults = servicesData.filter(service => 
    service.title.toLowerCase().includes(term) ||
    service.content.toLowerCase().includes(term) ||
    service.keywords.some(keyword => keyword.toLowerCase().includes(term))
  );
  results.services = serviceResults;

  // Calculate total results
  results.total = results.properties.length + results.pages.length + results.blog.length + results.services.length;

  return results;
};

// Get search suggestions based on popular terms
export const getSearchSuggestions = () => {
  return [
    'beachfront properties',
    'luxury homes',
    'vacation rentals',
    'land development',
    'relocation services',
    'commercial real estate',
    'Roatán properties',
    'Caribbean real estate'
  ];
}; 