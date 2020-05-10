import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Box from '@material-ui/core/Box'

const Category = styled(Box)`
  letter-spacing: 0.05em;
  font-size: ${theme.typography.h5.fontSize};
  text-transform: none;
`

export default Category