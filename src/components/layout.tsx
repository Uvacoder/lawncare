import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import 'typeface-work-sans'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from '../styles/reset'
import GlobalStyles from '../styles/globalStyle'
import Main from '../styles/mainStyle'
import Wrapper from '../styles/wrapperStyle'
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
  return (
   
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
        <PersistentDrawerLeft bg={color} />
          <Main>{children}</Main>
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
