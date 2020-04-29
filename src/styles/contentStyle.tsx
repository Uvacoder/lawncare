import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import { Box } from '../elements'
import { transparentize } from 'polished'

const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, theme.palette.primary.main)};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${theme.typography.spacing};

    [theme.breakpoints.down('lg')]: {
      margin-bottom: ${theme.typography.spacing};
    }
  }
`
export default Content