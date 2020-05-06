import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import theme from '../gatsby-theme-material-ui-top-layout/theme'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.down('sm')]: {
        height: theme.headerImage.height.mobile,
      },
      [theme.breakpoints.up('md')]: {
        height: theme.headerImage.height.desktop,
      },
    },
  }),
);

export default function HeaderContainer() {
  const classes = useStyles();
  return (
    <Container className={classes.container} />
  );
}