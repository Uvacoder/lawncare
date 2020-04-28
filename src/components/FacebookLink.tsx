import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FacebookIcon from '@material-ui/icons/Facebook'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Button from '@material-ui/core/Button'


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
    render={data => 
      <Button>
        <a href={`https://www.facebook.com/${data.site.siteMetadata.facebook}`} rel="nofollow" >
 <FacebookIcon  style={{ color: theme.palette.primary.contrastText }} />Facebook</a>
 </Button>}
  ></StaticQuery>
)

export default FacebookLink
