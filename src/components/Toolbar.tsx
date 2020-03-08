import React from 'react';
import { Link } from 'gatsby'
// import styled from 'styled-components'
// import { config, animated, useSpring, useTrail } from 'react-spring'
// import clsx from 'clsx';
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoLarge from './logoLarge'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
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

interface Props {

  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


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
      // width: theme.toolbar.width.big,
      color: palette.palette.primary.background,
      backgroundColor: palette.palette.primary.background,
    }, 
    drawer: {
      [theme.breakpoints.up('sm')]: {
        // width: theme.toolbar.width.big ,
        flexShrink: 0,
        color: palette.palette.primary.background,
      },
    },
    LogoSmall: {
      height: '18vw',
    }
  }),
);

export default function ElevateAppBar(props: Props) {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
     
      <CssBaseline />
      <GlobalStyles />
      <AppBar 
        className={classes.drawerPaper}
        backgroundColor={palette.palette.primary.background}
        position="fixed">
        <Toolbar
        backgroundColor={palette.palette.primary.background}
          position="fixed"
          className={classes.drawer}
          variant="permanent"
          anchor="top"
         
         
                alignItems="space-between"
              >
            
        <Grid container position="fixed"
         height="150px"
          justify="center"
          alignItems="center">  

         
        <Grid item xs={3}>
   
                {/* <Button       
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<SimpleMenu/>}>
                </Button>  */}
                <SimpleMenu/>
           </Grid>   
        
          <Grid item xs={6}>
  
            <Link to="/">
              <LogoSmall />
            </Link>
     
            </Grid>     
            <Grid item xs={3} >
        
            <a href={`tel:${<PhoneNo />}`} rel="nofollow">
              <Button       
                    variant="contained"
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
        </AppBar> 
    </div>
  );
}
