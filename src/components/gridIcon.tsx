import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../gatsby-plugin-theme-ui/index'
import {  Box } from '../elements'

const GridIcon = styled(Box)`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.8rem 1.5rem 0.4rem 1.5rem;
  margin: .1rem;
  border: 0 1px solid white;
  border-radius: 5px;
  background-color: ${theme.colors.primary}; 
    
`

export default GridIcon
