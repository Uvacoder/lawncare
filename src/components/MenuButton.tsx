
import React from 'react'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

export default function MenuButton() {

    return (
<div><Container style={{display: theme.iconButtonBar.display, flexDirection: theme.iconButtonBar.flexDirection }}>
<Button><MenuIcon /></Button>
</Container>
</div>
    )}
