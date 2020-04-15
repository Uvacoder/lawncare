import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import 'typeface-work-sans'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import GlobalStyles from '../styles/globalStyle'
import PermanentDrawerLeft from './PermanentDrawer'
import ToolbarTop from './Toolbar'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import { Container } from '@material-ui/core'
import { Box, Flex } from '../elements'
import BottomNavigationBar from './bottomNavigation'
import {ThemeProvider}  from '@material-ui/core/styles'
import ToolbarWrapper from '../styles/toolbarWrapperStyle'
import styled from 'styled-components'
import { readableColor } from 'polished'
import Area from '../styles/areaStyle'
import SideBarInner from '../styles/sideBarInnerStyle'
import Main from '../styles/mainStyle'

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)


type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: theme.palette.primary.main,
}

interface QueryResult {
  navigation: {
    nodes: {
      name: string
      link: string
    }[]
  }
}

const Layout = ({ children, color }: LayoutProps) => {
  const data: QueryResult = useStaticQuery(query)
  return (
   
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Hidden mdUp>
         <ToolbarTop  bg={theme.palette.primary.main} />
         <div style={{ height: '40vw',  }} />
         <Main>{children}</Main>
        </Hidden>
        <Hidden smDown>
     
         <SideBarInner>
            <PermanentDrawerLeft />
          </SideBarInner>
      
          <Container position="relative" style={{marginLeft: theme.sidebar.width.big, width: theme.sidebar.width.main }}>
           <Main>{children}</Main>
          </Container>
          </Hidden>
      <Hidden mdUp>
        <BottomNavigationBar  bg={theme.palette.primary.main}  />
      </Hidden>
    </ThemeProvider>
  )
}



export default Layout

Layout.defaultProps = defaultProps

const query = graphql`
  query Layout {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`
