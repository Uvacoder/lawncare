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
import Container from '@material-ui/core/Container' 
import { Box, AnimatedBox } from '../elements'
import RaisedHeader from '../styles/raisedHeaderStyle'
import GridItem from './grid-item'

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

  [theme.breakpoints.down('md')]: {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const PageTitle = styled(Container)`
padding: 1rem ;
display: flex;
background-color: ${theme.palette.primary.main};
color: ${theme.palette.secondary.main}; 
text-align: center;
box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
font-size: ${theme.typography.h5.fontSize};
text-transform: none;
flexDirection: column;
` 

const Title = styled(GridItem)`
  grid-area: title;
  color: ${theme.palette.secondary.main }; 
  text-transform: none;
  color: ${theme.palette.primary.contrastText}; 
  font-size: ${theme.typography.h5.fontSize};

`

class PageIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark

    return (

      <Layout color={theme.palette.primary.main}>
        <SEO title={data.site.siteMetadata.title} />
        <Area>
        {pages &&
          pages.map(({ node: page }) => (
      
         <GridLink key={page.frontmatter.slug} to={page.frontmatter.slug} aria-label={`View page "${page.frontmatter.title}"`}>
           <Img fluid={page.frontmatter.featuredimage.childImageSharp.fluid} />
              <Container > 
                    <PageTitle 
                      // style={{
                      //     lineHeight: '1',
                      //     justifyContent: 'center',
                      //     alignItems: 'left',
                      //     flexDirection: 'row',}}
                          >
                             <Title>{page.frontmatter.title}</Title>
                    </PageTitle>
                
                </Container>
           
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
    query PageIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "page"}, slug: {regex: "/project/"}, featured: {eq: true}}}, sort: {order: ASC, fields: id}) {
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
      site {
        siteMetadata {
          title
         }
      }
    }
    `}
    render={(data, count) => <PageIndex data={data} count={count} />}
  />
)
