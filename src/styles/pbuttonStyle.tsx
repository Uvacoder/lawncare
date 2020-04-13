import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import { Box, AnimatedBox} from '../elements'

const PButton = styled(Button)<{ color: string }>`
background: ${props => (props.color === 'white' ? 'black' : props.color)};
color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`

export default PButton