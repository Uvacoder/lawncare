import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const GridLink = styled(Link)`
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
    right: 0;
    background-color: ${theme.palette.primary.main80opacity};
    color: ${theme.palette.primary.contrastText};
    font-weight: ${theme.typography.h5.fontWeight};
    text-align: left;
    font-size: ${theme.typography.h5.fontSize};
    padding: 0.5rem;
    text-transform: none;
   
    [theme.breakpoints.down('md')]: {
      font-size: ${theme.typography.h6.fontSize};
    }
  }
  &:hover {
    > div img {
      transform: scale(1.2);
    }
  }
`

export default GridLink
