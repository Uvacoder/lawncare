import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GappsappsIcon from './gappsappsIcon.tsx'
import FacebookLink from './FacebookLink'
import InstagramLink from './InstagramLink'
import NavBottom from '../styles/navBottomStyle'
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from '../styles/globalStyle'
import theme from '../gatsby-plugin-theme-ui/index'
import palette from '../gatsby-plugin-theme-ui/palette'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 0,
        color: palette.palette.primary.text,
        backgroundColor: palette.palette.primary.background,
      },  
    bottomNavigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: palette.palette.primary.background,
      },
    }
));


export default function BottomNavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root} >
               <CssBaseline />
        <GlobalStyles /> 
        <Container className={classes.bottomNavigation} backgroundColor={palette.palette.primary.background} alignItems="space-between">
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}


    >
      <BottomNavigationAction  icon={<InstagramLink />} />
      <BottomNavigationAction  icon={<FacebookLink />} /> 
      <BottomNavigationAction  icon={<GappsappsIcon />} />

    </BottomNavigation>
    </Container></div>
  );
}
