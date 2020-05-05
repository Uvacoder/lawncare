import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container'

const HeaderImageContainer = styled(Container)`

  height: ${theme.headerImage.height.desktop};

    [theme.breakpoints.down('md')]: {
        height: ${theme.headerImage.height.mobile};
    }
  }
`
export default HeaderImageContainer




