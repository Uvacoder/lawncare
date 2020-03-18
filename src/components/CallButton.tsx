import React from 'react';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from '../styles/globalStyle'
import theme from '../gatsby-plugin-theme-ui/index'
import Nav from '../styles/navStyle'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import palette from '../gatsby-plugin-theme-ui/palette'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
      backgroundColor: palette.palette.primary.background,
    },
    button: {
      color: palette.palette.primary.text,
    },
    drawer: {
      display: 'flex',
    },
    drawerPaper: {
      backgroundColor: palette.palette.primary.background,
      color: palette.palette.primary.main,
    }
  }),
);
export default function CallButton() {
      const classes = useStyles();

      return (
            <div padding="1rem" className={classes.root}>

        <Button  color="default" size="large" none="false" className={classes.button} padding="1rem"><PhoneIcon />Call</Button>
        </div>
      );
}