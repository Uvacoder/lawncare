import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HorizontalLogo = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: {regex: "/lawnsmatterhorizontal/"}) {
          childImageSharp {
            fluid(quality: 95, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data.file.childImageSharp.fluid}
  ></StaticQuery>
)

export default HorizontalLogo