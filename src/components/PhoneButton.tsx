
import React from 'react'
import Container from '@material-ui/core/Container'
import PhoneLink from './phoneLink'
import Button from '@material-ui/core/Button'
import theme from '../gatsby-theme-material-ui-top-layout/theme'



export default function PhoneButton() {

    return (
<div><Container style={{display: theme.iconButtonBar.display, flexDirection: theme.iconButtonBar.flexDirection }}>

<Button><PhoneLink /></Button>

</Container></div>
    )}
