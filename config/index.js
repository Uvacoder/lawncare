module.exports = {
  pathPrefix: '/', // Prefix for all links. "

  siteTitle: 'Lawns Matter Professional Lawn Care Service', // Navigation and Site Title
  siteTitleAlt: 'lawnsmatter.co.uk - Lawn Care Service', // Alternative Site title for SEO
  siteTitleShort: 'lawnsmatter.co.uk', // short_name for manifest
  siteHeadline: 'Professional Lawn Care Service based in Oxfordshire', // Headline for schema.org JSONLD
  siteUrl: 'https://lawnsmatter.co.uk', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/img/logo.png', // Used for SEO and manifest
  siteDescription: 'lawnsmatter.co.uk',
  author: 'gappsapps.co.uk', // Author for schema.org JSONLD

  siteFBAppID: '629164404334446', // Facebook App ID - Optional
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
  serviceName: 'Professional Lawn Care',
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
        name: 'Professional Lawn Care Service',
      },
    },
  },
  name: 'Lawns Matter Professional Lawn Care',
  aggregateRating: { 
    type: 'AggregateRating',
    ratingValue: '5',
    itemReviewed: 'Lawn Care Service',
    ratingCount: '5',
    reviewCount: '11',
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