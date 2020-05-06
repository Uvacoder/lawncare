import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import RatingIndex from '../components/RatingIndex'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import GlobalStyles from '../styles/globalStyle'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Description from  '../styles/descriptionStyle'
import Container from '@material-ui/core/Container'
import HeaderImage from '../components/HeaderImage'

export const RatingsPageTemplate = ({
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
     <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={featuredimage.childImageSharp.fluid} />
        <Container>
                  <RaisedHeader >
                    <PageTitle>{title}</PageTitle>
                        <Description>
                          <div dangerouslySetInnerHTML={{ __html: html }} />
                          <RatingIndex />  
                        </Description>
                  </RaisedHeader>
        </Container>
      </Content>

  </div>
)

RatingsPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),
}

const RatingsPage = ({ data }) => {

  return (
    <Layout>
      <RatingsPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}

RatingsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
  }),
}

export default RatingsPage

export const pageQuery = graphql`
query RatingsPageTemplate {
   markdownRemark(frontmatter: {category: {eq: "ratings"}}) {
      html
      frontmatter {
      title
   featuredimage {
        childImageSharp {
          fluid(quality:95 maxWidth: 1920)   {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slug
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