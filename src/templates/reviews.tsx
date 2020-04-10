import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ReviewIndex from '../components/ReviewIndex'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import { Box, Flex, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import GridItem from '../components/grid-item'
import GlobalStyles from '../styles/globalStyle'
import RaisedHeader from '../styles/raisedHeaderStyle'

const PBox = styled(AnimatedBox)`
  margin: 30 auto;
`
const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, theme.palette.primary.main)};
  

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${theme.typography.spacing};

    [theme.breakpoints.down('lg')]: {
      margin-bottom: ${theme.typography.spacing};
    }
  }
`



const PageTitle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'title'   ;
  padding: 1rem ;
  background-color: ${theme.palette.primary.main};
  text-align: center;
  margin: -80px 15% 20px 15%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
` 

const Title = styled(GridItem)`
  grid-area: title;
  color: ${theme.palette.secondary.main}; 
  text-transform: none;
  font-weight: 400;
  color: ${theme.palette.primary.contrastText}; 
  font-size: ${theme.typography.h3.fontSize};

`

const Description = styled(animated.div)`
  padding: 1.5rem;
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

  [theme.breakpoints.down('md')]: {
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
          !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
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

 <RaisedHeader >
            <PageTitle   style={{
        display: 'flex',
        width: '70%' ,
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',}}>
      <Title color={theme.palette.secondary.main}>{title}</Title>
        
          </PageTitle>
       
 
    <section className="section section--gradient">
      <div >
              <div className="content">
                <div className="columns">
                <Description>
                  <div className="column is-12">
            
                <div dangerouslySetInnerHTML={{ __html: html }} />
              
                </div>
              
                    <ReviewIndex />
                  
                    </Description>
                  </div>



  
       
                
              </div>
      </div>
    </section>
  
    </RaisedHeader>
  
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
            src
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
        }
      }
    }
  }
}


  `