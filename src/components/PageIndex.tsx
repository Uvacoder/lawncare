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
import theme from '../gatsby-plugin-theme-ui/index'
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
            menu: string
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
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: capitalize;
  color: ${theme.palette.primary.active};
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
  background-color: ${theme.palette.primary.text};
  color: ${theme.palette.primary.background};
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
  'titlepart1 titlepart2'
  'title'   ;
  padding: 1rem ;
  background-color: ${theme.palette.primary.background};
  text-align: center;
   margin: 100px 25% 20px 25%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },



` 
const TitlePart1 = styled(GridItem)`
  grid-area: titlepart1;
  color: ${theme.palette.primary.active}; 
  text-transform: lowercase;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[3]};
 `

const TitlePart2 = styled(GridItem)`
  grid-area: titlepart2;
  color: ${theme.palette.primary.text}; 
  text-transform: lowercase;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[3]};
 `
 const Title = styled(GridItem)`
  grid-area: title;
  color: ${theme.palette.primary.active}; 
  text-transform: uppercase;
  font-weight: 400;
  color: ${theme.palette.primary.text}; 
  font-size: ${props => props.theme.fontSizes[1]};

`

class PageIndex extends React.Component {
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
           <Category color={theme.palette.primary.text}>
          <TitlePart1>lawn</TitlePart1> <TitlePart2>care</TitlePart2>
             <br />
            <Title color={theme.palette.primary.active}>{page.frontmatter.title}</Title>
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
    query PageIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "page"}, menu: {eq: "project"}}}, sort: {order: ASC, fields: id}) {
        edges {
          node {
           excerpt(pruneLength: 400)
            id
            frontmatter {
              slug
              title
              menu
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
    render={(data, count) => <PageIndex data={data} count={count} />}
  />
)
