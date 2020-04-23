import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
      backgroundColor: theme.palette.primary.main,
    },
    button: {
      color: theme.palette.primary.contrastText,
    },
    drawer: {
      display: 'flex',
    },
    drawerPaper: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    }
  }),
);
export default function CallButton() {
      const classes = useStyles();

      return (
            <div padding="1rem" className={classes.root}>
          <IconButton aria-label="Call us" color="default" size="large" none="false" className={classes.button} padding="1rem"><PhoneIcon /> Call</IconButton>
        </div>
      );
}