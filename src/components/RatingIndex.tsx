import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from './layout'
import GridLink from './grid-link'
import SEO from './SEO'
import { ChildImageSharp } from '../types'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import List from '../styles/listStyle'

type PageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          excerpt: string
          id: string
          frontmatter: {
            title: string
            location: string
            slug: string
            templateKey: string
            featured: boolean
            featuredimage: ChildImageSharp
            }[]
        }
      }
    }
  }
}


class RatingIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: ratings } = data.allMarkdownRemark

    return (

    
   
        <List>
        {ratings &&
          ratings.map(({ node: rating }) => (

         <Link key={rating.frontmatter.slug} to={rating.frontmatter.slug} aria-label={`View our lastest news "${rating.frontmatter.title}"`}>
         <h6> {rating.excerpt} {rating.frontmatter.title} - {rating.frontmatter.location}</h6>
       
         
          </Link>
         
          ))}
      </List>
      
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query RatingIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "rating"}, featured: {eq: true}}}, sort: {order: ASC, fields: id}) {
        edges {
          node {
            excerpt(pruneLength: 147)
            id
            frontmatter {
              slug
              title
              location
              templateKey
              featured
              featuredimage {
                childImageSharp {
                  fluid(quality: 95, maxWidth: 1200) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
         }
      }
    }
    
    `}
    render={(data, count) => <RatingIndex data={data} count={count} />}
  />
)
