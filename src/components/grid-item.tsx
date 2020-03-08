import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../gatsby-plugin-theme-ui/index'

const GridItem = styled(Link)`
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
    color: white;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    margin: 2rem 1rem;
    right: 0;
    background-color: ${theme.palette.primary.background};
    box-shadow: 0 8px 8px 1px rgba(43,44,62, 0.14), 0 3px 12px 3px rgba(43,44,62, 0.12), 0 4px 5px 3px rgba(43,44,62, 0.2), 0 4px 5px 3px rgba(43,44,62, 0.2);
    text-align: left;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes[3]};
    padding: ${props => props.theme.space[5]};
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      font-size: ${props => props.theme.fontSizes[2]};
      padding: ${props => props.theme.space[4]};
    }
  }
  &:hover {
    > div img {
      transform: scale(1.2);
    }
  }
`

export default GridItem
