// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')


exports.createPages = async ({ graphql, actions, reporter  }) => {
  const { createPage } = actions
  const categoryTemplate = path.resolve("src/templates/category.tsx")
 
  const result = await graphql(`{
   allMarkdownRemark  {
        edges {
          node {
            id
            frontmatter {
              slug
              templateKey
              category
            }
          }
        }
      }
      categoryGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
    `)
    
      // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

      const posts = result.data.allMarkdownRemark.edges
  
      posts.forEach(edge => {
        const id = edge.node.id
        createPage({
          path: edge.node.frontmatter.slug,
          component: path.resolve(
           `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
          ),
          context: {
            id,
          },
        })
      })

  const categories = result.data.categoryGroup.group

   // Make category pages
   categories.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
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
