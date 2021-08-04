import {
  Avatar, Box, FormControl, FormControlLabel, IconButton,
  Menu, MenuItem, MenuList, Table,
  TableBody, TableCell,
  TableHead, TableRow, Typography,
  Checkbox
} from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { NavLink, Link } from "react-router-dom"
import { Nav } from "react-bootstrap";
import LinkButton from '../LinkButton';
import useStyles from './style'
import { pagePaths } from '../../Utils/Constant';
import { useHistory } from 'react-router-dom';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import CustomBox from '../CustomBox';
/**
* @author
* @function CustomUserTable
**/

const CustomUserTable = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const pathname = window.location.pathname;
  console.log("====> pathname : ", pathname)
  // null for anchor value // or false case
  const [open, setOpen] = useState(null);
  const [selectIndex, setSelectedIndex] = useState(null);
  const [dropMenus, setDropMenus] = useState([]);

  // step 1
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false)
  const handleOpen = (e, userId) => {
    generateMenu(userId);
    setOpen(e.currentTarget);
  }
  const handleClose = () => setOpen(false)
  const handleSelect = (index) => {
    setSelectedIndex(index);
    handleClose();
    const selectedMenu = dropMenus[index];
    history.push(selectedMenu.link)
  }

  const generateMenu = (userId) => {
    if (userId) {
      const menus = [{
        name: "Chats",
        link: `/chats/${userId}`,
      }, {
        name: "Report Users",
        link: `/report-user/${userId}`,
      }];
      setDropMenus(menus);

    } else {
      const menus = [{
        name: "Chats",
        link: `/chats`,
      }, {
        name: "Report Users",
        link: `/report-user`,
      }];
      setDropMenus(menus);
    }
  }
  const userTableCell = [
    {
      label: `Account Status`
    },
    {
      label: `User Name`
    }, {
      label: `Email`
    }, {
      label: `Action`
    },
  ];

  const userTableData = [
    {
      _id: "1",
      status: 'Active',
      image: `/assets/images/ansari.jpeg`,
      name: 'jahangeer',
      email: "ansari@gmail.com",
    },
    {
      _id: "2",
      status: 'Down',
      image: `/assets/images/anwer.jpeg`,
      name: 'anwr',
      email: "anwer@gmail.com",
    },
    {
      _id: "3",
      status: 'Active',
      image: `/assets/images/asgar.jpeg`,
      name: 'asgar',
      email: "asgar@gmail.com",
    },
    {
      _id: "4",
      status: 'Pending',
      image: `/assets/images/irfan.jpeg`,
      name: 'irfan',
      email: "irfan@gmail.com",
    },
    {
      _id: "5",
      status: 'Down',
      image: "/assets/images/mukesh.jpeg",
      name: 'mukesh',
      email: "mukesh@gmail.com",
    }
  ];
  //CHECKBOX CONCEPT
  const [selectedUsers, setSelectedUsers] = React.useState([]);
  useEffect(() => {
    setSelectedUsers(userTableData)
  }, []);

  const handleUserCheckbox = (e, user) => {
    const { checked } = e.target;
    const newUsers = selectedUsers.map(u => {
      if (u._id === user._id) {
        u.is_checked = checked;
      }
      return u;
    });
    setSelectedUsers(newUsers)

  }

  const handleCheckAll = (e) => {
    const { checked } = e.target;
    const newUsers = selectedUsers.map(u => {
      u.is_checked = checked;
      return u;
    });
    setSelectedUsers(newUsers)

  }

  //CHECKBOX CONCEPT - END
  return (
    <CustomBox
      textLeft="Users"
      onClick={handleOpen}
      pathname={pathname}

    >

      <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
        {
          dropMenus.map((item, index) => (
            <MenuItem onClick={() => handleSelect(index)} className={classes.menuItem}>{item.name}</MenuItem>
          ))
        }
      </Menu>

      <Table>
        <TableHead>
          <TableRow >
            {
              userTableCell.map((cell, index) => (
                <TableCell key={index}>{index === 0 && <Checkbox onChange={handleCheckAll}></Checkbox>}{cell.label}

                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            selectedUsers.map((data, index) => {
              return (
                <TableRow key={index}>

                  <TableCell align={userTableCell.align} style={{ display: 'flex', alignItems: 'center' }}>
                    {<Checkbox onChange={(e) => { handleUserCheckbox(e, data) }} checked={data.is_checked ? true : false}></Checkbox>}
                    <Typography variant="subtitle1" className={`${classes.status} ${classes[data.status]}`}>
                      {data.status}
                    </Typography>

                  </TableCell>
                  <TableCell align={userTableCell.align}>
                    <Nav>
                      <NavLink to={pagePaths.userProfile} className={classes.navLinkStyle}>
                        <div className={classes.imageStyle}>
                          <Avatar alt="Remy Sharp" src={data.image} />
                          <div className={classes.name}>{data.name}</div>
                        </div>

                      </NavLink>

                    </Nav>
                  </TableCell>


                  <TableCell align={userTableCell.align}>
                    <Nav>
                      <NavLink to={pagePaths.userProfile} className={classes.navLinkStyle}>
                      {data.email}

                      </NavLink>

                    </Nav>
                  </TableCell>
                  
                  <TableCell align={userTableCell.align}>
                    {data.email}
                  </TableCell>
                  <TableCell align={userTableCell.align}>

                    <Typography>{data.is_checked ? <div style={{ display: 'flex' }}>
                      <DeleteOutlinedIcon />
                      <EditOutlinedIcon className={classes.editBtn} />
                    </div> : <MoreHorizIcon onClick={(e) => handleOpen(e, data._id)} />}</Typography>
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>

      <div className={classes.viewMoreBtn} >
        <LinkButton
          text="View More"
          linkStyle={""}
          link=""

        />

      </div>
    </CustomBox>
  )

}

export default CustomUserTable