import React from 'react'
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const LogoLarge = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: {regex: "/logo512/"}) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Img  fluid={data.file.childImageSharp.fluid}></Img>}
  ></StaticQuery>
)

export default LogoLarge
