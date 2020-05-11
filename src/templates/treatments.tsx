import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import TreatmentIndex from '../components/TreatmentIndex'
import PageTemplate from '../components/PageTemplate'


export const TreatmentsPage = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.bannerdesktop.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannertablet.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannersmartphone.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannermobile.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         >
            <TreatmentIndex />
        </PageTemplate>
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
      ...bannerImageDesktop
      ...bannerImageTablet
      ...bannerImageSmartphone
      ...bannerImageMobile
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