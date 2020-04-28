import React from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from '../styles/globalStyle'
import SocialIconButtonBar from "../components/SocialIconButtonBar"
import Gappsapps from './gappsapps.tsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 0,
        backgroundColor: theme.palette.primary.main,
      },  
    Footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
      ListItemText: {
        color: theme.palette.primary.contrastText,
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

<ListItem button aria-label="Link to developer of this website Gappsapps">
<a href="https://www.gappsapps.co.uk" rel="nofollow">
            <ListItem button >
              <ListItemIcon><Gappsapps /></ListItemIcon>
            </ListItem></a>
            </ListItem>
         
<SocialIconButtonBar />



</Container></div>
    )}