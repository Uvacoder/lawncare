import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ComponentHeader from '../components/ComponentHeader'
import {AreaServedMap} from '../components/AreaServedMap'

export const MapPage = ({ data }) => {

  return (
      <ComponentHeader
        featuredimage={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         >
            <AreaServedMap />
        </ComponentHeader>
  )
}

MapPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default MapPage

export const pageQuery = graphql`
query MapPage {
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