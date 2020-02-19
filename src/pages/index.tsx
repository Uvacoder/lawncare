import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'
import theme from '../gatsby-plugin-theme-ui/index'

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
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 35vw;
  grid-template-areas:
  'pages pages pages';
 ;

  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 35vw;

    grid-template-areas:
    'pages pages pages';
;
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 35vw;

    grid-template-areas:
    'pages pages'   ;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 35vw;

    grid-template-areas:
    'pages'  ;
  ;
  }
`


const PageIndex = styled.div`
  grid-area: pages;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 35vw;
  }
`


class Index extends React.Component {
  render() {

    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark

    return (

      <Layout color={theme.colors.primary}>
        <SEO title="Lawn Care Service | lawnsmatter.co.uk" />
        <Area>
        {pages &&
          pages.map(({ node: page }) => (

         <GridItem key={page.frontmatter.slug} to={page.frontmatter.slug} aria-label={`View page "${page.frontmatter.title}"`}>
                        <Img fluid={page.frontmatter.featuredimage.childImageSharp.fluid} />
            <span>{page.frontmatter.title}</span>
          </GridItem>
         
          ))}
      </Area>
      </Layout>
    )
  }
}


export default Index

export const query = graphql`  {
  allMarkdownRemark(sort: {order: ASC, fields: id}, limit: 12, filter: {frontmatter: {featured: {eq: true}}}) {
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
              fluid(quality: 80, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}
`
