import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated } from 'react-spring'
import GridLink from './grid-link'
import { ChildImageSharp } from '../types'

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
const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 35vw;

 [theme.breakpoints.down('md')]: {
    grid-template-columns: 1fr;
    grid-auto-rows: 30vw;
  }
`

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
                        <Img fluid={treatment.frontmatter.featuredimage.childImageSharp.fluid} />
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
      allMarkdownRemark(filter: {frontmatter: {categories: {eq: "treatments"}}}, sort: {order: ASC, fields: id}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              templateKey
              featured
              featuredimage {
                id
                childImageSharp {
                  fluid(quality: 100, maxHeight: 450, maxWidth: 450) {
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
    render={(data, count) => <TreatmentIndex data={data} count={count} />}
  />
)
