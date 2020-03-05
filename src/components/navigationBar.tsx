
import React from 'react';
import { Link } from 'gatsby'
import { makeStyles, useTheme, fade, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';
import palette from '../gatsby-plugin-theme-ui/palette'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import SimpleMenu from './SimpleMenu'
import PhoneLink from './phoneLink'
import HomeIcon from '@material-ui/icons/Home';
import GridIcon from './gridIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    NavigationBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
      ListItemText: {
        color: palette.palette.primary.text,
      }
    }
));

export default function NavigationBar() {
    const classes = useStyles();
    const theme = useTheme();
    return (
<div><Container className={classes.NavigationBar} alignItems="space-between">

<ListItem button >  <Link to="/"><Container  alignItems="center">
          
<HomeIcon /></Container>
          </Link>  </ListItem>
            <ListItem button ><Container alignItems="center" >  <SimpleMenu /></Container></ListItem>
           {/* <Link to="/page">
            <ListItem button >
              <ListItemText >Portfolio</ListItemText>
            </ListItem></Link>

            <Link to="/servicecatalog">
            <ListItem button >
              <ListItemText>Service</ListItemText>
            </ListItem></Link>

            <Link to="/tags/about">
            <ListItem button >
              <ListItemText>About us</ListItemText>
            </ListItem></Link> */}

           
<ListItem button variant="contained" ><Container alignItems="center" >   <ListItemIcon> <PhoneLink /></ListItemIcon></Container></ListItem>


</Container></div>
    )}