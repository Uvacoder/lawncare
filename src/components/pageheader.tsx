import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const PageHeader = styled(Link)`
  position: relative;
  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > backgroundImage {
    transition: all 0.2s ease 0s !important;
  }
  > span {
    z-index: 10;
    color: white;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: left;
    font-weight: 400;
    font-size: ${theme.typography.h4.fontSize};

    [theme.breakpoints.down('lg')]: {
      font-size: ${theme.typography.h3.fontSize};
    }
  }
  &:hover {
    > div img {
      transform: scale(1.2);
    }
  }
`

export default PageHeader
