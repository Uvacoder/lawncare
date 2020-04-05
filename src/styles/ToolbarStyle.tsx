
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

import reset from './reset'
import { Box, Flex, AnimatedBox } from '../elements'
import { readableColor } from 'polished'

const ToolbarStyle = styled(Box)<{ bg: string }>`
  flex-direction: row;
  display: flex;  
  flex-wrap: nowrap;
  justify-content: flex-start;
  background-color: ${theme.palette.primary.main};
  height: ${theme.toolbar.height.big};
  width: ${theme.toolbar.width.big};
  

  svg {
    fill: ${props => readableColor(`${props.theme.palette.primary.main}`)};
  }
`
export default ToolbarStyle
