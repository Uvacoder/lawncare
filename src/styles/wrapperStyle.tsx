
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
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
