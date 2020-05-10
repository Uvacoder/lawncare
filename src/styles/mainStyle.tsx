import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Box from '@material-ui/core/Box'

const Main = styled(Box)`
background-color: ${theme.palette.primary.light};
grid-template-columns: ${theme.sidebar.width.big}  ${theme.sidebar.width.main} ;
grid-column-start: 2;

[theme.breakpoints.down('md')]: {
  grid-template-columns:  1fr;
  grid-column-start: 1;  
}
`

export default Main
