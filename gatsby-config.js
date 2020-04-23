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
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['tsx', 'html', 'js', 'svg']
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-yaml',    
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Open Sans',
              variants: ["300", "400", "500", "700"],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        //formats: ['woff2', 'woff'],
        //useMinify: true,
        //usePreload: true,
        //usePreconnect: false,
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
      resolve: '@stackbit/gatsby-plugin-menus',
      options: {
        // static definition of menu items (optional)
/*         menus: {
          main: // identifier of menu container
            [ // array of contained children menu items
              {
                identifier: 'myId', // identifier for this item (optional)
                title: 'Title for page',
                url: '/page-1/',
                weight: 1
              }
            ]
          ]
        }, */
        // Gatsby node types from which we extract menus (optional, see "Advanced usage")
        sourceNodeType: 'MarkdownRemark', 
        // the relative node path where we can find the 'menus' container (optional)
        sourceDataPath: 'frontmatter',
        // the relative node path where we can find the page's URL (required)
        sourceUrlPath: 'slug',
        // custom menu loading function (optional)
      //  menuLoader: customLoaderFunction,
        // the property to use for injecting to the page context (optional, see "Advanced usage")
        pageContextProperty: 'menus',
      },
    },
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
              maxWidth: 1920,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `static`,
            },
          },
        ],
      },
    },  
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `lawnsmatter`,
      },
    }, 
    // {
    //   resolve: `gatsby-plugin-facebook-sdk`,
    //   options: {
    //     appId: '629164404334446',
    //   },
    // },
     {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-facebook`,
    //   options: {
    //     places: [`986924381457198`], // Can be either a numeric ID or the URL ID
    //     params: {
    //       fields: "id,albums{photos{images,name,created_time}},ratings{created_time,has_rating,has_review,rating,recommendation_type,review_text,reviewer}"},
    //     key: 'EAAI8OMDTX24BAHI0H9DArAJO6xIZCWFZAidPEK0zRZB9BrWnNS0yKnc0dxPMaZCc0LIl30PtuumU3pL4ixWPZCf0Mkah3ztBngZCPaIXCzHGkGnLaG9Kzz2IzIGH3JRZAZCK1mXM5KBcegAXYoOKBQvOWDUxYpTccXQcksJ59sZBmoQZDZD', // You will need to create a Facebook application and go through review in order to get an API token.
    //     version: '6.0', // The version of the graph API to use. Defaults to 5.0
    //   },
    // },
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
            sizes: `1024x1024`,
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
