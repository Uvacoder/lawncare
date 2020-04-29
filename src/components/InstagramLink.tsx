
import React from "react"
import { Link } from 'gatsby'
import InstagramIcon from '@material-ui/icons/Instagram'
import Button from '@material-ui/core/Button'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const InstagramLink = () => (
    <Button >
<Link to="/instagram"><InstagramIcon style={{color: theme.palette.primary.contrastText}}/><br />Instagram</Link>
</Button>
)

export default InstagramLink
