import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import FAQIndex from '../components/FAQIndex'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import { Box, AnimatedBox } from '../elements'
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
  'titlepart1 titlepart2'
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
  color: ${theme.palette.primary.contrastText}; 
  font-size: ${theme.typography.h3.fontSize};

`

const Description = styled(animated.div)`
  padding: ${theme.typography.spacing}; 
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



export const FaqsPageTemplate = ({
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

 <RaisedHeader  >
            <PageTitle   style={{
        display: 'flex',
        width: '70%' ,
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',}}>
       <Container><Title>Frequently Asked Questions</Title></Container>

 {/* <h2>  <Title color={theme.palette.secondary.main}>{heading}</Title></h2> */}
        
          </PageTitle>
       
 
    <section className="section section--gradient">
      <Description>
              <div className="content">
                      <div className="columns">               
                        <div className="column is-12">
                           <div dangerouslySetInnerHTML={{ __html: html }} />
                        </div>
                      </div>

                    <div className="column is-12">
                      <FAQIndex />
                    </div>
              </div>
              </Description>
    </section>
    </RaisedHeader>
 
    </div>
  </div>
)

FaqsPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),
}

const FaqsPage = ({ data }) => {
  const { indexdata } = data.markdownRemark
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <FaqsPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        heading={data.markdownRemark.frontmatter.heading}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}

FaqsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
  }),
}

export default FaqsPage

export const pageQuery = graphql`
query FaqsPageTemplate {
  markdownRemark(frontmatter: {tags: {eq: "FAQ"}}) {
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
  allMarkdownRemark(filter: {frontmatter: {tags: {eq: "faq"}}}, sort: {order: ASC, fields: id}) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        faqs: frontmatter {
          slug
          title
          templateKey
          featured
          featuredimage {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1200) {
                src
              }
            }
          }
        }
      }
    }
  }
  site {
    siteMetadata {
      siteUrl
      serviceName
      contactPoint {
        email
        name
      }
    }
  }
}



  `