import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import GridLink from './grid-link'
import { ChildImageSharp } from '../types'
import Area from '../styles/areaStyle'

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
            featured: boolean
            featuredimage: ChildImageSharp
            }[]
        }
      }
    }
  }
}


class PageIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark
    
    return (
        <Area>
        {pages &&
          pages.map(({ node: page }) => (
      
         <GridLink key={page.frontmatter.slug} to={page.frontmatter.slug} aria-label={`View page "${page.frontmatter.title}"`}>
            <Img fluid={page.frontmatter.standardimage.childImageSharp.fluid} />
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
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "page"}, visible: {eq: true}}},  sort: {order: ASC, fields: frontmatter___sortorder}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              templateKey
              featured
              visible
              ...standardImage
            }
          }
        }
      }
    }
    `}
    render={(data) => <PageIndex data={data} />}
  />
)
