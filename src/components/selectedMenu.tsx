import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import ThemeProvider from './ThemeProvider'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import GlobalStyles from './styles/globalStyle'
import Nav from './styles/navStyle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.primary,
    },
  }),
);

const options = [
  'Menu',
  'Portfolio',
  'Services',
  'About Us'
];

export default function SimpleListMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>

      <List component="nav" aria-label="Device settings">
        
         
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Menu"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Menu" secondary={options[selectedIndex]} />
        </ListItem>
        
      </List>
    
    
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
 
    </div>
  );
}