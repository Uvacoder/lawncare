
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import palette from '../gatsby-plugin-theme-ui/palette'
import reset from './reset'
import { Box, Flex, AnimatedBox } from '../elements'
import { readableColor } from 'polished'

const ToolbarStyle = styled(Box)<{ bg: string }>`
  flex-direction: row;
  display: flex;  
  flex-wrap: nowrap;
  justify-content: flex-start;
  background-color: ${props => props.palette.palette.primary.background};
  height: ${props => props.theme.toolbar.height.big};
  width: ${props => props.theme.toolbar.width.big};
  

  svg {
    fill: ${props => readableColor(`${props.palette.palette.primary.background}`)};
  }
`
export default ToolbarStyle
