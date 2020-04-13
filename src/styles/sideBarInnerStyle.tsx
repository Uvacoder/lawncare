
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import reset from './reset'
import { Box, Flex, AnimatedBox } from '../elements'
import { readableColor } from 'polished'


const SideBarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${theme.sidebar.width.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background: ${theme.palette.primary.main};
  [theme.breakpoints.down('md')]: {
    position: relative;
    width: 100%;
  }
  svg {
    fill: ${props => readableColor(`${theme.palette.primary.main}`)};
  }
`

export default SideBarInner