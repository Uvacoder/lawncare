import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DeveloperLink from './developerLink'
import FacebookLink from './FacebookLink'
import InstagramLink from './InstagramLink'
import EmailLink from './EmailLink'
import NavBottom from '../styles/navBottomStyle'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

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

    <BottomNavigation
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      // showLabels
      // className={classes.root}
    >
     <Container className={classes.bottomNavigation}  alignItems="space-between">
    
      <BottomNavigationAction  icon={<InstagramLink />} />
      <BottomNavigationAction  icon={<EmailLink />} />
      <BottomNavigationAction icon={<FacebookLink />} /> 
      <BottomNavigationAction  icon={<DeveloperLink />} />
      </Container>

   </BottomNavigation>  
  

  );
}
