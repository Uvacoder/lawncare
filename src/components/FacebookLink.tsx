import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FacebookIcon from '@material-ui/icons/Facebook'

const FacebookLink = () => (
  <StaticQuery
    query={graphql`
    {
      site {
        siteMetadata {
          facebook
        }
      }
    }
    `}
    render={data => <a href={`https://www.facebook.com/${data.site.siteMetadata.facebook}`} rel="nofollow">
 <FacebookIcon /></a>}
  ></StaticQuery>
)

export default FacebookLink
