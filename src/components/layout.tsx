import React from 'react'
import 'typeface-work-sans'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import GlobalStyles from '../styles/globalStyle'
import PermanentDrawerLeft from './PermanentDrawer'
import ToolbarTop from './Toolbar'
import Hidden from '@material-ui/core/Hidden'
import { Container } from '@material-ui/core'
import BottomButtonBar from './bottomButtonBar'
import {ThemeProvider}  from '@material-ui/core/styles'
import SideBarInner from '../styles/sideBarInnerStyle'
import Main from '../styles/mainStyle'

const Layout = ({ children, color }: LayoutProps) => {
  return (
   
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Hidden mdUp>
         <ToolbarTop  bg={theme.palette.primary.main} />
         <div style={{ height: '27vw',  }} />
         <Main>{children}</Main>
         <BottomButtonBar  bg={theme.palette.primary.main}   />
        </Hidden>

        <Hidden smDown>
        <div style={{width: theme.sidebar.width.main }}>
         <SideBarInner>
            <PermanentDrawerLeft />
          </SideBarInner>
        <Container position="relative" style={{marginLeft: theme.sidebar.width.big }}>
          
           <Main>{children}</Main>

          </Container>
          </div>    
          </Hidden>
 
    </ThemeProvider>
  )
}



export default Layout

