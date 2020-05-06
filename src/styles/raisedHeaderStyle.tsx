import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container'


const RaisedHeader = styled(Container)`
  padding: 30px 0;
  width: 90%;
  margin: -50px 5% 0px 5%;
  box-shadow: 6px 6px 10px 0px rgb(47, 54, 68, 0.4);
  z-index: 3;
  position: relative;
  background-color: ${theme.palette.primary.contrastText};
  color: ${theme.palette.primary.main};
  display: flex
  flexDirection: column
  minWidth: 0;
  wordWrap: break-word;
  transition: all 300ms linear ; 
  lineHeight: 1;
  a {
    transition: all 0.3s ease-in-out;
    color: ${theme.palette.secondary.dark};
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${theme.palette.secondary.dark};
    }
  }
`
export default RaisedHeader