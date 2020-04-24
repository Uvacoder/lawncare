
import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PhoneLink from './phoneLink'
import FacebookLink from './FacebookLink'
import EmailLink from './EmailLink'
import InstagramIcon from '@material-ui/icons/Instagram'
import ListItem from '@material-ui/core/ListItem'

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
<ListItem button title="Facebook" ><FacebookLink /></ListItem>
<ListItem button title="Instagram"><Link to="/instagram"><InstagramIcon  style={{ color: theme.palette.primary.contrastText }} /></Link></ListItem>
<ListItem button title="Call us" ><PhoneLink /></ListItem>
<ListItem button title="Email" ><EmailLink /></ListItem>
</Container></div>
    )}