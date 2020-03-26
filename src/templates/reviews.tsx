import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Features from '../components/Features'
import Spotlight from '../components/spotlight'
import ReviewIndex from '../components/ReviewIndex'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import SEO from '../components/SEO'
import theme from '../gatsby-plugin-theme-ui/index'
import { Box, Flex, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import GridItem from '../components/grid-item'
import GlobalStyles from '../styles/globalStyle'


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
  margin: -300px 10px 140px 10px;
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
  margin: -80px 25% 20px 25%;
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
  font-size: ${props => props.theme.fontSizes[5]};
 `

const TitlePart2 = styled(GridItem)`
  grid-area: titlepart2;
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
  text-transform: lowercase;
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
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vw;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

export const ReviewsPageTemplate = ({
  featuredimage,
  title,
  heading,
  slug,
  html,
}) => (
  <div>
    <GlobalStyles />
    
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid : featuredimage
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '500px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      />

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
       <Container><TitlePart1>Latest </TitlePart1> 
       <br />
       <TitlePart2>reviews</TitlePart2></Container>

 {/* <h2>  <Title color={theme.palette.primary.active}>{heading}</Title></h2> */}
        
          </PageTitle>
       
 
    <section className="section section--gradient">
      <div >
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {/* {heading} */}
                    </h3>
               <div dangerouslySetInnerHTML={{ __html: html }} />
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
                    {/* <Link className="btn" to="/products">
                      See all products
                    </Link> */}
                  </div>
                </div>
                <div className="column is-12">
       
                  <br />
                
                  <div className="column is-12 has-text-centered">
   
                  </div>
                </div>
              </div>
      </div>
    </section>
    </RaisedHeader>
    <ReviewIndex />
    </div>
  </div>
)

ReviewsPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),
}

const ReviewsPage = ({ data }) => {
  const { indexdata } = data.markdownRemark
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <ReviewsPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        heading={data.markdownRemark.frontmatter.heading}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}

ReviewsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
  }),
}

export default ReviewsPage

export const pageQuery = graphql`
query ReviewsPageTemplate {
   markdownRemark(frontmatter: {templateKey: {eq: "reviews"}}) {
      html
      frontmatter {
      title
      featuredimage {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slug
      heading
    }
  }
allMarkdownRemark (filter: {frontmatter: {templateKey: {eq: "review"}}}, sort: {order: ASC, fields: id}) { 
  edges {
      node {
        excerpt(pruneLength: 400)
        id
        posts:   frontmatter {
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


  `