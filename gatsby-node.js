// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions


 // const contactTemplate = require.resolve('./src/templates/contact.tsx')
 // const serviceTemplate = require.resolve('./src/templates/service.tsx')
  // const webpageTemplate = require.resolve('./src/templates/webpage.tsx')
  // const projectTemplate = require.resolve('./src/templates/project.tsx')
  // const categoriesTemplate = require.resolve('./src/templates/categories.tsx')
 

 return graphql(`{
   allMarkdownRemark  {
        edges {
          node {
            id
            frontmatter {
              slug
              templateKey
              categories
              category
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
          categories: edge.node.frontmatter.categories,
          component: path.resolve(
           `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
          ),
          context: {
            category: edge.node.frontmatter.category,
            id,
          },
        })
      })
  
  let categories = []
  // Iterate through each webpage, putting all found categories into `categories`
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.categories`)) {
      categories = categories.concat(edge.node.frontmatter.categories)
    }
  })
  // Eliminate duplicate categories
  categories = _.uniq(categories)

  // Make tag pages
  categories.forEach(tag => {
    const tagPath = `/categories/${_.kebabCase(tag)}/`

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/categories.tsx`),
      context: {
        tag,
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
