import React from 'react'
import 'typeface-work-sans'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet';
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

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

     <div>
        <GlobalStyles />
        <Hidden mdUp>
         <ToolbarTop  bg={theme.palette.primary.main} />
         <Hidden mdUp >
                  <Hidden xsDown>
                  <div style={{ height: theme.logo.size.sm  }} />
                  </Hidden>    
                  </Hidden>    
                  <Hidden smUp>
                  <div style={{ height: theme.logo.size.xs  }} />
                  </Hidden>    
      
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
 
    </div>
    </div>
  );
}



Layout.propTypes = {
  children: PropTypes.node,
};

