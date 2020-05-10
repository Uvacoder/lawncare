import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TreatmentIndex from '../components/TreatmentIndex'
import PageTemplate from '../components/PageTemplate'


export const TreatmentsPage = ({ data }) => {

  return (
    <Layout>
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         >
            <TreatmentIndex />
        </PageTemplate>
    </Layout>
  )
}

TreatmentsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default TreatmentsPage

export const pageQuery = graphql`
query TreatmentsPage ($id: String!) {
  markdownRemark(id: { eq: $id }) {
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