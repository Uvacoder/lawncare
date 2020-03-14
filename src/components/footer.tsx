

import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';
import palette from '../gatsby-plugin-theme-ui/palette'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from '../styles/globalStyle'
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import SimpleMenu from './SimpleMenu'
import PhoneLink from './phoneLink'
import HomeIcon from '@material-ui/icons/Home';
import GridIcon from './gridIcon'
import SocialIconButtonBar from "../components/SocialIconButtonBar"
import Gappsapps from './gappsapps.tsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 0,
        backgroundColor: theme.palette.primary.background,
      },  
    Footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
      ListItemText: {
        color: theme.palette.primary.text,
      }
    }
));

export default function Footer() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
        <CssBaseline />
        <GlobalStyles />
        <Container className={classes.Footer} alignItems="space-between">

<ListItem button >
<a href="https://www.gappsapps.co.uk" rel="nofollow">
            <ListItem button >
              <ListItemIcon><Gappsapps /></ListItemIcon>
            </ListItem></a>
            </ListItem>
         
<SocialIconButtonBar />



</Container></div>
    )}