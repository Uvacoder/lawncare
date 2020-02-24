
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from './reset'


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.sidebarWidth.big} 1fr;

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
   grid-template-columns: ${props => props.theme.sidebarWidth.normal} 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`

export default Wrapper
