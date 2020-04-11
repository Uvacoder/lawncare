import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import 'typeface-work-sans'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import reset from '../styles/reset'
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

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.sidebarWidth.big} 1fr;
 [theme.breakpoints.down(‘lg')]: {
    grid-template-columns: ${props => props.theme.sidebarWidth.normal} 1fr;
  }
  [theme.breakpoints.down(‘md')]:{
    grid-template-columns: 1fr;
  }
`

const SideBarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${theme.sidebar.width.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${theme.palette.primary.main};
 [theme.breakpoints.down(‘lg')]: {
    width: ${theme.sidebar.width.big};
  }
  [theme.breakpoints.down(‘md')]:{
    position: relative;
    width: 100%;
  }
  svg {
    fill: ${props => readableColor(`${theme.palette.primary.main}`)};
  }
`

const Nav = styled(Flex)<{ color: string }>`
  a {
    text-decoration: none;
    color: ${props => readableColor(`${props.color}`)};
    font-size: ${theme.typography.h3.letterSpacing};
    line-height: 1.5;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.primary};
    }
    [theme.breakpoints.down(‘md')]: {
      font-size: ${theme.typography.h4.fontSize};
      margin-left: ${theme.typography.h4.letterSpacing};
    }
   [theme.breakpoints.down(‘sm')]: {
      font-size: ${theme.typography.h5.fontSize};
      margin-left: ${theme.typography.h5.letterSpacing};
    }
    [theme.breakpoints.down(‘xs')]: {
      font-size: ${theme.typography.h6.fontSize};
      margin-left: ${theme.typography.h6.letterSpacing};
    }
  }
`

const Main = styled.main`
background-color: ${theme.palette.primary.main};

[theme.breakpoints.down('md')]: {
  grid-template-columns: ${theme.sidebar.width.big} 1fr 1fr 1fr 1fr;
  grid-column-start: 2;
}
`



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
     <SideBarInner>
          <PermanentDrawerLeft />
          </SideBarInner>
          <div
        style={{
          display: 'flex',
          width: '40vw',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'row',
        }}
      />
          <Container position="relative">
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
