import React from 'react'
import { graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import GridLink from './grid-link'
import SEO from './SEO'
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
            templateKey: string
            featured: boolean
            featuredimage: ChildImageSharp
            }[]
        }
      }
    }
  }
}

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
                        <Img fluid={page.frontmatter.gridimage.childImageSharp.fluid} />
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
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "service"}}}, sort: {order: ASC, fields: frontmatter___sortorder}) {
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
              ...gridImage
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
