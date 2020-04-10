import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import 'typeface-work-sans'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import reset from '../styles/reset'
import GlobalStyles from '../styles/globalStyle'
import Main from '../styles/mainStyle'
import Wrapper from '../styles/wrapperStyle'
import PermanentDrawerLeft from './PermanentDrawer'
import ToolbarTop from './Toolbar'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import { Container } from '@material-ui/core'
import Footer from './footer'
import SideBarInner from '../styles/sideBarInnerStyle'
import BottomNavigationBar from './bottomNavigation'
import {ThemeProvider}  from '@material-ui/core/styles'
import ToolbarWrapper from '../styles/toolbarWrapperStyle'
import styled from 'styled-components'


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


const LayoutGrid = styled(Container)`
  display: grid;
  grid-template-columns: ${theme.sidebar.width.big}  1fr;
  grid-template-areas:
  'PermanentDrawerLeft Main';
  [theme.breakpoints.down('sm')]: {
    grid-template-columns: 1fr;
  grid-template-areas:
  'Main';
  },
  
` 


const Layout = ({ children, color }: LayoutProps) => {
  const data: QueryResult = useStaticQuery(query)
  return (
   
    <ThemeProvider theme={theme}>

        <GlobalStyles />
       

        <Hidden mdUp>
         <ToolbarTop  bg={theme.palette.primary.main} />
         <div
        style={{
          display: 'flex',
          height: '40vw',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      />

         <Main>{children}</Main>
        </Hidden>
        <Hidden smDown>
        <LayoutGrid>
          <PermanentDrawerLeft />
          <Main>{children}</Main>
          </LayoutGrid>
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
