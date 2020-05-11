import { graphql } from 'gatsby'



export const gridImage = graphql`
  fragment gridImage on MarkdownRemarkFrontmatter {
    gridimage:  featuredimage {
      childImageSharp {
        fluid(quality: 90 maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
 

`



export const standardImage = graphql`
  fragment standardImage on MarkdownRemarkFrontmatter {
    standardimage:   featuredimage {
      childImageSharp {
        fluid( maxHeight: 600 maxWidth: 900 cropFocus: SOUTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
