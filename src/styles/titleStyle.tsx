import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import { Box, AnimatedBox} from '../elements'
import GridItem from '../components/grid-item'

const Title = styled(GridItem)`
grid-area: title;
text-transform: none;
padding: 2rem;
color: ${theme.palette.primary.contrastText}; 
font-size: ${theme.typography.h4.fontSize};
font-weight: ${theme.typography.h4.fontWeight};

`

export default Title
