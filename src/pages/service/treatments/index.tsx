import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../../../components/layout'
import SEO from '../../../components/SEO'
import theme from '../../../gatsby-theme-material-ui-top-layout/theme'
import RaisedHeader from '../../../styles/raisedHeaderStyle'
import PageTitle from '../../../styles/pageTitleStyle'
import Content from '../../../styles/contentStyle'
import Description from  '../../../styles/descriptionStyle'
import TreatmentIndex from '../../../components/TreatmentIndex'
import HeaderImage from '../../../components/HeaderImage'

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
          categories: string
          featuredimage: ChildImageSharp
          }
        }
  }


  const TreatmentHeaderPage = ({ data }) => {
   const imageData = data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid
  return (
    <div>
    <Layout color={theme.palette.primary.main}>
      <SEO
        pathname={data.markdownRemark.frontmatter.slug}
        title={data.markdownRemark.frontmatter.title}
        desc={data.markdownRemark.excerpt}
        node={data.markdownRemark.frontmatter.slug}
        banner={imageData}
         />
      <Helmet title={data.markdownRemark.frontmatter.title} />
      <Content bg={theme.palette.primary.main} >
         <HeaderImage backgroundImage={imageData} />
        <RaisedHeader  >
        <PageTitle>{data.markdownRemark.frontmatter.title}</PageTitle>
          <Description >
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
       
            <TreatmentIndex />
           
          </Description>
        </RaisedHeader>
     </Content>
</Layout>
    </div>
  )
}


export default TreatmentHeaderPage

export const query = graphql`query TreatmentHeaderPage {
 
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(frontmatter: {category: {eq: "treatments"}}) {
    excerpt(pruneLength: 400)
    html
    frontmatter {
      slug
      title
      templateKey
      categories
      featuredimage {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
             ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      alt
      featured
    }
    id
  }
}

`
