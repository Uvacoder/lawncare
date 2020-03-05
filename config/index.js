module.exports = {
  pathPrefix: '/', // Prefix for all links. "

  siteTitle: 'nearandnow.services', // Navigation and Site Title
  siteTitleAlt: 'nearandnow.services - services', // Alternative Site title for SEO
  siteTitleShort: 'nearandnow.services', // short_name for manifest
  siteHeadline: 'Take a look at our services and see our recent projects.', // Headline for schema.org JSONLD
  siteUrl: 'https://nearandnow.services', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'nearandnow.services',
  author: 'gappsapps', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@lawnsmatter', // Twitter Username
  ogSiteName: 'lawnsmatter', // Facebook Site Name
  ogLanguage: 'en_GB', // og:language
  googleAnalyticsID: 'UA-XXXXXX-X',

  // Manifest and Progress color
  themeColor: '#2f3644',
  backgroundColor: '#2f3644',

  // Service SEO
  type: 'Service',
  serviceType: 'Lawn Care',
  serviceName: 'Professional Lawn Care Service',
  provider: {
    type: 'LocalBusiness',
    name: 'Lawns Matter',
  },
  hasOfferCatalog: {
    type: 'OfferCatalog',
    name: 'Lawn Care Services',
    itemListElement: {
      type: 'Offer',
      itemOffered: {
        type: 'Service',
        name: ['Lawn Assessment', 'Complete Lawn Care Service', 'Lawn Renovation',  'Scarifying', 'Lawn Aeration', 'Lawn Pest Control', 'Lawn Disease Control', 'Lawn Feed and Weed',  'Lawn Fertilisation',  'Lawn Maintenance',],
      },
    },
  },
  name: 'Lawns Matter Professional Lawn Care',
  aggregateRating: { 
    type: 'AggregateRating',
    ratingValue: '5',
    itemReviewed: 'Lawn Care Service',
    ratingCount: '10',
    reviewCount: '10',
    },
 /*     areaServed:
    GeoShape: ,
    audience: , */
  availableChannel: {
    servicePhone: '01295402447',
    serviceSmsNumber: '07904095705',
    serviceUrl: 'lawnsmatter.co.uk',
  },
    // award: ,
  brand: 'Lawns Matter',
  category: 'Physical Service',
    // hoursAvailable: ,
    // isRelatedTo: ,
    // isSimilarTo: ,
  providerMobility: 'dynamic',
    // review: ,
  serviceOutput: 'Beautiful Lawns',
  slogan: 'Professional Lawn Care',
  contactPoint: {
    name: 'Jon',
    email: 'jon@lawnsmatter.co.uk',
  },
    // termsOfService: ,

}