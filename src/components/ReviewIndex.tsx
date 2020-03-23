import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from './layout'
import GridItem from './grid-item'
import SEO from './SEO'
import { ChildImageSharp } from '../types'
// import { useColorMode } from 'theme-ui'
// import theme from '../../config/theme'
import theme from '../gatsby-plugin-theme-ui/index'
import SiteInfo from './SiteInfo'

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
          }
        }
      }
      site: {
        siteMetadata: {
          aggregateRating: {
            ratingCount: string
            ratingValue: string
            reviewCount: string
            itemReviewed: string
            type: string
          }
          title: string
          siteUrl: string
        }
      }
    }
  }
}
  const Area = styled(animated.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 50vw;
  
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      grid-template-columns: 1fr;
      grid-auto-rows: 60vw;
    }
  `
  class ReviewIndex extends React.Component {
    render() {
  
      const { data } = this.props
      const { edges: reviews } = data.allMarkdownRemark
  
      return (
  
        <Layout color={theme.palette.primary.main}>
          <SEO title={data.site.siteMetadata.title}/>
          <Area>
          {reviews &&
            reviews.map(({ node: review }) => (
  
           <GridItem key={review.frontmatter.slug} to={review.frontmatter.slug} aria-label={`View review "${review.frontmatter.title}"`}>              
              <span>{review.frontmatter.title} {review.frontmatter.loction}</span>
            </GridItem>
           
            ))}
        </Area>
        </Layout>
      )
    }
  }
  
  
  export default () => (
    <StaticQuery
      query={graphql`
      query ReviewIndexQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "review"}}}, sort: {order: ASC, fields: id}) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                slug
                title
                location
                templateKey
                menu
                featured
              }
            }
          }
        }
        site {
          siteMetadata {
            aggregateRating {
              ratingCount
              ratingValue
              reviewCount
              itemReviewed
              type
            }
            title
            siteUrl
          }
        }
      }
      
      
      `}
      render={(data, count) => <ReviewIndex data={data} count={count} />}
    />
  )
  