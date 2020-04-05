import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const GridArticle = styled(Link)`
  position: relative;
  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > div img {
    transition: all 0.2s ease 0s !important;
  }
  > span {
    z-index: 10;
    position: absolute;
    left: 0;
    bottom: 0;
    maxHeight: 30%;
    width: 60%;
    margin: 15% 10%;
    right: 0;
    background-color: ${theme.palette.primary.main};
    box-shadow: 3px 3px 5px 0px rgb(47, 54, 68, 0.4);
    text-align: left;
    font-size: ${theme.typography.h4.fontSize};
    padding: ${theme.spacing(2)};
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    [theme.breakpoints.down('md')]:{
      font-size: ${theme.typography.h6.fontSize};
      padding: ${theme.typography.spacing};
    }
  }
  &:hover {
    > div img {
      transform: scale(1.2);
    }
  }
`

export default GridArticle
