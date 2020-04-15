import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import LogoSmall from './logoSmall'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Grid from '@material-ui/core/Grid'
import SimpleMenu from './SimpleMenu'
import PhoneNo from '../components/phoneNo'
import CallButton from '../components/CallButton'
import { Container } from '@material-ui/core';


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
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      flexDirection: 'row',

    },
    ListItemText: {
      color: theme.palette.primary.contrastText,
    },
    drawerPaper: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
    }, 
    drawer: {
      [theme.breakpoints.up('sm')]: {

        flexShrink: 2,
        color: theme.palette.primary.main,
      },
    },
    LogoSmall: {
      height: '12vw',
    }
  }),
);

export default function ElevateAppBar(props: Props) {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
          <Container

      >
        <AppBar 
          className={classes.drawerPaper}
          backgroundColor={theme.palette.primary.main}
          position="fixed">
          <Toolbar
          backgroundColor={theme.palette.primary.main}
          className={classes.drawer}
          variant="permanent"  
          anchor="top" 
          alignItems="space-between" 
    
     
          >
                
            <Grid container position="relative" justify="center" alignItems="flex-end"  >  
                <Grid item xs={3} display="flex" alignItems="flex-end" justify="center" >
                  <SimpleMenu />
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
        </Container>
  
  
    </div>
  );
}
