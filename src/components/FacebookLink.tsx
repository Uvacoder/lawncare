import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FacebookIcon from '@material-ui/icons/Facebook'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import IconButton from '@material-ui/core/IconButton';

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
      <IconButton aria-label="Facebook">
        <a href={`https://www.facebook.com/${data.site.siteMetadata.facebook}`} rel="nofollow" >
 <FacebookIcon  alt="Facebook" style={{ color: theme.palette.primary.contrastText }} /></a>
 </IconButton>}
  ></StaticQuery>
)

export default FacebookLink
