import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Container from '@material-ui/core/Container'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import HeaderImage from '../components/HeaderImage'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import PropTypes from 'prop-types'
import Description from  '../styles/descriptionStyle'
import ContactUsButton from '../components/ContactUsButton'

export  const PageTemplate = ({  
    featuredimage,
    title,
    slug,
    html, 
  }) =>  (
    <div >
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
          <RaisedHeader   >
            <PageTitle >{title} </PageTitle>
            <Description >
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <ContactUsButton />
            </Description>
          </RaisedHeader> 
          </Container>
      </Content>
    </div>
  )


PageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
}


const Page = ({ data }) => {

  return (
    <Layout>
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default Page

export const query = graphql`
query Page ($id: String!) {
   markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      slug
      title
      templateKey
      categories
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxWidth: 1920)  {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      alt
      featured
    }
    id
  }
  site {
    siteMetadata {
      title
    }
  }
}


`
