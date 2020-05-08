import styled from 'styled-components'
import { animated} from 'react-spring'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const MenuStyle = styled(animated.div)`
root: {
    display: flex;
    backgroundColor: ${theme.palette.primary.main};
  };
  button: {
    color: ${theme.palette.primary.contrastText};
    fontWeight:  ${theme.typography.h5.fontWeight};
    fontSize: ${theme.typography.h5.fontSize};
    padding: 1rem;
  };
  mainSection: {
    marginLeft: ${theme.sidebar.width.big};
  };
  drawer: {
    backgroundColor: ${theme.palette.primary.main};
    position: fixed;
    flexShrink: 0;
  };
  content: {
    flexGrow: 1;
    backgroundColor: ${theme.palette.primary.main};
  };
`

export default MenuStyle

