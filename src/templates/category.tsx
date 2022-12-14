import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import PageTemplate from '../components/PageTemplate'
import CategoryIndex from '../components/CategoryIndex'

export const Categories = ({ data }) => {

  return (
      <PageTemplate
      featuredimage={data.markdownRemark.frontmatter.standardimage.childImageSharp.fluid}
       title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
       >
          
            <CategoryIndex  category={data.markdownRemark.frontmatter.category}/>
            <Link to="/categories">All categories</Link>
      </PageTemplate>
  )
}


Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        alt: PropTypes.string,
        html: PropTypes.markdown,
        featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      }),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___sortorder], order: ASC }
      filter: { frontmatter: { category: { in: [$category] }, visible: {eq: true} } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
            category
          }
        }
      }
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "category"}}) {
      id
      frontmatter {
        ...standardImage
        slug
        title
        alt
      }
      html
    }
  }

  
`
