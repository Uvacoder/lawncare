import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import GridLink from './grid-link'
import { ChildImageSharp } from '../types'
import Area from '../styles/areaStyle'

type TreatmentProps = {
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


class TreatmentIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: treatments } = data.allMarkdownRemark

    return (

      <div>
 
        <Area>
        {treatments &&
          treatments.map(({ node: treatment }) => (

         <GridLink key={treatment.frontmatter.slug} to={treatment.frontmatter.slug} aria-label={`View treatments "${treatment.frontmatter.title}"`}>
                        <Img fluid={treatment.frontmatter.gridimage.childImageSharp.fluid} />
            <span>{treatment.frontmatter.title}</span>
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
    query TreatmentIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "treatments"}}}, sort: {order: ASC, fields: frontmatter___sortorder}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              templateKey
              featured
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
    render={(data, count) => <TreatmentIndex data={data} count={count} />}
  />
)
