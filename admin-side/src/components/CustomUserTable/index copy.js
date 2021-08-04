import {
  Avatar, Box, FormControl, FormControlLabel, IconButton,
  Menu, MenuItem, MenuList, Table,
  TableBody, TableCell,
  TableHead, TableRow, Typography,
  Checkbox
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

const CustomUserTable = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const pathname = window.location.pathname;
  console.log("====> pathname : ", pathname)
  // null for anchor value // or false case
  const [open, setOpen] = useState(null);
  const [selectIndex, setSelectedIndex] = useState(null);
  const [dropMenus, setDropMenus] = useState([]);

  // checkBox            
   const [check, setCheck] = useState([]);

   const handleChecked = (e) => {
     setCheck(e.target.checked)
   }


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
      action: <MoreHorizIcon />
    },
    {_id: "2",
      status: 'Down',
      image: `/assets/images/anwer.jpeg`,
      name: 'anwr',
      email: "anwer@gmail.com",
    },
    {_id: "3",
      status: 'Active',
      image: `/assets/images/asgar.jpeg`,
      name: 'asgar',
      email: "asgar@gmail.com",
    },
    {_id: "1",
      status: 'Pending',
      image: `/assets/images/irfan.jpeg`,
      name: 'irfan',
      email: "irfan@gmail.com",
    },
    {_id: "4",
      status: 'Down',
      image: "/assets/images/mukesh.jpeg",
      name: 'mukesh',
      email: "mukesh@gmail.com",
    }
  ];



  
  //  we have to push checked data into arrayCheck box

   const renderCheckedData = (userTableData) =>{
    const arrayCheckBox = [];
    for( let data of userTableData){
      const isChecked = false;
      arrayCheckBox.push(
        {
          _id: data._id,
          status: data.status,
          image: data.image,
          name: data.name,
          email: data.email,
          isChecked: data.isChecked

      
        }
      );
    }
    return arrayCheckBox;
   }
      

  return (
    <CustomBox
      textLeft="Users"
      onClick={handleOpen}
      pathname={pathname}

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
        <Typography></Typography>
        <TableHead>
          <TableRow >
            {
              userTableCell.map((cell,index) => (
               

                <TableCell key={index}>{index === 0 &&  <Checkbox 
                  onChange={handleChecked}
                  checked={renderCheckedData(check)}
                  
                ></Checkbox> }{cell.label}</TableCell>
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
                  {check ? <Checkbox  onChange={handleChecked}
                  checked={check}></Checkbox> :<Checkbox></Checkbox>}
                   
                    <Typography variant="subtitle1" className={`${classes.status} ${classes[data.status]}`}>
                      {data.status}
                    </Typography>

                  </TableCell>
                  <TableCell align={userTableCell.align}>
                    <div className={classes.imageStyle}>
                      <Avatar alt="Remy Sharp" src={data.image} />
                      <div className={classes.name}>{data.name}</div>
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

export default CustomUserTable