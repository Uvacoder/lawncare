import React from 'react'
import { graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated } from 'react-spring'
import GridLink from './grid-link'
import SEO from './SEO'
import { ChildImageSharp } from '../types'


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
  grid-auto-rows: 35vw;

 [theme.breakpoints.down('md')]: {
    grid-template-columns: 1fr;
    grid-auto-rows: 25vw;
  }
`

class ServiceCatalog extends React.Component {
  render() {

    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark

    return (

      <div>
      <SEO
        title={data.site.siteMetadata.title}
          />
        <Area>
        {pages &&
          pages.map(({ node: page }) => (

         <GridLink key={page.frontmatter.slug} to={page.frontmatter.slug} aria-label={`View page "${page.frontmatter.title}"`}>
                        <Img fluid={page.frontmatter.featuredimage.childImageSharp.fluid} />
            <span>{page.frontmatter.title}</span>
          </GridLink>
         
          ))}
      </Area>
      </div>
    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
    query ServiceCatalogQuery {
      allMarkdownRemark(filter: {frontmatter: {categories: {eq: "service"}, category: {ne: "service"}}}, sort: {order: ASC, fields: frontmatter___sortorder}) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              slug
              title
              templateKey
              featured
              sortorder
              featuredimage {
                id
                childImageSharp {
                  fluid(quality: 100, maxWidth: 450, maxHeight: 450) {
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
    render={(data, count) => <ServiceCatalog data={data} count={count} />}
  />
)
