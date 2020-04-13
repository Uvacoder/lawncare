
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import reset from './reset'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Wrapper = styled.div`
display: grid;
grid-template-columns: ${theme.sidebar.width.big} 1fr;
[theme.breakpoints.down('md')]: {
  grid-template-columns: 1fr;
}
`

export default Wrapper
