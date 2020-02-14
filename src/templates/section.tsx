import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import theme from '../gatsby-plugin-theme-ui/index'
import SEO from '../components/SEO'

type PageProps = {
  data: {
    section: {
      frontmatter: {
        slug: string
        templateKey: string
        title: string
      }
    }
  }
}

const Section: React.FunctionComponent<PageProps> = ({ data: { section } }) => {
  return (
    <Layout color={theme.colors.primary}>
      <SEO
        pathname={section.frontmatter.slug}
        title={`${section.frontmatter.title} | lawnsmatter.co.uk`}
      />

         <h3>{section.frontmatter.slug}</h3> 
         <h3>{section.frontmatter.title}</h3> 
         <h3>{section.frontmatter.templateKey}</h3> 
  
    </Layout>
  )
}

export default Section

export const query = graphql`
  query SectionTemplate {
    section: markdownRemark(frontmatter: {templateKey: {eq: "section"}}) {
      frontmatter {
        slug
        templateKey
        title
      }
    }
  }
  
`
