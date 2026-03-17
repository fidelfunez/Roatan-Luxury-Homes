// Content management utilities for the website editor

const CONTENT_STORAGE_KEY = 'caribbeanLuxRealty_websiteContent';

// Safe content getter that won't cause React errors during component definition
export const safeGetContent = (page, section, field, fallback = '') => {
  try {
    const stored = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!stored) return fallback;
    
    const content = JSON.parse(stored);
    const value = content[page]?.[section]?.[field];
    
    if (!value || typeof value !== 'string' || value.trim() === '') {
      return fallback;
    }
    
    return value;
  } catch (error) {
    return fallback;
  }
};

// Default content structure
const defaultContent = {
  home: {
    hero: {
      title: 'Buy or Rent a House in Roatán, Honduras',
      subtitle: 'Your trusted source for buying and renting houses in Roatán, the Bay Islands, and the Caribbean. Luxury homes, beachfront properties, and investment opportunities.',
      trustIndicator1: '15+ Years Experience',
      trustIndicator2: '500+ Properties Sold',
      trustIndicator3: '24/7 Support'
    },
    welcome: {
      title: 'Welcome to Paradise 👋🏼',
      description: 'Roatán, Honduras – in the Caribbean\'s Bay Islands – offers unparalleled beauty and a welcoming community. Whether you want to buy a house in Roatán, rent a house in Roatán, or invest in Honduras real estate, Roatán Luxury Homes is your trusted guide.',
      feature1Title: 'Expert Guidance',
      feature1Desc: 'Navigating Roatán and Bay Islands real estate with local expertise and personalized service.',
      feature2Title: 'Client Focused',
      feature2Desc: 'Your dreams are our priority. We listen, advise, and deliver exceptional results.',
      feature3Title: 'Prime Locations',
      feature3Desc: 'Access to exclusive listings in Roatán, Honduras and the Caribbean\'s most sought-after destinations.'
    },
    featuredLocation: {
      title: 'Featured Location: Roatán, Bay Islands, Honduras',
      description: 'Discover Roatán, Honduras – the largest of the Bay Islands in the Caribbean. Buy or rent a house in Roatan amid crystal-clear waters and white sandy beaches. Our exclusive properties offer the perfect blend of luxury and island living.',
      feature1: 'World-class diving and snorkeling',
      feature2: 'Pristine beaches and coral reefs',
      feature3: 'Luxury amenities and modern conveniences',
      startingPrice: 'Starting from $450,000'
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Don\'t just take our word for it. Here\'s what our satisfied clients have to say about their experience.',
      testimonial1Name: 'Sarah & Mike',
      testimonial1Location: 'Roatán Beach Villa',
      testimonial1Text: 'Roatán Luxury Homes made our dream of owning a beachfront property a reality. Their attention to detail was exceptional.',
      testimonial2Name: 'David Rodriguez',
      testimonial2Location: 'West Bay Condo',
      testimonial2Text: 'Professional, responsive, and truly understands the local market. I couldn\'t be happier with my investment property.',
      testimonial3Name: 'Emma Thompson',
      testimonial3Location: 'Sandy Bay Home',
      testimonial3Text: 'From the first consultation to closing, everything was seamless. They really care about their clients\' success.'
    },
    cta: {
      title: 'Ready to Find Your Paradise?',
      subtitle: 'Let\'s start your journey to owning a piece of Caribbean paradise today.'
    }
  },
  about: {
    company: {
      title: 'About Roatán Luxury Homes',
      subtitle: 'Your trusted partners for buying or renting a house in Roatán, Honduras and the Bay Islands. We help you find your piece of Caribbean paradise.',
      missionTitle: 'Our Mission',
      missionText: 'At Roatán Luxury Homes, our mission is to provide exceptional real estate services with integrity, professionalism, and a deep understanding of the local market. We strive to empower our clients—whether U.S. buyers seeking tropical homes or investors looking for lucrative opportunities—to make informed decisions and achieve their property goals in Roatán.',
      missionText2: 'We believe in building lasting relationships based on trust and transparency, ensuring every client feels confident and supported throughout their journey.'
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      feature1Title: 'Local Expertise',
      feature1Desc: 'Unmatched knowledge of Roatán\'s neighborhoods, market trends, and legalities.',
      feature2Title: 'Trusted & Transparent',
      feature2Desc: 'We operate with the highest ethical standards, ensuring clarity and honesty in all dealings.',
      feature3Title: 'Client-Centric Approach',
      feature3Desc: 'Your needs are our priority. We offer personalized service tailored to your unique goals.'
    },
    team: {
      title: 'Meet Our Team',
      member1Name: 'Alice Johnson',
      member1Role: 'Lead Agent & Founder',
      member1Bio: 'With over 15 years of experience in Roatán real estate, Alice is passionate about connecting clients with their dream properties and ensuring a seamless transaction process.',
      member2Name: 'Bob Williams',
      member2Role: 'Sales Specialist',
      member2Bio: 'Bob\'s deep knowledge of the local market and dedication to client satisfaction make him an invaluable asset to buyers and sellers alike.',
      member3Name: 'Carol Davis',
      member3Role: 'Client Relations Manager',
      member3Bio: 'Carol ensures every client receives personalized attention and support throughout their real estate journey, making complex processes feel simple.'
    }
  },
  services: {
    hero: {
      title: 'Our Services',
      subtitle: 'Comprehensive real estate solutions tailored to your needs in Roatán. From buying your dream home to managing investments, we\'ve got you covered.',
      stat1Number: '500+',
      stat1Label: 'Properties Sold',
      stat2Number: '15+',
      stat2Label: 'Years Experience',
      stat3Number: '100%',
      stat3Label: 'Client Satisfaction',
      stat4Number: '24/7',
      stat4Label: 'Support Available'
    },
    whyChooseUs: {
      title: 'Why Choose Roatán Luxury Homes?',
      subtitle: 'We combine local expertise with international standards to deliver exceptional results for our clients.',
      feature1Title: 'Trusted Expertise',
      feature1Desc: '15+ years of experience in Caribbean real estate with deep local knowledge.',
      feature2Title: 'Personalized Service',
      feature2Desc: 'Dedicated support throughout your entire real estate journey.',
      feature3Title: 'Quality Assurance',
      feature3Desc: 'Rigorous due diligence and quality standards for every transaction.',
      feature4Title: '24/7 Support',
      feature4Desc: 'Round-the-clock assistance for all your real estate needs.'
    },
    cta: {
      title: 'Ready to Get Started?',
      subtitle: 'Contact us today to discuss your real estate needs and discover how we can help you achieve your goals in Roatán.'
    }
  },
  contact: {
    hero: {
      title: 'Get in Touch',
      subtitle: 'We\'re here to help you with all your Roatán real estate needs. Reach out to us today!',
      stat1Number: '24/7',
      stat1Label: 'Support Available',
      stat2Number: '< 2hrs',
      stat2Label: 'Response Time',
      stat3Number: '500+',
      stat3Label: 'Happy Clients',
      stat4Number: '15+',
      stat4Label: 'Years Experience'
    },
    contactInfo: {
      phone: '+504 3341-9532',
      email: 'info@roatanluxuryhomes.com',
      address: 'Roatán, Bay Islands, Honduras',
      officeHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      emergencyContact: 'Available 24/7 for urgent inquiries'
    },
    whyChooseUs: {
      title: 'Why Choose Roatán Luxury Homes?',
      subtitle: 'We combine local expertise with international standards to deliver exceptional results for our clients.',
      feature1Title: 'Trusted Expertise',
      feature1Desc: '15+ years of experience in Caribbean real estate with deep local knowledge.',
      feature2Title: 'Personalized Service',
      feature2Desc: 'Dedicated support throughout your entire real estate journey.',
      feature3Title: 'Quality Assurance',
      feature3Desc: 'Rigorous due diligence and quality standards for every transaction.',
      feature4Title: 'Client Satisfaction',
      feature4Desc: '500+ satisfied clients with 100% satisfaction rate.'
    }
  },
  blog: {
    hero: {
      title: 'Our Blog',
      subtitle: 'Insights, tips, and news about real estate in Roatán and the Bay Islands.',
      badge: 'Latest Updates'
    }
  },
  properties: {
    hero: {
      title: 'Houses for Sale & Rent in Roatán, Honduras',
      subtitle: 'Buy or rent a house in Roatán and the Bay Islands. Browse luxury homes, beachfront properties, and Caribbean real estate in Roatan, Honduras.',
      badge: 'Roatan & Bay Islands Properties'
    }
  },
  'property-sales-acquisition': {
    title: 'Property Sales & Acquisition',
    description: 'Our expert team provides comprehensive support for buying or selling properties in Roatán. We handle everything from initial market analysis, property viewings, negotiation, to the final closing stages. Whether you\'re looking for a luxury beachfront villa, a cozy condo, a plot of land to build your dream home, or a commercial investment, we leverage our extensive network and local knowledge to find the perfect match for your needs. We ensure a transparent and smooth transaction process, guiding you every step of the way.',
    ctaText: 'Let\'s discuss how we can assist you with property sales & acquisition. Contact us today for a personalized consultation.'
  },
  'legal-guidance-due-diligence': {
            title: 'Legal Guidance & Assistance',
    description: 'Navigating the legal landscape of Honduran real estate can be challenging. We connect you with highly reputable and experienced legal professionals specializing in property law. They will conduct thorough due diligence, including title searches, verification of property boundaries, and ensuring there are no outstanding liens or encumbrances. Our legal partners will also assist with contract review and preparation, ensuring your interests are protected throughout the transaction.',
          ctaText: 'Let\'s discuss how we can assist you with legal guidance & assistance. Contact us today for a personalized consultation.'
  },
  'relocation-assistance': {
    title: 'Relocation Assistance',
    description: 'Making the move to Roatán is an exciting adventure, and we\'re here to make your transition as smooth as possible. Our relocation assistance services cover a wide range of needs, from providing information on residency requirements and visa processes, to helping you set up bank accounts, find schools for your children, and connect with essential local services. We can also offer insights into island life, community groups, and cultural nuances to help you feel at home quickly.',
    ctaText: 'Let\'s discuss how we can assist you with relocation assistance. Contact us today for a personalized consultation.'
  },
  'land-development-investment': {
    title: 'Development & Investment',
    description: 'Roatán offers significant opportunities for land development and real estate investment. We assist clients in identifying prime parcels of land suitable for residential, commercial, or mixed-use development. Our team can connect you with trusted local architects, engineers, and construction companies. We also provide market analysis and investment strategy advice to help you maximize your returns and navigate the development process efficiently.',
    ctaText: 'Let\'s discuss how we can assist you with development & investment. Contact us today for a personalized consultation.'
  },
  'vacation-rental-management': {
    title: 'Vacation Rental Management',
    description: 'Turn your Roatán property into a lucrative income source with our professional vacation rental management services. We handle all aspects of managing your rental, including marketing and listing on popular platforms, managing bookings and guest communication, coordinating check-ins/check-outs, and overseeing cleaning and maintenance. Our goal is to maximize your occupancy rates and rental income while ensuring your property is well-maintained and your guests have an exceptional experience.',
    ctaText: 'Let\'s discuss how we can assist you with vacation rental management. Contact us today for a personalized consultation.'
  },
  'commercial-real-estate': {
    title: 'Commercial Real Estate',
    description: 'For businesses looking to establish or expand their presence in Roatán, we offer specialized commercial real estate services. We can help you find suitable office spaces, retail locations, warehouses, or properties for hospitality ventures like hotels and restaurants. Our team understands the local commercial market dynamics and can assist with site selection, lease negotiation, and connecting you with relevant business support services.',
    ctaText: 'Let\'s discuss how we can assist you with commercial real estate. Contact us today for a personalized consultation.'
  },
  header: {
    logo: {
      companyName: 'Roatán Luxury Homes',
      tagline: 'Luxury Caribbean Properties'
    },
    navigation: {
      homeLabel: 'Home',
      propertiesLabel: 'Properties',
      servicesLabel: 'Services',
      aboutLabel: 'About Us',
      blogLabel: 'Blog',
      contactLabel: 'Contact'
    },
    topBar: {
      location: 'Roatán, Honduras',
      phone: '+504 3341-9532',
      hours: 'Mon-Fri 9AM-6PM'
    },
    cta: {
      ctaText: 'Get in Touch',
      searchPlaceholder: 'Search the entire website...'
    }
  },
  footer: {
    companyInfo: {
      description: 'Your trusted partner for buying and renting houses in Roatán, Honduras and the Caribbean. Luxury real estate in the Bay Islands.',
      address: 'Roatán, Bay Islands, Honduras',
      phone: '+504 3341-9532',
      email: 'info@roatanluxuryhomes.com'
    },
    newsletter: {
      title: 'Stay Updated',
      description: 'Subscribe to our newsletter for the latest luxury properties and news.',
      placeholder: 'Enter your email',
      buttonText: 'Subscribe'
    },
    links: {
      exploreTitle: 'Explore',
      companyTitle: 'Company',
      privacyPolicy: 'Privacy Policy',
      copyright: 'Roatán Luxury Homes. All rights reserved.'
    }
  }
};

