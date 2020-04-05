import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from './layout'
import GridItem from './grid-item'
import SEO from './SEO'
import { ChildImageSharp } from '../types'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

type PageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          excerpt: string
          id: string
          frontmatter: {
            title: string
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

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vw;

   [theme.breakpoints.down('md')]:  {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`
class SiteInfo extends React.Component {
  render() {

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (

      <Layout color={theme.palette.primary.main}>
        <SEO title="Lawn Care Service | lawnsmatter.co.uk" />
        <Area>
        {posts &&
          posts.map(({ node: post }) => (

         <GridItem key={post.frontmatter.slug} to={post.frontmatter.slug} aria-label={`View our lastest news "${post.frontmatter.title}"`}>
                        <Img fluid={post.frontmatter.featuredimage.childImageSharp.fluid} />
            <span>{post.frontmatter.title}</span>
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
    query SiteInfoQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "siteinfo"}}}, sort: {order: ASC, fields: id}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              templateKey
            }
          }
        }
      }
     file(relativePath: {regex: "/petar-tonchev-c-5-QE5kBYk-unsplash/"}) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    
    `}
    render={(data, count) => <SiteInfo data={data} count={count} />}
  />
)
