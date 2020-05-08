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
            file(relativePath: {regex: "/logo512/"}) {
              id
              childImageSharp {
                fluid(maxWidth: 512, maxHeight: 512) {
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
