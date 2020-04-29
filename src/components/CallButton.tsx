import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
      backgroundColor: theme.palette.primary.main,
    },
    button: {
      color: theme.palette.primary.contrastText,
      fontWeight:  theme.typography.h5.fontWeight,
      fontSize: theme.typography.h5.fontSize,
      padding: '1rem',
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
          <Button aria-label="Call us" color="default" size="large" none="false" className={classes.button} padding="1rem"><PhoneIcon />Call</Button>
        </div>
      );
}