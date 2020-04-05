import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from './layout'
import GridItem from './grid-item'
import SEO from './SEO'
import { ChildImageSharp } from '../types'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container' 
import { Box, AnimatedBox } from '../elements'

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
const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${theme.typography.h1.fontSize};
  text-transform: capitalize;
  color: ${theme.palette.secondary.main};
`
const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vw;

  [theme.breakpoints.down('md')]: {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`
const RaisedHeader = styled(Container)`
  padding: 30px 0;
  margin: -100px 10px 140px 10px;
  //box-shadow: 0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2);
  box-shadow: 3px 3px 5px 0px rgb(47, 54, 68, 0.4);
  border-radius: 12px;
  z-index: 3;
  position: relative;
  background-color: ${theme.palette.primary.contrastText};
  color: ${theme.palette.primary.main};
  display: flex
  flexDirection: column
  minWidth: 0;
  wordWrap: break-word;
  transition: all 300ms linear ; 
`

const PageTitle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'lawns matter'
  'title'   ;
  padding: 1rem ;
  background-color: ${theme.palette.primary.main};
  text-align: center;
   margin: 100px 25% 20px 25%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },



` 
const Lawns = styled(GridItem)`
  grid-area: lawns;
  color: ${theme.palette.secondary.main}; 
  text-transform: none;
  font-weight: 400;
  font-size: ${theme.typography.h3.fontSize};
 `

const Matter = styled(GridItem)`
  grid-area: matter;
  color: ${theme.palette.primary.contrastText}; 
  text-transform: none;
  font-weight: 400;
  font-size: ${theme.typography.h3.fontSize};
 `
 const Title = styled(GridItem)`
  grid-area: title;
  color: ${theme.palette.secondary.main}; 
  text-transform: none;
  font-weight: 400;
  color: ${theme.palette.primary.contrastText}; 
  font-size: ${theme.typography.h1.fontSize};

`

class RecommendationIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark

    return (

      <Layout color={theme.palette.primary.main}>
        <SEO title="Lawn Care Service | lawnsmatter.co.uk" />
        <Area>
        {pages &&
          pages.map(({ node: page }) => (

         <GridItem key={page.frontmatter.slug} to={page.frontmatter.slug} aria-label={`View page "${page.frontmatter.title}"`}>
           <Img fluid={page.frontmatter.featuredimage.childImageSharp.fluid} />
           <Container > 
   {/* <RaisedHeader    style={{
        display: 'flex',
        width: '90%' ,
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',}} />
       */}

   <PageTitle   style={{
        display: 'flex',
        width: '50%' ,
        lineHeight: '1',
        position: 'relative',
        bottom: '20px',
        justifyContent: 'flex-end',
        alignItems: 'left',
        flexDirection: 'column',}}>
           <Category color={theme.palette.primary.contrastText}>
          <Lawns>lawn</Lawns> <Matter>care</Matter>
             <br />
            <Title color={theme.palette.secondary.main}>{page.frontmatter.title}</Title>
            </Category>
            </PageTitle>
            </Container>
            {/* </RaisedHeader> */}
          </GridItem>

          ))}
      </Area>
      </Layout>
    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
    query RecommendationIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "recommendation"}}}, sort: {order: ASC, fields: id}) {
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
    }
    `}
    render={(data, count) => <RecommendationIndex data={data} count={count} />}
  />
)
