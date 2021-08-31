
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import InstagramIcon from '@material-ui/icons/Instagram'
import Button from '@material-ui/core/Button'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const InstagramLink = () => (
    <StaticQuery
      query={graphql`
      {
        site {
          siteMetadata {
            instagram
          }
        }
      }
      `}
      render={data =>
        <Button>
          <a href={`https://www.instagram.com/${data.site.siteMetadata.instagram}`} rel="nofollow" >
   <InstagramIcon style={{ color: theme.palette.primary.contrastText }}/><br />Instagram</a>
   </Button>}
    ></StaticQuery>
  )
  
  export default InstagramLink
  