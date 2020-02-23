import React from "react"
import { graphql } from "gatsby"

const Logo = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    file(name: {eq: "logo"}) {
      childImageSharp {
        fixed(width: 125) {
          src
        }
      }
    }
  }
`

export default Logo

