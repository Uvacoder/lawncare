import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated } from 'react-spring'
import Layout from './layout'
import GridLink from './grid-link'
import SEO from './SEO'
import { ChildImageSharp } from '../types'
import theme from '../gatsby-theme-material-ui-top-layout/theme'


type PageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            slug: string
            templateKey: string
            featured: boolean
            visible: boolean
            featuredimage: ChildImageSharp
            }[]
        }
      }
    }
  }
}


const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-auto-rows: 40vw;

  [theme.breakpoints.down('xl')]: {
    grid-template-columns: 1fr 1fr 1fr;
  }

  [theme.breakpoints.down('lg')]: {
    grid-template-columns: 1fr 1fr;
  }

 [theme.breakpoints.down('md')]: {
    grid-template-columns: 1fr;
    grid-auto-rows: 30vw;
  }
`


class PageIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark

    return (
        <Area>
        {pages &&
          pages.map(({ node: page }) => (
      
         <GridLink key={page.frontmatter.slug} to={page.frontmatter.slug} aria-label={`View page "${page.frontmatter.title}"`}>
           <Img fluid={page.frontmatter.featuredimage.childImageSharp.fluid} />
                             <span>{page.frontmatter.title}</span>
          </GridLink>
          ))}
      </Area>

    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
    query PageIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {categories: {eq: "project"}, visible: {eq: true}}},  sort: {order: ASC, fields: frontmatter___sortorder}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              templateKey
              featured
              visible
              featuredimage {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 450, maxHeight: 450)  {
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
    render={(data) => <PageIndex data={data} />}
  />
)
