import { graphql } from 'gatsby'




export const gridImageMobile = graphql`
  fragment gridImageMobile on MarkdownRemarkFrontmatter {
    gridmobile:   featuredimage {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300, maxHeight: 300)  {
          GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
 

`


export const gridImageDesktop = graphql`
  fragment gridImageDesktop on MarkdownRemarkFrontmatter {
    griddesktop:  featuredimage {
      childImageSharp {
        fluid(quality: 100, maxWidth: 450, maxHeight: 450) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
 

`


export const bannerImageDesktop = graphql`
  fragment bannerImageDesktop on MarkdownRemarkFrontmatter {
    bannerdesktop:   featuredimage {
      childImageSharp {
        fluid(quality:95 maxHeight: 1080, maxWidth: 1645)  {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export const bannerImageTablet = graphql`
  fragment bannerImageTablet on MarkdownRemarkFrontmatter {
    bannertablet:   featuredimage {
      childImageSharp {
        fluid(quality:95 maxHeight: 720, maxWidth: 1005)  {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`



export const bannerImageSmartphone = graphql`
  fragment bannerImageSmartphone on MarkdownRemarkFrontmatter {
    bannersmartphone:   featuredimage {
      childImageSharp {
        fluid(quality:95 maxHeight: 540, maxWidth: 960){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


export const bannerImageMobile = graphql`
  fragment bannerImageMobile on MarkdownRemarkFrontmatter {
    bannermobile:   featuredimage {
      childImageSharp {
        fluid(quality:95 maxHeight: 337, maxWidth: 600){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`