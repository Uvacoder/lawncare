import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import theme from '../gatsby-theme-material-ui-top-layout/theme'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        height: theme.headerImage.height.desktop,
    },
  }),
);

export default function HeaderContainer() {
  const classes = useStyles();
  return (
    <Container className={classes.container} />
  );
}