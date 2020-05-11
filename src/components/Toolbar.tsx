import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Divider, AppBar, Grid, Paper } from '@material-ui/core'
import Logo from './logo'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import SimpleMenu from './SimpleMenu'
import PhoneNo from '../components/phoneNo'
import PhoneLink from './phoneLink'
import Container from '@material-ui/core/Container'


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
      boxShadow: "6px 6px 10px 0px rgb(47, 54, 68, 0.4)",
    }, 
    drawer: {
      [theme.breakpoints.up('sm')]: {

        flexShrink: 2,
        color: theme.palette.primary.main,
      },
    }
  }),
);

export default function ElevateAppBar(props: Props) {
  const classes = useStyles();
 

  return (
 
      <Paper elevation={3} >
   
        <AppBar 
          className={classes.drawerPaper}
          backgroundColor={theme.palette.primary.main}
          position="fixed">

            <Grid container display="flex" flexDirection="row" position="relative"  alignItems="flex-end"   >  
              <Grid item xs />
                  <Grid item xs >
                    <SimpleMenu   />
                  </Grid>   
                  <Grid item xs />
                  <Grid item xs >
                        <Logo />
                  </Grid>     
                  <Grid item xs />
                  <Grid item xs>
                      <PhoneLink />
                  </Grid>   
                  <Grid item xs />

            </Grid>
       
        </AppBar> 
       
  
        </Paper>
 
  );
}
