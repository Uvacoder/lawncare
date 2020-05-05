
import React from 'react'
import Container from '@material-ui/core/Container'
import DeveloperLink from './developerLink'
import FacebookLink from './FacebookLink'
import EmailLink from './EmailLink'
import Button from '@material-ui/core/Button'
import InstagramLink from './InstagramLink'
import theme from '../gatsby-theme-material-ui-top-layout/theme'



export default function BottomButtonBar() {

    return (
<div><Container style={{display: theme.iconButtonBar.display, flexDirection: theme.iconButtonBar.flexDirection, backgroundColor: theme.palette.primary.main, justifyContent: "center"}}>
<Button><FacebookLink  /></Button>
<Button><InstagramLink  /></Button>
<Button><EmailLink  /></Button>
<Button><DeveloperLink /></Button>
</Container></div>
    )}
