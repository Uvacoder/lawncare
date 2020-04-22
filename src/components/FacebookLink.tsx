import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FacebookIcon from '@material-ui/icons/Facebook'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

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
    render={data => <a href={`https://www.facebook.com/${data.site.siteMetadata.facebook}`} rel="nofollow" >
 <FacebookIcon  style={{ color: theme.palette.primary.contrastText }} />Link to our Facebook page</a>}
  ></StaticQuery>
)

export default FacebookLink
