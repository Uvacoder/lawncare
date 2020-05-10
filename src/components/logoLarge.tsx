import React from 'react'
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import { Container } from '@material-ui/core'


const LogoLarge = () => (
 
 
  <Link to="/">
  <Container>
      <StaticQuery
        query={graphql`
          {
            file(name: {eq: "logo"}) {
              id
              childImageSharp {
                fluid(pngQuality: 100, maxWidth: 275, maxHeight: 275) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => <Img  fluid={data.file.childImageSharp.fluid}></Img>}
      ></StaticQuery>
     </Container>
  </Link>
)

export default LogoLarge
