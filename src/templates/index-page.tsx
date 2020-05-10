import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogIndex from '../components/BlogIndex'
import PageTemplate from '../components/PageTemplate'


export const IndexPage = ({ data }) => {

  return (
    <Layout>
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         >
            <BlogIndex />
        </PageTemplate>
    </Layout>
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
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxHeight: 1080, maxWidth: 1645)  {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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