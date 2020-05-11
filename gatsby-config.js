require('dotenv').config({
  path: `.env`,
})

const config = require('./config')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    pathPrefix,
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    logo: config.siteLogo,
    headline: config.siteHeadline,
    siteLanguage: config.siteLanguage,
    ogLanguage: config.ogLanguage,
    author: config.author,
    twitter: config.userTwitter,
    facebook: config.ogSiteName,
    type: config.type,
    serviceType: config.serviceType,
    provider: {
      type: config.provider.type,
      name: config.provider.name,
    }, 
    hasOfferCatalog: {
      type: config.hasOfferCatalog.type,
      name: config.hasOfferCatalog.name,
      itemListElement: {
        type: config.hasOfferCatalog.itemListElement.type,
        itemOffered: {
          type: config.hasOfferCatalog.itemListElement.itemOffered.type,
          name: config.hasOfferCatalog.itemListElement.itemOffered.name,
      }
    },     
    },
    serviceName: config.serviceName,
    aggregateRating: {
      type: config.aggregateRating.type,
      ratingValue: config.aggregateRating.ratingValue,
      itemReviewed: config.aggregateRating.itemReviewed,
      ratingCount: config.aggregateRating.ratingCount,
      reviewCount: config.aggregateRating.reviewCount,
    },
    // areaServed: config.areaServed, 
    // map: , 
    // audience: config.audience, 
    availableChannel: {
      servicePhone: config.availableChannel.servicePhone,
      serviceSmsNumber: config.availableChannel.serviceSmsNumber,
      serviceUrl: config.availableChannel.serviceUrl,
    },
    brand: config.brand, 
    category: config.category, 
    // hoursAvailable: config.hoursAvailable, 
    // isSimilarTo: , 
    providerMobility: config.providerMobility, 
    serviceOutput: config.serviceOutput, 
    serviceType: config.serviceType, 
    contactPoint: {
      name: config.contactPoint.name,
      email: config.contactPoint.email,
    }
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-yaml', 
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `500`, `700`]
          },
        ],
      },
    },   
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: 	'Open Sans',
                variants: [`300`, `400`, `500`, `700`],
              },
            ],
          },
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/config`,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `images`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It`s important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1645,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `static`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },  
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `lawnsmatter`,
      },
    }, 
    {
      resolve: `gatsby-plugin-react-svg`,
        options: {
          rule: {
            include: /favicon/,
            options: {
              tag: "Logo",
              name: "Lawns Matter",
              props: {
                title: "Lawns Matter",
              },
          },
        },
      },
    },
     'gatsby-plugin-sitemap',
    'gatsby-theme-overreacted-toggle',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'static/img/favicon/favicon.png',
        icons: [
          {
            src: `/favicon/LargeLogo.png`,
            sizes: `512x512`,
            type: `image/png`
        },
        {
          src: `/favicon/android-chrome-192x192.png`,
          sizes: `192x192`,
          type: `image/png`
      },
        {
          src: `/favicon/android-chrome-256x256.png`,
          sizes: `256x256`,
          type: `image/png`
      },
        {
          src: `/favicon/apple-touch-icon.png`,
          sizes: `180x180`,
          type: `image/png`

      },
      {
          src: `/favicon/favicon-32x32.png`,
          sizes: `32x32`,
          type: `image/png`
      },
       {
          src: `/favicon/favicon-16x16.png`,
          sizes: `16x16`,
          type: `image/png`
      },
       {
          src: `/favicon/safari-pinned-tab.svg`,
          sizes: `260x260`,
          color: `#0b431d`,
          type: `mask-icon`
      },
  ],
      },
    },
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.tsx`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