const defaultContentEs = {
  home: {
    hero: {
      title: 'Casas en venta y alquiler en Roatán y Honduras',
      subtitle: 'Tu aliado para encontrar la casa ideal en Roatán, las Islas de la Bahía y el Caribe. Propiedades de lujo, frente al mar y oportunidades de inversión.',
      trustIndicator1: '15+ años de experiencia',
      trustIndicator2: '500+ propiedades vendidas',
      trustIndicator3: 'Soporte 24/7'
    },
    welcome: {
      title: 'Bienvenido al paraíso',
      description: 'Roatán, Honduras — en el corazón del Caribe — te ofrece belleza única y una comunidad que te recibe con los brazos abiertos. Ya sea que busques comprar, alquilar o invertir en bienes raíces, Roatán Luxury Homes es tu guía de confianza.',
      feature1Title: 'Asesoría experta',
      feature1Desc: 'Conocemos el mercado de Roatán y las Islas de la Bahía como nadie. Te acompañamos con conocimiento local y un trato personalizado.',
      feature2Title: 'Tu prioridad es la nuestra',
      feature2Desc: 'Escuchamos lo que necesitas, te asesoramos con honestidad y trabajamos para que logres tus metas.',
      feature3Title: 'Las mejores ubicaciones',
      feature3Desc: 'Acceso a propiedades exclusivas en Roatán y los destinos más buscados del Caribe.'
    },
    featuredLocation: {
      title: 'Roatán, Islas de la Bahía, Honduras',
      description: 'Roatán es la isla más grande de la Bahía. Encuentra tu casa entre aguas cristalinas y playas de arena blanca. Ofrecemos el equilibrio perfecto entre lujo y vida isleña.',
      feature1: 'Buceo y snorkel de clase mundial',
      feature2: 'Playas vírgenes y arrecifes de coral',
      feature3: 'Amenidades de lujo y todas las comodidades',
      startingPrice: 'Desde $450,000'
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'No te quedes con nuestra palabra. Mira lo que quienes ya confiaron en nosotros tienen que decir.',
      testimonial1Name: 'Sarah y Mike',
      testimonial1Location: 'Villa en playa Roatán',
      testimonial1Text: 'Roatán Luxury Homes hizo realidad nuestro sueño de tener una propiedad frente al mar. Su atención al detalle fue excepcional.',
      testimonial2Name: 'David Rodríguez',
      testimonial2Location: 'Condominio West Bay',
      testimonial2Text: 'Profesionales, atentos y conocen el mercado. No podría estar más contento con mi inversión.',
      testimonial3Name: 'Emma Thompson',
      testimonial3Location: 'Casa Sandy Bay',
      testimonial3Text: 'Desde la primera consulta hasta el cierre, todo salió perfecto. Se preocupan de verdad por sus clientes.'
    },
    cta: {
      title: '¿Listo para encontrar tu lugar en el paraíso?',
      subtitle: 'Empecemos hoy tu camino hacia tu hogar en el Caribe.'
    }
  },
  about: {
    company: {
      title: 'Sobre Roatán Luxury Homes',
      subtitle: 'Somos tu socio de confianza para comprar o alquilar en Roatán, Honduras e Islas de la Bahía. Te ayudamos a encontrar tu hogar en el Caribe.',
      missionTitle: 'Nuestra misión',
      missionText: 'En Roatán Luxury Homes nos dedicamos a ofrecer un servicio inmobiliario excepcional, con honestidad y un conocimiento profundo del mercado local. Ayudamos a compradores e inversionistas a tomar decisiones informadas y alcanzar sus metas en Roatán.',
      missionText2: 'Creemos en relaciones a largo plazo basadas en confianza y transparencia. Queremos que te sientas seguro y acompañado en cada paso.'
    },
    whyChooseUs: {
      title: '¿Por qué elegirnos?',
      feature1Title: 'Experiencia local',
      feature1Desc: 'Conocemos los barrios, las tendencias del mercado y los aspectos legales de Roatán como nadie.',
      feature2Title: 'Confianza y transparencia',
      feature2Desc: 'Trabajamos con los más altos estándares éticos. Claridad y honestidad en cada trato.',
      feature3Title: 'Tú eres la prioridad',
      feature3Desc: 'Tus necesidades van primero. Te ofrecemos un servicio a tu medida.'
    },
    team: {
      title: 'Conoce a nuestro equipo',
      member1Name: 'Alice Johnson',
      member1Role: 'Agente principal y fundadora',
      member1Bio: 'Con más de 15 años en bienes raíces de Roatán, Alice se dedica a conectar a sus clientes con la propiedad ideal y a que todo el proceso sea sencillo.',
      member2Name: 'Bob Williams',
      member2Role: 'Especialista en ventas',
      member2Bio: 'Bob conoce el mercado local a fondo y se compromete con la satisfacción de cada cliente.',
      member3Name: 'Carol Davis',
      member3Role: 'Gerente de relaciones con clientes',
      member3Bio: 'Carol se asegura de que cada cliente reciba atención personalizada y apoyo durante todo el proceso.'
    }
  },
  services: {
    hero: {
      title: 'Nuestros servicios',
      subtitle: 'Soluciones inmobiliarias completas para ti. Desde encontrar la casa de tus sueños hasta gestionar tus inversiones en Roatán.',
      stat1Number: '500+',
      stat1Label: 'Propiedades vendidas',
      stat2Number: '15+',
      stat2Label: 'Años de experiencia',
      stat3Number: '100%',
      stat3Label: 'Clientes satisfechos',
      stat4Number: '24/7',
      stat4Label: 'Soporte disponible'
    },
    whyChooseUs: {
      title: '¿Por qué Roatán Luxury Homes?',
      subtitle: 'Unimos experiencia local con estándares internacionales para darte los mejores resultados.',
      feature1Title: 'Experiencia de confianza',
      feature1Desc: 'Más de 15 años en bienes raíces del Caribe. Conocemos el mercado como nadie.',
      feature2Title: 'Servicio a tu medida',
      feature2Desc: 'Te acompañamos en cada paso de tu proceso inmobiliario.',
      feature3Title: 'Calidad garantizada',
      feature3Desc: 'Revisamos cada detalle y mantenemos altos estándares en cada operación.',
      feature4Title: 'Soporte 24/7',
      feature4Desc: 'Estamos disponibles cuando nos necesites.'
    },
    cta: {
      title: '¿Listo para empezar?',
      subtitle: 'Escríbenos hoy y te ayudamos a alcanzar tus metas en Roatán.'
    }
  },
  contact: {
    hero: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para ayudarte con todo lo que necesites en Roatán. Escríbenos hoy.',
      stat1Number: '24/7',
      stat1Label: 'Soporte disponible',
      stat2Number: '< 2hrs',
      stat2Label: 'Tiempo de respuesta',
      stat3Number: '500+',
      stat3Label: 'Clientes satisfechos',
      stat4Number: '15+',
      stat4Label: 'Años de experiencia'
    },
    contactInfo: {
      phone: '+504 3341-9532',
      email: 'info@roatanluxuryhomes.com',
      address: 'Roatán, Islas de la Bahía, Honduras',
      officeHours: 'Lunes a viernes: 9:00 AM - 6:00 PM',
      emergencyContact: 'Disponible 24/7 para consultas urgentes'
    },
    whyChooseUs: {
      title: '¿Por qué Roatán Luxury Homes?',
      subtitle: 'Unimos experiencia local con estándares internacionales para darte los mejores resultados.',
      feature1Title: 'Experiencia de confianza',
      feature1Desc: 'Más de 15 años en bienes raíces del Caribe.',
      feature2Title: 'Servicio a tu medida',
      feature2Desc: 'Te acompañamos en cada paso.',
      feature3Title: 'Calidad garantizada',
      feature3Desc: 'Revisamos cada detalle en cada operación.',
      feature4Title: 'Clientes satisfechos',
      feature4Desc: 'Más de 500 clientes con 100% de satisfacción.'
    }
  },
  blog: {
    hero: {
      title: 'Nuestro blog',
      subtitle: 'Consejos, información y noticias sobre bienes raíces en Roatán e Islas de la Bahía.',
      badge: 'Últimas actualizaciones'
    }
  },
  properties: {
    hero: {
      title: 'Casas en venta y alquiler en Roatán y Honduras',
      subtitle: 'Encuentra tu casa en Roatán e Islas de la Bahía. Propiedades de lujo, frente al mar y más.',
      badge: 'Propiedades Roatán e Islas de la Bahía'
    }
  },
  'property-sales-acquisition': {
    title: 'Ventas y adquisición de propiedades',
    description: 'Nuestro equipo te acompaña en todo el proceso: análisis de mercado, visitas, negociación y cierre. Ya sea una villa frente al mar, un condominio, un terreno o una inversión comercial, usamos nuestra red y conocimiento local para encontrar lo que buscas. Proceso transparente y sin complicaciones.',
    ctaText: 'Hablemos de cómo podemos ayudarte. Contáctanos hoy para una consulta personalizada.'
  },
  'legal-guidance-due-diligence': {
    title: 'Asesoría legal',
    description: 'El tema legal en bienes raíces en Honduras puede ser complejo. Te conectamos con abogados especializados en derecho inmobiliario para revisión de títulos, contratos y due diligence.',
    ctaText: '¿Necesitas asesoría legal? Contáctanos hoy.'
  },
  'relocation-assistance': {
    title: 'Ayuda para mudarte',
    description: 'Mudarte a Roatán es una aventura emocionante. Te ayudamos con residencia, visas, cuentas bancarias, escuelas y todo lo que necesites para que tu transición sea sencilla.',
    ctaText: '¿Planeas mudarte? Contáctanos hoy.'
  },
  'land-development-investment': {
    title: 'Desarrollo e inversión',
    description: 'Roatán ofrece grandes oportunidades para desarrollo e inversión. Te ayudamos a encontrar terrenos para proyectos residenciales, comerciales o mixtos.',
    ctaText: '¿Buscas invertir? Contáctanos hoy.'
  },
  'vacation-rental-management': {
    title: 'Administración de alquileres vacacionales',
    description: 'Convierte tu propiedad en Roatán en una fuente de ingresos. Nos encargamos del marketing, reservas, check-in/out, limpieza y mantenimiento para maximizar tu ocupación e ingresos.',
    ctaText: '¿Quieres rentar tu propiedad? Contáctanos hoy.'
  },
  'commercial-real-estate': {
    title: 'Bienes raíces comerciales',
    description: 'Para negocios que quieren establecerse o crecer en Roatán: oficinas, locales, almacenes, hoteles y restaurantes. Te ayudamos a encontrar el espacio ideal.',
    ctaText: '¿Buscas espacio comercial? Contáctanos hoy.'
  },
  header: {
    logo: {
      companyName: 'Roatán Luxury Homes',
      tagline: 'Propiedades de lujo en el Caribe'
    },
    navigation: {
      homeLabel: 'Inicio',
      propertiesLabel: 'Propiedades',
      servicesLabel: 'Servicios',
      aboutLabel: 'Nosotros',
      blogLabel: 'Blog',
      contactLabel: 'Contacto'
    },
    topBar: {
      location: 'Roatán, Honduras',
      phone: '+504 3341-9532',
      hours: 'Lun-Vie 9AM-6PM'
    },
    cta: {
      ctaText: 'Contáctanos',
      searchPlaceholder: 'Buscar en todo el sitio...'
    }
  },
  footer: {
    companyInfo: {
      description: 'Tu socio de confianza para comprar y alquilar en Roatán, Honduras y el Caribe. Bienes raíces de lujo en las Islas de la Bahía.',
      address: 'Roatán, Islas de la Bahía, Honduras',
      phone: '+504 3341-9532',
      email: 'info@roatanluxuryhomes.com'
    },
    newsletter: {
      title: 'Mantente informado',
      description: 'Suscríbete a nuestro boletín para recibir las últimas propiedades y noticias.',
      placeholder: 'Ingresa tu correo',
      buttonText: 'Suscribirse'
    },
    links: {
      exploreTitle: 'Explorar',
      companyTitle: 'Empresa',
      privacyPolicy: 'Política de privacidad',
      copyright: 'Roatán Luxury Homes. Todos los derechos reservados.'
    }
  }
};

