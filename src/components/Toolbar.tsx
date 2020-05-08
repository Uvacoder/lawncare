import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Divider from '@material-ui/core/Divider'
// import LogoSmall from './logoSmall'
import LogoLarge from './logoLarge'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Grid from '@material-ui/core/Grid'
import SimpleMenu from './SimpleMenu'
import PhoneNo from '../components/phoneNo'
import PhoneButton from '../components/PhoneButton'
import { Container } from '@material-ui/core'

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
    },
    LogoLarge: {
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

                
            <Grid container position="relative"  alignItems="flex-end"  justifyItems="center" >  
                <Grid item xs={1} /> 
                <Grid item xs={2} >
                  <SimpleMenu />
                </Grid>   
                <Grid item xs={1} /> 
                <Grid item xs={4}>
     
                      <LogoLarge />
      
                </Grid>     
                <Grid item xs={1} /> 
                <Grid item xs={2} >
                  <a href={`tel:${<PhoneNo />}`} rel="nofollow">
                    {/* <CallButton /> */}
                    <PhoneButton />
                  </a>
                </Grid>   
                <Grid item xs={1} /> 
              <Divider />
            </Grid>
          {/* </Toolbar> */}
        </AppBar> 
        </Container>
  
  
    </div>
  );
}
