import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import BlogIndex from '../components/BlogIndex'
import PageTemplate from '../components/PageTemplate'


export const IndexPage = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.standardimage.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         >
            <BlogIndex />
        </PageTemplate>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default IndexPage

export const pageQuery = graphql`
query IndexPage {
   markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      html
      frontmatter {
      title
       ...standardImage
      slug
    }
  }
  site {
    siteMetadata {
      serviceName
      title
    }
  }
}


  `