// Get content from localStorage or return default
export const getWebsiteContent = () => {
  try {
    const stored = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      
      // Check if the content is corrupted (has numeric keys)
      const isCorrupted = Object.keys(parsed).some(key => {
        if (typeof parsed[key] === 'object' && parsed[key] !== null) {
          return Object.keys(parsed[key]).some(subKey => {
            if (typeof parsed[key][subKey] === 'object' && parsed[key][subKey] !== null) {
              return Object.keys(parsed[key][subKey]).some(fieldKey => {
                const value = parsed[key][subKey][fieldKey];
                return typeof value === 'object' && value !== null && Object.keys(value).every(k => !isNaN(k));
              });
            }
            return false;
          });
        }
        return false;
      });
      
      if (isCorrupted) {
        console.warn('🧹 contentUtils: Detected corrupted content, clearing localStorage');
        localStorage.removeItem(CONTENT_STORAGE_KEY);
        return defaultContent;
      }
      
      // Additional check: ensure all values are strings, not objects
      const hasObjectValues = Object.keys(parsed).some(pageKey => {
        if (typeof parsed[pageKey] === 'object' && parsed[pageKey] !== null) {
          return Object.keys(parsed[pageKey]).some(sectionKey => {
            if (typeof parsed[pageKey][sectionKey] === 'object' && parsed[pageKey][sectionKey] !== null) {
              return Object.keys(parsed[pageKey][sectionKey]).some(fieldKey => {
                const value = parsed[pageKey][sectionKey][fieldKey];
                return typeof value === 'object' && value !== null && !Array.isArray(value);
              });
            }
            return false;
          });
        }
        return false;
      });
      
      if (hasObjectValues) {
        console.warn('🧹 contentUtils: Detected object values instead of strings, clearing localStorage');
        localStorage.removeItem(CONTENT_STORAGE_KEY);
        return defaultContent;
      }
      
      // Merge with defaults to ensure all fields exist
      const merged = mergeWithDefaults(parsed);
      return merged;
    }
    return defaultContent;
  } catch (error) {
    console.error('Error loading website content:', error);
    // Clear localStorage on any error
    try {
      localStorage.removeItem(CONTENT_STORAGE_KEY);
    } catch (clearError) {
      console.error('Error clearing localStorage:', clearError);
    }
    return defaultContent;
  }
};

