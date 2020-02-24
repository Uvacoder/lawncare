
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from './reset'

const IconGrid = styled(animated.div)`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
width: 6rem;
margin: 1rem;
height: ${props => props.theme.sidebarWidth.big} 8rem;

@media (max-width: ${props => props.theme.breakpoints[4]}) {
  height: ${props => props.theme.sidebarWidth.normal} 6rem;
 }

 @media (max-width: ${props => props.theme.breakpoints[2]}) {
  height: 5.2rem;
}


`

export default IconGrid
