import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Box from '@material-ui/core/Box'

const Banner = styled(Box)`
 

            [theme.breakpoints.up('md')]:{
            height: ${theme.headerImage.height.desktop};
        };
        [theme.breakpoints.down('sm')]: {
            height: ${theme.headerImage.height.mobile};
        }
    }
`
export default Banner