// Save content to localStorage
export const saveWebsiteContent = (content) => {
  try {
    const serialized = JSON.stringify(content);
    localStorage.setItem(CONTENT_STORAGE_KEY, serialized);
    
    // Dispatch event immediately after saving
    window.dispatchEvent(new Event('websiteContentUpdated'));
    
    return true;
  } catch (error) {
    console.error('Error saving website content:', error);
    return false;
  }
};

// Get specific content section
export const getContentSection = (page, section) => {
  const content = getWebsiteContent();
  return content[page]?.[section] || {};
};

// Get specific content field with fallback defaults. Pass lang ('en'|'es') for bilingual support.
export const getContentField = (page, section, field, lang = 'en') => {
  const content = getWebsiteContent();
  const fieldKey = lang === 'es' ? field + 'Es' : field;

  let value;
  if (section === '') {
    value = content[page]?.[fieldKey];
  } else {
    const sectionContent = getContentSection(page, section);
    value = sectionContent[fieldKey];
  }

  if (!value || typeof value !== 'string' || value.trim() === '') {
    const def = lang === 'es' ? defaultContentEs : defaultContent;
    if (section === '') {
      return def[page]?.[field] || '';
    }
    return def[page]?.[section]?.[field] || '';
  }

  return value;
};

// Merge stored content with defaults to ensure all fields exist (EN + ES)
const mergeWithDefaults = (stored) => {
  const merged = JSON.parse(JSON.stringify(defaultContent));

  const addEsFields = (target, source, page, section) => {
    if (!source || typeof source !== 'object') return;
    Object.keys(source).forEach(field => {
      if (typeof source[field] === 'string' && source[field].trim()) {
        const esKey = field + 'Es';
        if (!target[esKey] || !target[esKey].trim()) {
          target[esKey] = source[field];
        }
      }
    });
  };

  Object.keys(stored).forEach(page => {
    if (merged[page]) {
      Object.keys(stored[page]).forEach(section => {
        if (merged[page][section] && typeof merged[page][section] === 'object') {
          merged[page][section] = { ...merged[page][section], ...stored[page][section] };
          const esSection = defaultContentEs[page]?.[section];
          if (esSection) addEsFields(merged[page][section], esSection, page, section);
        } else {
          merged[page][section] = stored[page][section];
        }
      });
    } else {
      merged[page] = stored[page];
    }
  });

  Object.keys(defaultContentEs).forEach(page => {
    if (!merged[page]) merged[page] = {};
    Object.keys(defaultContentEs[page] || {}).forEach(section => {
      if (merged[page][section] && typeof merged[page][section] === 'object') {
        addEsFields(merged[page][section], defaultContentEs[page][section], page, section);
      }
    });
  });

  return merged;
};

// Reset content to defaults
export const resetToDefaults = () => {
  try {
    localStorage.removeItem(CONTENT_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error resetting website content:', error);
    return false;
  }
};

// Export default content for backup
export const getDefaultContent = () => defaultContent;
export const getDefaultContentEs = () => defaultContentEs;

// Clear localStorage and reset to defaults
export const clearWebsiteContent = () => {
  try {
    localStorage.removeItem(CONTENT_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing website content:', error);
    return false;
  }
}; 