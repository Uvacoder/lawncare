import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import palette from '../gatsby-plugin-theme-ui/palette'
import reset from './reset'


const Main = styled.main`
background-color: ${palette.palette.secondary.main};

@media (min-width: calc(${props => props.theme.breakpoints[2]} )) {
  grid-template-columns: ${props => props.theme.sidebar.width.normal} 1fr 1fr  1fr 1fr;
  grid-column-start: 2;
}
`

export default Main
