import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { readableColor } from 'polished'
import 'typeface-work-sans'
import { Box, Flex, AnimatedBox } from '../elements'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from '../styles/reset'
import {  Responsive } from 'semantic-ui-react'
import {  Menu } from '@material-ui/core'
import Logo from './logo'
import Phone from './phone'
import Email from './email'
import Facebook from './facebook'
import Instagram from './instagram'
import { animated } from 'react-spring'
import NavbarBottom from  './NavbarBottom'
import GlobalStyles from './styles/globalStyle'
import Footer from './styles/footerStyle'
import IconGrid from './styles/iconGridStyle'
import Icon from './styles/iconStyle'
import Main from './styles/mainStyle'
import MyLogo from './styles/myLogoStyle'
import Nav from './styles/navStyle'
import SideBarInner from './styles/sideBarInnerStyle'
import Wrapper from './styles/wrapperStyle'
import PersistentDrawerLeft from './PersistentDrawer'


const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: theme.colors.background,
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
  // const [colorMode, setColorMode] = useColorMode()
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <SideBarInner bg={color} >
            <Flex
          //    flexWrap="nowrap"
              flexDirection={['row', 'row', 'row', 'column']}
              // alignItems={['center', 'center', 'center', 'flex-start']}
            //      alignItems={['basline']}
            //  justifyContent="space-between"  
            >
              <Nav
                color={color}
              //  mt={[0, 0, 5, 5]}
                as="nav"
                // flexWrap="nowrap"
             //   padding="0 2rem"
                flexDirection={['row', 'row', 'row', 'column']}
                alignItems="center"  
              >  

                   </Nav>
              <PersistentDrawerLeft />
             
            </Flex>
             {/* <a href="https://www.gappsapps.co.uk"  ><GappsappsPWA /></a> */}
          </SideBarInner>
          <Main>{children}</Main>
    
          {/* <NavbarBottom  maxWidth={Responsive.onlyTablet.maxWidth}/> */}
        </Wrapper>
      </>
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
