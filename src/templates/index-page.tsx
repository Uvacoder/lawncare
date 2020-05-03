import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogIndex from '../components/BlogIndex'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import GlobalStyles from '../styles/globalStyle'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Description from  '../styles/descriptionStyle'
import Container from '@material-ui/core/Container'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import HeaderImage from '../components/HeaderImage'

export const IndexPageTemplate = ({
  featuredimage,
  title,
  slug,
  html,
}) => (

  <div>
 
    <GlobalStyles />
    <SEO  pathname={slug}
        title={title}
        node={slug}
        banner={featuredimage}
        organisation
        />
    <Helmet title={title} />
     <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={featuredimage.childImageSharp.fluid} />
        <Container>
            <RaisedHeader >
                        <PageTitle >{title}</PageTitle>
                      <Description>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                        <BlogIndex />
                      </Description>
                </RaisedHeader> 
        </Container>
      </Content>

  </div>

)

IndexPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),

}

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <IndexPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  site: PropTypes.shape({
    siteMetadata: PropTypes.object,
}),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
   markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      html
      frontmatter {
      title
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slug
    }
  }
  site {
    siteMetadata {
      serviceName
      title
    }
  }
}


  `