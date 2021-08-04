import React, { useState } from 'react'
import {
  AppBar, Toolbar,
  Typography, Avatar, List,
  CssBaseline, Drawer, ListItem, ListItemText,
  Box, Input, FormControl, InputAdornment, IconButton, Badge
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import useStyles from './style';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CustomDrawerMenu from '../CustomDrawerMenu';

import { useHistory } from "react-router-dom";
import { pagePaths } from '../../Utils/Constant';
import CustomSearchBox from '../CustomSearchBox';



/**
* @author
* @function Header
**/

const Header = (props) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles(open);
  
  const history = useHistory();

  return (
    <div className={classes.drawerRoot}>
      <CssBaseline>
        <Drawer className={classes.drawer} open={true} variant="persistent">

          <List disablePadding className={classes.drawerList} >
            <CustomDrawerMenu/>
           <Box className={classes.bottomList}>
             <ListItem className={classes.listItem}
             onClick={() => history.push(pagePaths.refrral)} >
              
               <ListItemText primary="Reffaral"></ListItemText>
             </ListItem >
             <ListItem className={classes.listItem}
              onClick={() => history.push(pagePaths.logout)} >
              
               <ListItemText primary="Logout"></ListItemText>
             </ListItem>
           </Box>

          </List>
          <Box className={classes.drawerContentBox} onClick={() => setOpen(false)}>
          </Box>
        </Drawer>
        
        <AppBar position="fixed" color="inherit" className={classes.root}>
          <Toolbar >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>

            <Avatar
              alt="logo"
              src="/assets/logo/coinbased-logo.svg"
              variant="square"
              className={classes.headerLogo}
            />
            <Box flexGrow={1} />
            <CustomSearchBox 
            placeholder="search cards..."
            />
            <div className={classes.userProfile}>
              <Avatar
                alt="logo"
                src="/assets/images/ansari.jpeg"
                variant="circle"
                className={classes.profileImg}
              />
              <Typography
                display="block"
                variant="body1"
                align="right"
                className={classes.userName}
              >ADMIN</Typography>
              <IconButton edge="start" className={classes.notificationIcon} color="inherit" aria-label="menu">
                <Badge badgeContent={24} color="secondary" className={classes.badgeStyle}>
                  <NotificationsNoneOutlinedIcon  />
                </Badge>

              </IconButton>

            </div>

          </Toolbar>

        </AppBar>

        <main>
          <Toolbar />
        </main>
      </CssBaseline>
    </div>

  )

}

export default Header;