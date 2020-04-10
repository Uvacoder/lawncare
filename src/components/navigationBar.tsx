
import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import PhoneNo from '../components/phoneNo'
import SimpleMenu from './SimpleMenu'
import PhoneLink from './phoneLink'
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import GridIcon from './gridIcon'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    NavigationBar: {
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

export default function NavigationBar() {
    const classes = useStyles();
    const theme = useTheme();
    return (
<div><Container className={classes.NavigationBar} alignItems="space-between">

<ListItem button >  <Link to="/"><Container  alignItems="center">
<Button       
        variant="contained"
        color="white"
        className={classes.button}
        startIcon={<HomeIcon alignItems="center" />}>
          

</Button>
</Container>
          </Link>  </ListItem>
            <ListItem button ><Container alignItems="center" > <Button       
        variant="outlined"
        color="white"
        className={classes.button}
        startIcon={<SimpleMenu alignItems="center" />}>
          

</Button> </Container></ListItem>

           
<ListItem><Container alignItems="center" ><a href={`tel:${<PhoneNo />}`} rel="nofollow">
  <Button       
        variant="contained"
        color={theme.palette.secondary.main}
        className={classes.button}
        startIcon={<PhoneIcon alignItems="center" padding="1rem" />}>
          Call
          </Button> </a></Container></ListItem>
  
</Container></div>
    )}

