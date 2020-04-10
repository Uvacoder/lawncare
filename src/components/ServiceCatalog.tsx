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
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-auto-rows: 50vw;
  grid-row-start: 2;

   [theme.breakpoints.down('md')]:  {
    grid-template-columns: 1fr;
    grid-auto-rows: 50vw;
  }
`
class ServiceCatalog extends React.Component {
  render() {

    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark

    return (

      <Layout color={theme.palette.primary.main}>
        <SEO title="Lawn Care Service | lawnsmatter.co.uk" />
        <Area>
        {pages &&
          pages.map(({ node: page }) => (

         <GridLink key={page.frontmatter.slug} to={page.frontmatter.slug} aria-label={`View page "${page.frontmatter.title}"`}>
                        <Img fluid={page.frontmatter.featuredimage.childImageSharp.fluid} />
            <span>{page.frontmatter.title}</span>
          </GridLink>
         
          ))}
      </Area>
      </Layout>
    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
    query ServiceCatalogQuery {
      allMarkdownRemark(filter: {frontmatter: {tags: {eq: "service"}}}, sort: {order: ASC, fields: id}) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            frontmatter {
              slug
              title
              templateKey
              featured
              featuredimage {
                id
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
    }
    
    `}
    render={(data, count) => <ServiceCatalog data={data} count={count} />}
  />
)
