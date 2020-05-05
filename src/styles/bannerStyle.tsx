import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Box from '@material-ui/core/Box'

const Banner = styled(Box)`
    width: 100%;
    position: fixed;
    height: ${theme.headerImage.height.desktop};

        [theme.breakpoints.down('lg')]: {
            height: ${theme.headerImage.height.mobile};
        }
    }
`
export default Banner




