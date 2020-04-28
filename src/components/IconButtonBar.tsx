
import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PhoneLink from './phoneLink'
import FacebookLink from './FacebookLink'
import EmailLink from './EmailLink'
import InstagramIcon from '@material-ui/icons/Instagram'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'

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
<Button><FacebookLink /></Button>
<Button><PhoneLink /></Button>
<Button><EmailLink /></Button>
<Button><Link to="/instagram"><InstagramIcon  style={{ color: theme.palette.primary.contrastText }} />Instagram</Link></Button>
</Container></div>
    )}