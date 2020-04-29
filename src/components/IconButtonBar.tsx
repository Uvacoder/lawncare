
import React from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PhoneLink from './phoneLink'
import FacebookLink from './FacebookLink'
import EmailLink from './EmailLink'
import Button from '@material-ui/core/Button'
import InstagramLink from './InstagramLink'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButtonBar: {
        display: 'flex',
        flexDirection: 'row',
      },
    Button: {
      color: theme.palette.primary.contrastText,
    }}
));

export default function IconButtonBar() {
    const classes = useStyles();
    const theme = useTheme();
    return (
<div><Container className={classes.iconButtonBar} >
<Button><FacebookLink /></Button>
<Button><PhoneLink /></Button>
<Button><InstagramLink /></Button>
<Button><EmailLink /></Button>
</Container></div>
    )}
