import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Box from '@material-ui/core/Box'

const PBox = styled(Box)`
  padding: 1rem;
  margin: .1rem;
  align-items: center;
  justify-content: center;

  [theme.breakpoints.down('xl')]:{
    margin: .1rem;
   }

  @media (max-height: ${theme.breakpoints.down('md')}/2 2fr) {
   margin: .5rem;
  }

`

export default PBox
