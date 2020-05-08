import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import { graphql, Link, useStaticQuery } from 'gatsby'
import GlobalStyles from '../styles/globalStyle'
import styled from 'styled-components'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    color: theme.palette.primary.contrastText,
    fontWeight:  theme.typography.h5.fontWeight,
    fontSize: theme.typography.h5.fontSize,
    padding: '1rem',
  },
  mainSection: {
    marginLeft: theme.sidebar.width.big,
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
}),
);

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
<Link getProps={isPartiallyActive} to={to} {...rest}>
  {children}
</Link>
)



const Nav = styled(Box)<{ color: string }>`
a {
  padding: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  text-decoration: none;
  color: ${theme.palette.primary.contrastText};
  font-size: ${theme.typography.h5.fontSize};
  font-weight: ${theme.typography.h5.fontWeight};
  &:hover,
  &:focus,
  &.navlink-active {
    color: ${theme.palette.secondary.main};
  }
}
`
type SimpleMenuProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
color: theme.palette.primary.main,
}

interface QueryResult {
navigation: {
  nodes: {
    name: string
    link: string
  }[]
}
}



const SimpleMenu = ({ children, color }: SimpleMenuProps) =>  {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const data: QueryResult = useStaticQuery(query)
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>

      <GlobalStyles />
      <Nav>
      <div padding="1rem" >
      <Button  
      color="default"
      size="large" 
      aria-label="Menu Button" 
      aria-controls="simple-menu" 
      aria-haspopup="true"  
      padding="1rem" 
      className={classes.button} 
      onClick={handleClick} 
      > 
   <a> Menu</a>
      </Button>
     

      <Menu
        // id="simple-menu"
        anchorEl={anchorEl}
        elevation={0}
        getContentAnchorEl={null}
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
        classes={{
          paper: classes.content,
        }}
      >
                <Nav >
        {data.navigation.nodes.map(item => (
                  <PartialNavLink to={item.link} key={item.name}>
                    {item.name}
                  </PartialNavLink>
                ))}
        </Nav>
      </Menu>
      </div>
      </Nav>
    </div>
  );
}

export default SimpleMenu

SimpleMenu.defaultProps = defaultProps

const query = graphql`
  query SimpleMenu {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`