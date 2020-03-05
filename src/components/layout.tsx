import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import 'typeface-work-sans'
import theme from '../gatsby-plugin-theme-ui/index'
import palette from '../gatsby-plugin-theme-ui/palette'
import reset from '../styles/reset'
import GlobalStyles from '../styles/globalStyle'
import Main from '../styles/mainStyle'
import Wrapper from '../styles/wrapperStyle'
import PermanentDrawerLeft from './PermanentDrawer'
import ToolbarTop from './Toolbar'
import SideBarInner from '../styles/sideBarInnerStyle'
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import { Container } from '@material-ui/core'
import Header from './Header/Header'
import Footer from './footer'

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: palette.palette.primary.background,
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
      <>
        <GlobalStyles />
        <Wrapper>

        <Hidden mdUp>
        <ToolbarTop bg={color} />
    
        </Hidden>
        <Hidden smDown>
        <SideBarInner bg={color} as="aside" p={[6, 6, 8]}>
        <PermanentDrawerLeft bg={color} position='relative' left='275px'/>
        </SideBarInner>
        </Hidden>
          <Main>{children}</Main>
          <Hidden mdUp>
        <Footer bg={color} />
    
        </Hidden>
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
