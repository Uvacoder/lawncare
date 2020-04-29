import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import LogoLarge from './logoLarge'
import Gappsapps from './gappsapps'
import Container from '@material-ui/core/Container';
import IconButtonBar from './IconButtonBar'
import GlobalStyles from '../styles/globalStyle'
import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import SideBarInner from  '../styles/sideBarInnerStyle'
import Box from '@material-ui/core/Box';

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.primary.main,
    },
    mainSection: {
      marginLeft: theme.sidebar.width.big,
    },
    drawer: {
      width: theme.sidebar.width.big,
      backgroundColor: theme.palette.primary.main,
      position: 'fixed',
      flexShrink: 0,
    },
    drawerPaper: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: "6px 6px 10px 0px rgb(47, 54, 68, 0.4)",
      width: theme.sidebar.width.big,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main,
    },
  }),
);

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)



const Nav = styled(Box)<{ color: string }>`
  a {
    margin-left: 27px;
    padding: 1rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: column;
    text-decoration: none;
    color: ${theme.palette.primary.contrastText};
    font-size: ${theme.typography.h4.fontSize};
    font-weight: ${theme.typography.h4.fontWeight};
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${theme.palette.secondary.main};
    }
  }
`
type PermanentDrawerLeftProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: theme.palette.primary.main,
}

interface QueryResult {
  navigation: {
    nodes: {
      name: string
      link: string
    }[]
  }
}

const PermanentDrawerLeft = ({ children, color }: PermanentDrawerLeftProps) => {
  const classes = useStyles();
  const data: QueryResult = useStaticQuery(query)

  return (
    <div className={classes.root}>

  <GlobalStyles />

    <SideBarInner>

    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
         {/* <div className={classes.toolbar} /> */}
    
        <Link to="/">
        <Container>
            <LogoLarge />
          </Container>
        </Link>
       
        <Nav >
        {data.navigation.nodes.map(item => (
                  <PartialNavLink to={item.link} key={item.name}>
                    {item.name}
                  </PartialNavLink>
                ))}
        </Nav>
          <br />
          <br />
        <Divider />
          
        <IconButtonBar />

            <Divider />
            <br />
        <Nav href="https://www.gappsapps.co.uk" 
        // className={gappsappsLogo} 
        rel="nofollow">
            <ListItem button  aria-label="Link to the developer of this website Gappsapps" >
             <Gappsapps />
            </ListItem></Nav>
           
      </Drawer>
   
      </SideBarInner>

  
    </div>
  );
}

export default PermanentDrawerLeft

PermanentDrawerLeft.defaultProps = defaultProps

const query = graphql`
  query PermanentDrawerLeft {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`