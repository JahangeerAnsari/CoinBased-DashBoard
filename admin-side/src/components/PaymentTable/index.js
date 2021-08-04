import {
    Avatar, Box, IconButton,
    Menu, MenuItem, MenuList, Table,
    TableBody, TableCell,
    TableHead, TableRow, Typography
  } from '@material-ui/core'
  import React, { useState } from 'react';
  import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
  import LinkButton from '../LinkButton';
  import useStyles from './style'
  import { pagePaths } from '../../Utils/Constant';
  import { useHistory } from 'react-router-dom';
  
  import CustomBox from '../CustomBox';
  /**
  * @author
  * @function CustomUserTable
  **/
  
  const PaymentTable = (props) => {
    const classes = useStyles();
    const history = useHistory();
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
        label: `Payment Status`
      },
      {
        label: `User/Agent`
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
        userType:'agent'
      },
      {_id: "2",
        status: 'Down',
        image: `/assets/images/anwer.jpeg`,
        name: 'anwr',
        email: "anwer@gmail.com",
        userType:'user'

      },
      {_id: "3",
        status: 'Active',
        image: `/assets/images/asgar.jpeg`,
        name: 'asgar',
        email: "asgar@gmail.com",
        userType:'agent'
      },
      {_id: "1",
        status: 'Pending',
        image: `/assets/images/irfan.jpeg`,
        name: 'irfan',
        email: "irfan@gmail.com",
        userType:'user'
      },
      {_id: "4",
        status: 'Down',
        image: "/assets/images/mukesh.jpeg",
        name: 'mukesh',
        email: "mukesh@gmail.com",
        userType:'agent'
      }
    ]
    return (
      <CustomBox
        textLeft="Agent"
        onClick={handleOpen}
      >
  
  
        <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
          {
            dropMenus.map((item, index) => (
              <MenuItem  onClick={() => handleSelect(index)} className={classes.menuItem}>{item.name}</MenuItem>
            ))
          }
        </Menu>
  
        {/* table User*/}
  
        <Table>
          <TableHead>
            <TableRow>
              {
                userTableCell.map(cell => (
                  <TableCell>{cell.label}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              userTableData.map((data, index) => {
                
                return (
                  <TableRow key={index}>
                    <TableCell align={userTableCell.align}>
                      <Typography variant="subtitle1" className={`${classes.status} ${classes[data.status]}`}>
                        {data.status}
                      </Typography>
  
                    </TableCell>
                    <TableCell align={userTableCell.align}>
                      <div className={classes.imageStyle}>
                        <Avatar alt="Remy Sharp" src={data.image} />
                        <div className={classes.name}>{data.name}
                        <div className={classes.userType}> {data.userType}</div>
                        </div>
                          
                      </div>
                    </TableCell>
                    <TableCell align={userTableCell.align}>
                      {data.email}
                    </TableCell>
                    <TableCell align={userTableCell.align} onClick={(e) => handleOpen(e, data._id)}>
                      <MoreHorizIcon />
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
  
  export default PaymentTable