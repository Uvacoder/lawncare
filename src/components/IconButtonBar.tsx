
import React from 'react'
import Container from '@material-ui/core/Container'
import PhoneLink from './phoneLink'
import FacebookLink from './FacebookLink'
import EmailLink from './EmailLink'
import Button from '@material-ui/core/Button'
import InstagramLink from './InstagramLink'
import theme from '../gatsby-theme-material-ui-top-layout/theme'



export default function IconButtonBar() {

    return (
<div><Container style={{display: theme.iconButtonBar.display, flexDirection: theme.iconButtonBar.flexDirection }}>
<Button><FacebookLink  /></Button>
<Button><PhoneLink /></Button>
<Button><InstagramLink  /></Button>
<Button><EmailLink  /></Button>
</Container></div>
    )}
