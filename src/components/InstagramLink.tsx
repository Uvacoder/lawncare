
import React from "react"
import { Link } from 'gatsby'
import InstagramIcon from '@material-ui/icons/Instagram'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import IconButton from '@material-ui/core/IconButton';

const InstagramLink = () => (
    <IconButton>
<Link to="/instagram" alt="Instagram images" ><InstagramIcon style={{ color: theme.palette.primary.contrastText }} /></Link>
</IconButton>
)

export default InstagramLink
