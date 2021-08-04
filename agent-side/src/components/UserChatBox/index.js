import {
  Box, Icon, ListItem, Avatar, ListItemAvatar, Badge,
  ListItemText,
  Grid
} from '@material-ui/core'
import React from 'react';
import CustomDrawerMenu from '../CustomDrawerMenu';
import useStyles from './style';
import { useHistory } from "react-router-dom";
import { pagePaths } from '../../Utils/Constant';
import CustomText from '../CustomText';
/**
* @author
* @function UserChatBox
**/

const UserChatBox = (props) => {
  const classes = useStyles();

  let history = useHistory();
  const loggedInUser = {_id: 'abc'};
  const [currentUser, setCurrentUser] = React.useState({_id: "123", chats: [
    {from : 'abc', to: '123', message: "this is message from logged in user"},
    {from : '123', to: 'abc', message: "this is message from opponent"},
  ]});
  const startChat = (userId) => {
    
  }
  const currentRoute = history.pathname;
  console.log('===> currentRoute: ', currentRoute);



  const menus = [
    {
      index: 0,
      id: '1',
      avatar: '/assets/images/ansari.jpeg',
      text: 'Ansari',
      status: 'online',
      mode: 'typing...',
    },

    {
      index: 1,
      id: '2',
      avatar: '/assets/images/anwer.jpeg',
      text: 'Mukesh',
      status: 'offline',
      mode: '',
      link: '',
      notification: 11
    },
    {
      index: 2,
      avatar: '/assets/images/irfan.jpeg',
      text: 'Mukesh',
      status: 'offline',
      mode: '',
      link: '',
      notification: ''
    },

    {
      index: 3,
      id: '3',
      avatar: '/assets/images/asgar.jpeg',
      text: 'Asgar',
      status: 'online',
      mode: 'typing...',
      link: '',
      notification: ''
    },
    {
      index: 4,
      avatar: '/assets/images/mukesh.jpeg',
      text: 'Pinki',
      status: 'online',
      mode: '',
      link: '',
      notification: 20
    },
    {
      index: 5,
      avatar: '/assets/images/asgar.jpeg',
      text: 'Sammeer',
      status: 'online',
      mode: 'typing',
      link: '',
      notification: ''
    },
    {
      index: 6,
      avatar: '/assets/logo/ansari.jpeg',
      text: 'AKM',
      status: 'offline',
      mode: '',
      link: '',
      notification: ''
    },

  ];

  const renderMenus = () => {
    return menus.map((obj) => (
      <ListItem
        button
        key={obj.index}
        onClick={() => startChat(obj.id)}
        activeClassName={obj.link === currentRoute ? classes.active : ''}
        className={classes.listItem}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={obj.avatar} className={classes.avatar} />
          {obj.status && obj.status === "online" && <Badge variant="dot" color="secondary" className={classes.badgeDot}></Badge>}

        </ListItemAvatar>

        <ListItemText secondary={obj.status} className={classes.listText} primary={obj.text} />

        <div className={classes.typing}>
          {obj.mode}
        </div>
        {(obj.notification && obj.notification !== 0) ? <Badge badgeContent={obj.notification} color="primary" className={classes.badgeStyle} ></Badge> : null}
      </ListItem>
    ));
  };

  const renderChat = (obj) => {
    return <Box className={obj && obj.from === loggedInUser._id ? classes.rightAlign : classes.leftAlign}>
      <div style={{ padding: "0px 20px", }}>
        <CustomText
          text=" Pinki,10:30"
          textStyle={classes.msgTime}
        />
        <CustomText
          text={obj.message}
          textStyle={classes.msg}
        />
      </div>
    </Box>
  }

  return (
    <Box className={classes.root}>
      <Grid container className={classes.chatBox}>
        <Grid item lg={3} md={3} sm={3} xs={12}>
          {renderMenus()}
        </Grid>
        <Grid item lg={9} md={9} sm={9} xs={12}>
          { currentUser && currentUser.chats.map(obj => {
            return renderChat(obj)
          })}
        </Grid>
      </Grid>
    </Box>
  )

}

export default UserChatBox