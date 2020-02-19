// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const reviewsTemplate = require.resolve('./src/templates/reviews.tsx')
  const contactTemplate = require.resolve('./src/templates/contact.tsx')
 // const serviceTemplate = require.resolve('./src/templates/service.tsx')
  // const webpageTemplate = require.resolve('./src/templates/webpage.tsx')
  // const projectTemplate = require.resolve('./src/templates/project.tsx')
  // const tagsTemplate = require.resolve('./src/templates/tags.tsx')
 

 return graphql(`{
      reviews: allReviewsYaml {
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
    `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
  
      const posts = result.data.allMarkdownRemark.edges
  
      posts.forEach(edge => {
        const id = edge.node.id
        createPage({
          path: edge.node.frontmatter.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
          ),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      })
  
  let tags = []
  // Iterate through each webpage, putting all found tags into `tags`
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
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
  result.data.contact.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: contactTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
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
