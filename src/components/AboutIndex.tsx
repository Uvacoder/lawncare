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
            gridimage: ChildImageSharp
            }[]
        }
      }
    }
  }
}


class AboutIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: aboutus } = data.allMarkdownRemark
    
    return (
        <Area>
        {aboutus &&
          aboutus.map(({ node: about }) => (
      
         <GridLink key={about.frontmatter.slug} to={about.frontmatter.slug} aria-label={`View about "${about.frontmatter.title}"`}>
            <Img fluid={about.frontmatter.gridimage.childImageSharp.fluid} />
           <span>{about.frontmatter.title}</span>
          </GridLink>
          ))}
      </Area>

    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
    query AboutIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "about"}, visible: {eq: true}}},  sort: {order: ASC, fields: frontmatter___sortorder}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              templateKey
              featured
              visible
              ...gridImage
            }
          }
        }
      }
    }
    `}
    render={(data) => <AboutIndex data={data} />}
  />
)
