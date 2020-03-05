import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'
import { config, animated, useSpring, useTrail } from 'react-spring'
import clsx from 'clsx';
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoLarge from './logoLarge'
import LogoSmall from './logoSmall'
import Gappsapps from './gappsapps.tsx'
import GlobalStyles from '../styles/globalStyle'
import palette from '../gatsby-plugin-theme-ui/palette'
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButtonBar from './IconButtonBar'
import SocialIconButtonBar from './SocialIconButtonBar'
import ContactIconButtonBar from './ContactIconButtonBar'
import theme from '../gatsby-plugin-theme-ui/index'
import ToolbarStyle from '../styles/ToolbarStyle'
import NavigationBar from './navigationBar'
import ToolbarItem from './toolbar-item'
import Grid from '@material-ui/core/Grid'
import ToolbarTop from '../styles/ToolbarStyle'
import GridIcon from './gridIcon'
import EmailLink from './EmailLink'
import PhoneLink from './phoneLink'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
      backgroundColor: palette.palette.primary.background,
    },
    drawerPaper: {
      width: ToolbarTop.width,
    }, 
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: ToolbarTop.width,
        flexShrink: 0,
      },
    },
    LogoSmall: {
      height: '20vw',
    }
  }),
);

export default function AutoGrid() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
      <GlobalStyles />
        <Toolbar
          position="static"
          className={classes.drawer}
          variant="permanent"
          anchor="top"
          classes={{
            paper: classes.drawerPaper,
                }}
              >
            
        <Grid container position="fixed">  

         
        <Grid item xs={3} />
        
        
          <Grid item xs={6}>
          <Container >
            <Link to="/"><LogoSmall /></Link>
            </Container> 
            </Grid>     
            <Grid item xs={3} />
         <Divider />
         <Grid item xs={12}><NavigationBar /></Grid></Grid>
        </Toolbar>
    </div>
  );
}
