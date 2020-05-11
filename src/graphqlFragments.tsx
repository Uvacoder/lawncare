import { graphql } from 'gatsby'



export const gridImage = graphql`
  fragment gridImage on MarkdownRemarkFrontmatter {
    gridimage:  featuredimage {
      childImageSharp {
        fluid( maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
 

`


export const bannerImage = graphql`
  fragment bannerImage on MarkdownRemarkFrontmatter {
    bannerimage:   featuredimage {
      childImageSharp {
        fluid( maxWidth: 800)  {
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
        fluid( maxHeight: 600 maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
