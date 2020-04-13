import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import { Box, AnimatedBox} from '../elements'

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${theme.typography.h5.fontSize};
  text-transform: none;
`

export default Category