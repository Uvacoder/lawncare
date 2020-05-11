import { graphql } from 'gatsby'



export const gridImage = graphql`
  fragment gridImage on MarkdownRemarkFrontmatter {
    gridimage:  featuredimage {
      childImageSharp {
        fluid(quality: 90 maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }

`



export const standardImage = graphql`
  fragment standardImage on MarkdownRemarkFrontmatter {
    standardimage:   featuredimage {
      childImageSharp {
        fluid(quality: 90 maxHeight: 800 maxWidth: 1200 cropFocus: SOUTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
