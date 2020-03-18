import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import LogoLarge from './logoLarge'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import LogoSmall from './logoSmall'
import GlobalStyles from '../styles/globalStyle'
import Button from './CallButton';
import theme from '../gatsby-plugin-theme-ui/index'
import Grid from '@material-ui/core/Grid'
import SimpleMenu from './SimpleMenu'
import PhoneNo from '../components/phoneNo'
import PhoneIcon from '@material-ui/icons/Phone';
import ToolbarStyle from '../styles/toolbarStyle'
import palette from '../gatsby-plugin-theme-ui/palette'
import ButtonBases from '../components/MenuButton'
import Box from '@material-ui/core/Box';
import CallButton from '../components/CallButton'


function ElevationScroll(props: Props) {
  const { children } = props;

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

    },
    ListItemText: {
      color: palette.palette.primary.text,
    },
    drawerPaper: {
      color: palette.palette.primary.background,
      backgroundColor: palette.palette.primary.background,
    }, 
    drawer: {
      [theme.breakpoints.up('sm')]: {

        flexShrink: 2,
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
        
          className={classes.drawer}
          variant="permanent"
          anchor="top"
          
         
         
                alignItems="space-between"
              >
            
        <Grid container 
        position="relative"
              justify="center"
          alignItems="flex-end">  

         
        <Grid item xs={3}
             display="flex"
             alignItems="flex-end"
         
        >
         
                <SimpleMenu/>
           
           </Grid>   
        
          <Grid item xs={6}>
  
            <Link to="/">
              <LogoSmall />
            </Link>
     
            </Grid>     
            <Grid item xs={3} >
        
            <a href={`tel:${<PhoneNo />}`} rel="nofollow">

             <CallButton />
               </a>
            </Grid>   
         <Divider />

        </Grid>
        </Toolbar>
        </AppBar> 
    </div>
  );
}
