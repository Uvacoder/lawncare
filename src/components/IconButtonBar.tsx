
import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';
import PhoneLink from './phoneLink'
import FacebookLink from './FacebookLink'
import EmailLink from './EmailLink'
import InstagramIcon from '@material-ui/icons/Instagram'
import theme from '../gatsby-plugin-theme-ui/index'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButtonBar: {
        display: 'flex',
        flexDirection: 'row',
      },}
));

export default function IconButtonBar() {
    const classes = useStyles();
    const theme = useTheme();
    return (
<div><Container className={classes.iconButtonBar} >
<ListItem button ><FacebookLink /></ListItem>
<ListItem button ><Link to="/instagram"><InstagramIcon /></Link></ListItem>
<ListItem button ><PhoneLink /></ListItem>
<ListItem button ><EmailLink /></ListItem>
</Container></div>
    )}