import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const Main = styled.main`
background-color: ${theme.palette.primary.main};
grid-template-columns: ${theme.sidebar.width.big} 1fr;
grid-column-start: 2;

[theme.breakpoints.down('md')]: {
  grid-template-columns:  1fr;
  grid-column-start: 1;  
}
`

export default Main
