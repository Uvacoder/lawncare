import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { readableColor } from 'polished'
import 'typeface-work-sans'
import { Box, Flex, AnimatedBox } from '../elements'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from '../styles/reset'
import Logo from './logo'
import Phone from './phone'
import Email from './email'
import Facebook from './facebook'
import Instagram from './instagram'
import { animated } from 'react-spring'


const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #2B2C3E;
  }
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: ${theme.fontWeights.bold};
    }
    
    h1 {
      font-size: ${theme.fontSizes[6]};
    }
    h2 {
      font-size: ${theme.fontSizes[5]};
    }
    h3 {
      font-size: ${theme.fontSizes[4]};
    }
    h4 {
      font-size: ${theme.fontSizes[3]};
    }
    h5 {
      font-size: ${theme.fontSizes[2]};
    }
    h6 {
      font-size: ${theme.fontSizes[1]};
    }
    
    @media (max-width: 600px) {
      font-size: 16px;
      
      h1 {
        font-size: ${theme.fontSizes[5]};
      }
      h2 {
        font-size: ${theme.fontSizes[4]};
      }
      h3 {
        font-size: ${theme.fontSizes[3]};
      }
      h4 {
        font-size: ${theme.fontSizes[2]};
      }
      h5 {
        font-size: ${theme.fontSizes[1]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }
    }
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Open Sans';
    background: white;
    font-size: 1rem;
  }
  a {
    transition: all 0.3s ease-in-out;
    color: black;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${theme.colors.active};
    }
  }
  g { fill: ${theme.colors.active};
  }


  ${reset}
`

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.sidebarWidth.big} 1fr;

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
   grid-template-columns: ${props => props.theme.sidebarWidth.normal} 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`
const Icon = styled(animated.div)`
height: ${props => props.theme.sidebarWidth.big} 6rem;
margin: 1rem;

@media (max-width: ${props => props.theme.breakpoints[4]}) {
  height: ${props => props.theme.sidebarWidth.normal} 4rem;
  margin: .3rem;
 }

 @media (max-width: ${props => props.theme.breakpoints[2]}) {
  height: 3rem;
  margin: .2rem;

}

`

const IconGrid = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 6rem;
  margin: 1rem;
  height: ${props => props.theme.sidebarWidth.big} 8rem;
  
  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    height: ${props => props.theme.sidebarWidth.normal} 6rem;
   }
  
   @media (max-width: ${props => props.theme.breakpoints[2]}) {
    height: 5.2rem;
  }
  

`

/* 
const IconLine = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr  1fr 1fr 1fr;
  width: 4rem;
  height: ${props => props.theme.sidebarWidth.big} 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    height: ${props => props.theme.sidebarWidth.normal} 6rem;
   }
  
   @media (max-width: ${props => props.theme.breakpoints[2]}) {
    height: 5.2rem;
    grid-template-columns: 1fr  1fr 1fr 1fr;
    grid-template-rows: 1fr ;
    width: 6rem;
  }
  

` */

const MyLogo = styled(animated.div)`

  height: 8rem;
  justify-content: flex-start;

`


const PBox = styled(AnimatedBox)`
  padding: 1rem;
  margin: .1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    margin: .1rem;
   }
 
  @media (max-height: ${props => props.theme.breakpoints[2]}/2 2fr) {
   margin: .5rem;
  }

`


const SideBarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${props => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background: ${props => props.bg};

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
    height: 8rem;
    flex-direction: row;
  }

  svg {
    fill: ${props => readableColor(`${props.bg}`)};
  }
`


const Nav = styled(Flex)<{ color: string }>`
  a {
    text-decoration: none;
    color: ${props => readableColor(`${props.color}`)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 2;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.active};
    }
  
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[2]};
      margin-left: ${props => props.theme.space[4]};
    }

    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      font-size: ${props => props.theme.fontSizes[1]};
      margin-left: ${props => props.theme.space[3]};
    }

    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
    }
  }
` 

const Main = styled.main`
  @media (min-width: calc(${props => props.theme.breakpoints[2]} + 1px)) {
    grid-template-columns: 1fr 1fr  1fr 1fr;
    grid-column-start: 2;
  }
`

const Footer = styled.footer<{ color: string }>`
  position: fixed;
  width: ${props => props.theme.sidebarWidth.big};
  bottom: 0;
 
  background: ${props => props.color};

  color: ${props => readableColor(`${props.color}`, `${props.theme.colors.grey}`, '#c3c3c3')};

  a {
    color: ${props => readableColor(`${props.color}`)};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    height: 6rem;
    width: 100%;
  }
`

type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: theme.colors.background,
}

interface QueryResult {
  navigation: {
    nodes: {
      name: string
      link: string
    }[]
  }
}

const Layout = ({ children, color }: LayoutProps) => {
  const data: QueryResult = useStaticQuery(query)
  // const [colorMode, setColorMode] = useColorMode()
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <SideBarInner bg={color} >
            <Flex
          //    flexWrap="nowrap"
              flexDirection={['row', 'row', 'row', 'column']}
              // alignItems={['center', 'center', 'center', 'flex-start']}
            //      alignItems={['basline']}
            //  justifyContent="space-between"  
            >
              <Nav
                color={color}
              //  mt={[0, 0, 5, 5]}
                as="nav"
                // flexWrap="nowrap"
             //   padding="0 2rem"
                flexDirection={['row', 'row', 'row', 'column']}
                alignItems="center"  
              >  
                <Link to="/" aria-label="Back to Home" >
                  <MyLogo><Logo /></MyLogo>
                </Link>
                {data.navigation.nodes.map(item => (
                  <PartialNavLink to={item.link} key={item.name}>
                    {item.name}
                  </PartialNavLink>
                ))}
           <br />
                  <IconGrid>
                  <Icon>
                    <a href = "mailto: jon@lawnsmatter.co.uk" rel="nofollow"><Email /></a> 
                    </Icon>
                    <Icon>
                   <a href = "tel:01295402447" rel="nofollow"><Phone /></a>
                   </Icon>
                   <Icon>
                   <a href = "https://www.facebook.com/lawnsmatter" rel="nofollow" color="#fffff"><Facebook /></a>
                   </Icon>
                   <Icon><Link to="/instagram"><Instagram /></Link></Icon>
                   </IconGrid>
                 
               </Nav>
            </Flex>
          </SideBarInner>
          <Main>{children}</Main>
          <Footer color={color}>
            <Flex>
            <Box p={[6, 6, 8]} fontSize={0}>
              Website by <a href="https://www.gappsapps.co.uk">gappsapps.co.uk</a>
            </Box>
            </Flex> 
          </Footer>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}



export default Layout

Layout.defaultProps = defaultProps

const query = graphql`
  query Layout {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`
