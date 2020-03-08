import React from 'react';
import { Link } from 'gatsby'
// import styled from 'styled-components'
// import { config, animated, useSpring, useTrail } from 'react-spring'
// import clsx from 'clsx';
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoLarge from './logoLarge'
import LogoSmall from './logoSmall'
// import Gappsapps from './gappsapps.tsx'
import GlobalStyles from '../styles/globalStyle'
// import MenuIcon from '@material-ui/icons/Menu';
// import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// import IconButtonBar from './IconButtonBar'
// import SocialIconButtonBar from './SocialIconButtonBar'
// import ContactIconButtonBar from './ContactIconButtonBar'
import theme from '../gatsby-plugin-theme-ui/index'

// import NavigationBar from './navigationBar'
// import ToolbarItem from './toolbar-item'
import Grid from '@material-ui/core/Grid'
// import GridIcon from './gridIcon'
// import EmailLink from './EmailLink'
// import PhoneLink from './phoneLink'
import SimpleMenu from './SimpleMenu'
import PhoneNo from '../components/phoneNo'
import PhoneIcon from '@material-ui/icons/Phone';
import ToolbarStyle from '../styles/ToolbarStyle'
import palette from '../gatsby-plugin-theme-ui/palette'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
      backgroundColor: palette.palette.primary.background,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    },
    ListItemText: {
      color: palette.palette.primary.text,
    },
    drawerPaper: {
      width: ToolbarTop.width,
      color: palette.palette.primary.background,
    }, 
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: ToolbarTop.width,
        flexShrink: 0,
        color: palette.palette.primary.background,
      },
    },
    LogoSmall: {
      height: '18vw',
    }
  }),
);

export default function ToolbarTop() {
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
         
                alignItems="space-between"
              >
            
        <Grid container position="fixed"
          justify="center"
          alignItems="center">  

         
        <Grid item xs={3}>
   
                <Button       
                  variant="outlined"
                  color="white"
                  className={classes.button}
                  startIcon={<SimpleMenu/>}>
                </Button> 
                
           </Grid>   
        
          <Grid item xs={6}>
  
            <Link to="/">
              <LogoSmall />
            </Link>
     
            </Grid>     
            <Grid item xs={3} >
        
            <a href={`tel:${<PhoneNo />}`} rel="nofollow">
              <Button       
                    variant="outlined"
                    color={palette.palette.primary.active}
                    className={classes.button}
                    startIcon={<PhoneIcon alignItems="center" color={palette.palette.primary.active}/>}>
                  Call
                </Button> 
               </a>
           
            </Grid>   
         <Divider />
         {/* <Grid item xs={12}>
           <NavigationBar />
        </Grid>
         */}
        </Grid>
        </Toolbar>
    </div>
  );
}
