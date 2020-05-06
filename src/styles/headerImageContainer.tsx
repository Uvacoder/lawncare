import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container'

const HeaderImageContainer = styled(Container)`

    [theme.breakpoints.up('md')]:{
      height: ${theme.headerImage.height.desktop};
    };
      [theme.breakpoints.down('sm')]: {
          height: ${theme.headerImage.height.mobile};
      };
  }
`
export default HeaderImageContainer




