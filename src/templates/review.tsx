import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container'
import HeaderImage from '../components/HeaderImage'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Description from  '../styles/descriptionStyle'
import ContactUsButton from '../components/ContactUsButton'
import ReviewIndex from '../components/ReviewIndex'

type PageProps = {
  data: {
        id: string
        excerpt: string
        html: markdown
        frontmatter: {
          title: string
          templateKey: string
          featured: boolean
          slug: string
          alt: string
          categories: array
          featuredimage: ChildImageSharp
          }
        }
  }


  const ReviewPage = ({ data }) => {
    const imageData = data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid
  return (
    <Layout>
    <div>
      <SEO
        pathname={data.markdownRemark.frontmatter.slug}
        title={`${data.markdownRemark.frontmatter.title} | ${data.site.siteMetadata.siteUrl}`}
        desc={data.markdownRemark.excerpt}
        node={data.markdownRemark.frontmatter.slug}
        banner={imageData}
         />
      <Helmet title={`${data.markdownRemark.frontmatter.title} `} />
      <Content bg={theme.palette.primary.main} >
        <HeaderImage backgroundImage={imageData} />
        <Container>  
          <RaisedHeader  >
              <PageTitle  >{data.markdownRemark.frontmatter.title}</PageTitle>
                <Description >
                <h4><div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /></h4>  
                  <ContactUsButton  />
                  <h4>Read more of our customer reviews...</h4>
              <ReviewIndex />
                </Description>
          </RaisedHeader>
          </Container>  
      </Content>
      
    </div>
    </Layout>
  )
}


export default ReviewPage

export const query = graphql`
query ReviewPage ($id: String!) {
   markdownRemark(id: { eq: $id }) {
   excerpt(pruneLength: 400)
    html
    frontmatter {
      slug
      title
      templateKey
      categories
      created_time
      recommendation_type_positive
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxHeight: 1080, maxWidth: 1920)  {
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
