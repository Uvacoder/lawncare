
import React from "react"
import { Link } from 'gatsby'
import InstagramIcon from '@material-ui/icons/Instagram'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Button from '@material-ui/core/Button'

const InstagramLink = () => (
    <Button >
<Link to="/instagram"><InstagramIcon />Instagram</Link>
</Button>
)

export default InstagramLink
