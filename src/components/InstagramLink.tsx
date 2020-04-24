
import React from "react"
import { Link } from 'gatsby'
import InstagramIcon from '@material-ui/icons/Instagram'
import theme from '../gatsby-theme-material-ui-top-layout/theme'


const InstagramLink = () => (
   
<Link to="/instagram"><InstagramIcon title="Instagram" style={{ color: theme.palette.primary.contrastText }} /></Link>

)

export default InstagramLink
