// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
})

    // Tag pages:

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const reviewsTemplate = require.resolve('./src/templates/reviews.tsx')
  const contactTemplate = require.resolve('./src/templates/contact.tsx')
  const aboutTemplate = require.resolve('./src/templates/about.tsx')
  const serviceTemplate = require.resolve('./src/templates/service.tsx')
  const webpageTemplate = require.resolve('./src/templates/webpage.tsx')
  const projectTemplate = require.resolve('./src/templates/project.tsx')
  const tagsTemplate = require.resolve('./src/templates/tags.tsx')
 

  const result = await wrapper(
    graphql(`{
      reviews: allReviewsYaml {
        nodes {
          slug
          images
          tags
        }
      }
      services: allServicesYaml {
        nodes {
          slug
          images
          tags
        }
      }
      about: allAboutYaml {
        nodes {
          slug
          images
          tags
        }
      }
      contact: allContactYaml {
        nodes {
          slug
          images
          tags
        }
      }
    allMarkdownRemark  {
        edges {
          node {
            id
            frontmatter {
              slug
              templateKey
              tags
            }
          }
        }
      }
    }
    `))


  let tags = []
  // Iterate through each webpage, putting all found tags into `tags`
  tags.forEach(edge => {
    if (_.get(edge, `node.tags`)) {
      tags = tags.concat(edge.node.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.tsx`),
      context: {
        tag,
      },
    })
  }),
  result.data.reviews.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: reviewsTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
  }),  
  result.data.services.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: serviceTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
  }),
/*   result.data.project.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: projectTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
  }), */
  result.data.contact.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: contactTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
  }),
  result.data.about.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: aboutTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
  }),
  result.data.allMarkdownRemark.edges.forEach(edge => {
    const id = edge.node.id
    createPage({
      path: edge.node.frontmatter.slug,
      tags: edge.node.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })
  
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
