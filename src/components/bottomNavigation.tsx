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
import EmailLink from './EmailLink'
import NavBottom from '../styles/navBottomStyle'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 0,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
      },  
    bottomNavigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: theme.palette.primary.main,
      },
  },

));


export default function BottomNavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root} >
               {/* <CssBaseline />
        <GlobalStyles />  */}
        <Container className={classes.bottomNavigation} backgroundColor={theme.palette.primary.main} alignItems="space-between">
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction  icon={<InstagramLink />} />
      <BottomNavigationAction  icon={<EmailLink />} />
      <BottomNavigationAction icon={<FacebookLink />} /> 
      <BottomNavigationAction  fill={theme.palette.primary.contrastText} icon={<GappsappsIcon />} />

    </BottomNavigation>
    </Container></div>
  );
}
