
import React from 'react'
import Container from '@material-ui/core/Container'
import PhoneLink from './phoneLink'
import FacebookLink from './FacebookLink'
import EmailLink from './EmailLink'
import InstagramLink from './InstagramLink'
import theme from '../gatsby-theme-material-ui-top-layout/theme'



export default function IconButtonBar() {

    return (
<div><Container style={{display: theme.iconButtonBar.display, flexDirection: theme.iconButtonBar.flexDirection }}>
<FacebookLink  />
<PhoneLink />
<InstagramLink  />
<EmailLink  />
</Container></div>
    )}
