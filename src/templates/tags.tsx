import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-plugin-theme-ui/index'
import palette from '../gatsby-plugin-theme-ui/palette'
import { Box, Flex, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridArticle from '../components/grid-article'
import GlobalStyles from '../styles/globalStyle'
import CssBaseline from '@material-ui/core/CssBaseline';
import GridItem from '../components/grid-item'


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


const PBox = styled(AnimatedBox)`
  margin: 30 auto;
`



const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, theme.palette.primary.background)};
  

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${props => props.theme.space[10]};

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      margin-bottom: ${props => props.theme.space[8]};
    }
  }
`


const RaisedHeader = styled(Container)`
 
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
  fontSize: 1.5rem ;
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
  background-color: ${theme.palette.primary.background};
  text-align: center;
  margin: -80px 25% 20px 25%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
` 


const Lawns = styled(GridItem)`
  grid-area: lawns;
  color: ${theme.palette.primary.active}; 
  text-transform: lowercase;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[5]};
 `

const Matter = styled(GridItem)`
  grid-area: matter;
  color: ${theme.palette.primary.text}; 
  text-transform: lowercase;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[5]};
 `

const HorizontalImg = styled(Img)`
  grid-area: logo;

`
const Title = styled(GridItem)`
  grid-area: title;
  color: ${theme.palette.primary.active}; 
  text-transform: uppercase;
  font-weight: 400;
  color: ${theme.palette.primary.text}; 
  font-size: ${props => props.theme.fontSizes[1]};

`

const Description = styled(animated.div)`
  
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
  margin: 30px;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 35vw;
  grid-template-areas:
  'article image'   
  'image article'
  'article image'   
  'image article'
  'article image'   
  'image article'  
  ;
}
`


class TagIndex extends React.Component {
  render() {
    
    const tags = this.props.data.allMarkdownRemark.edges
    const tagLinks = tags.map(tag => (
      <li key={tag.node.frontmatter.slug}>
        <Link to={tag.node.frontmatter.slug}>
          <h2 className="is-size-2">{tag.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} article${
      totalCount === 1 ? '' : 's'
    } with information in the category “${tag}”`

    return (
      <div>
        <Layout>
          <CssBaseline />
             <GlobalStyles />
                <section className="section">
                  <Helmet title={`${tag} | ${title}`} />
                  <div className="container content">
                    <div className="columns">
                  
                    
                      </div>
                  </div>
                                  
                </section> 
                <RaisedHeader    style={{
                      display: 'flex',
                      width: '90%' ,
                      lineHeight: '1',
                      justifyContent: 'space-around',
                      alignItems: 'left',
                      flexDirection: 'column',}}>
                          <PageTitle   style={{
                      display: 'flex',
                      width: '70%' ,
                      lineHeight: '1',
                      justifyContent: 'space-around',
                      alignItems: 'left',
                      flexDirection: 'column',}}>
                    <Container><Lawns>lawns</Lawns> <Matter>matter</Matter></Container>

                    <h2>  <Title color={theme.palette.primary.active}>Information {tag}</Title></h2>
                    
                      </PageTitle>
                
 
            <section className="section section--gradient">
              <div >
                {/* <div className="section">
                  <div className="columns">
                    <div className="column is-10 is-offset-1"> */}
                      <div className="content">
                        <div className="columns">
                          <div className="column is-12">
                            <h3 className="has-text-weight-semibold is-size-2">
                              {/* {heading} */}
                            </h3>
                      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
                          </div>
                        </div>
                        <Flex
                      flexWrap="nowrap"
                      flexDirection={['row', 'row', 'row', 'column']}
                      alignItems={['center', 'center', 'center', 'flex-start']}
                      justifyContent="space-between"
                    >
            
                      </Flex>


                        <div className="columns">
                          <div >
                            <Link className="btn" to="/products">
                              See all products
                            </Link>
                          </div>
                        </div>
                        <div className="column is-12">
                          <h3 className="has-text-weight-semibold is-size-2">
                            Latest stories
                          </h3>
                          {/* <BlogIndex /> */}
                          <div className="column is-12 has-text-centered">
                            <Link className="btn" to="/blog">
                              Read more
                            </Link>
                          </div>
                        </div>
                  
                        </div>          
                        </div>          
         
         
                  </section>
               </RaisedHeader>

                <Area>
                  {tags &&
                    tags.map(({ node: tag }) => (

                  <GridArticle key={tag.frontmatter.slug} to={tag.frontmatter.slug} aria-label={`View page "${tag.frontmatter.title}"`}>
                                  <Img fluid={tag.frontmatter.featuredimage.childImageSharp.fluid} />
                      <span>{tag.frontmatter.title}</span>
                    </GridArticle>

                    ))}
                </Area>
        
        </Layout>
      </div>
    )
  }
}

export default TagIndex

export const tagPageQuery = graphql`
query TagRoute($tag: String) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 1000, sort: {fields: [frontmatter___slug], order: DESC}, filter: {frontmatter: {tags: {eq: $tag}}}) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          slug
          featuredimage {
            childImageSharp {
              fluid(quality: 95, maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          featuredimage_alt
        }
        excerpt(pruneLength: 147)
      }
    }
  }
}

`
