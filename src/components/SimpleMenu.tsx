import React from 'react'
import { Button, Popover } from '@material-ui/core'
import MenuOptions from '../components/MenuOptions'
import MenuIcon from '@material-ui/icons/Menu'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import MenuStyle from '../styles/menuStyle'

const SimpleMenu = ({ children, color }: SimpleMenuProps) =>  {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

<div>
    <Button  
        size="large" 
        aria-label="Menu" 
        aria-controls="simple-menu" 
        aria-haspopup="true"  
        padding="1rem" 
        onClick={handleClick} 
        style={{ 
            color: theme.palette.secondary.main,
          }} >

      <a><MenuIcon style={{ color: theme.palette.primary.contrastText }} />
      <br />
      Menu</a>
      </Button>
  
      
      <Popover

        anchorEl={anchorEl}
        elevation={5}
        getContentAnchorEl={null}
        MenuListProps = {{
          // padding-top: 0,
          // padding-bottom: 0,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        
      <MenuStyle>
           <MenuOptions />
      </MenuStyle>
       
         
         
      </Popover>

   
</div>
    
  );

   
}

export default SimpleMenu
