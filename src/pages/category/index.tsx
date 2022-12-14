import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from 'gatsby'
import PageTitle from '../styles/pageTitleStyle'
import List from 'styles/listStyle'
import PageTemplate from '../../components/PageTemplate'

const CategoryPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  data, 
  featuredimage,
  slug,
  html,

}) => {


 return (
 <div>
    <Helmet title={title} />
    <PageTemplate featuredimage={standardimage} title={title} slug={slug} html={html} >
      <h1>Categories</h1>
        <List>
          {group.map(category => (
            <List key={catergory.fieldValue}>
                <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
                </Link>
             </List>
          ))}
        </List>      
    </PageTemplate>
</div>
)
}
CategoryPage.propTypes ={
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoryPage

export const pageQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
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
  category:  markdownRemark(frontmatter: {templateKey: {eq: "categories"}}) {
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
