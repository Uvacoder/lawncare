
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import reset from './reset'
import { Box, Flex, AnimatedBox } from '../elements'
import { readableColor } from 'polished'



// const SideBarInner = styled(Box)<{ bg: string }>`
//   position: relative;
//   height: ${props => theme.sidebar.height};
//   width: ${props => theme.sidebar.width.big};
//   display: flex;
//   flex-direction: column;
//   flex-wrap: nowrap;
//   justify-content: flex-start;
//   background: ${theme.palette.primary.main};

//   svg {
//     fill: ${props => readableColor(theme.palette.primary.main)};
//   }
// `


const SideBarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${props => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.bg};
  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }
  svg {
    fill: ${props => readableColor(`${props.bg}`)};
  }
`

export default SideBarInner