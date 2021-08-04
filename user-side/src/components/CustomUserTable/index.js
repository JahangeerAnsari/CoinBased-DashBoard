import { Avatar, Box, IconButton, 
  Menu, MenuItem, MenuList, Table,
   TableBody, TableCell, 
   TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LinkButton from '../LinkButton';
import useStyles from './style'
import { pagePaths } from '../../Utils/Constant';
/**
* @author
* @function CustomUserTable
**/

const CustomUserTable = (props) => {
    const classes = useStyles();
    // null for anchor value // or false case
    const[open,setOpen] = useState(null);
    const [selectIndex,setSelectedIndex] =useState(null);
    // step 1
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false)
    const handleOpen = (e) => setOpen(e.currentTarget);
    const handleClose = () => setOpen(false)
    const handleSelect = (index) => {
      setSelectedIndex(index);
      handleClose();
    }
    const dropMenu = ["Chats","Report Users"];

    // userTable data

    const userTableCell = [
        {
          label:`Account Status`
        },
        {
          label:`User Name`
        },{
          label:`Email`
        },{
          label:`Action`
        },
      ];

      const userTableData = [
        {
          status:'Active',
          image:`/assets/images/ansari.jpeg`,
          name:'jahangeer',
          email:"ansari@gmail.com",
          action: <MoreHorizIcon/>
        },
        {
          status:'Down',
          image:`/assets/images/anwer.jpeg`,
          name:'anwr',
          email:"anwer@gmail.com",
          action: <MoreHorizIcon/>
        },
        {
          status:'Active',
          image:`/assets/images/asgar.jpeg`,
          name:'asgar',
          email:"asgar@gmail.com",
          action: <MoreHorizIcon/>
        },
        {
          status:'Pending',
          image:`/assets/images/irfan.jpeg`,
          name:'irfan',
          email:"irfan@gmail.com",
          action: <MoreHorizIcon/>
        },
        {
          status:'Down',
          image:"/assets/images/mukesh.jpeg",
          name:'mukesh',
          email:"mukesh@gmail.com",
          action: <MoreHorizIcon/>
        }
      ]
  return(
   

<Box className={classes.rootTable}>
    { !(props.pathname && props.pathname === pagePaths.user || pagePaths.refrral ) && 
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      paddingTop: "30px",
      paddingLeft: '50px',
      paddingRight: '50px'
    }}>
      <Typography varriant="subtital" className={classes.statticStyle}>
        Users
      </Typography>
      <IconButton>
        <MoreHorizIcon  onClick={handleOpen}/>
        
      </IconButton>
    </div>

    }
        
        <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
          {
            dropMenu.map((item,index) => (
              <MenuItem onClick={() => handleSelect(index)} className={classes.menuItem}>{item}</MenuItem>
            ))
          }
        </Menu>

        {/* table User*/}

        <Table>
        <TableHead>
              <TableRow>
              {
                userTableCell.map(cell =>(
                  <TableCell>{cell.label}</TableCell>
                ))
              }
              </TableRow>
              </TableHead>
              <TableBody>
               {
                userTableData.map((data,index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align={userTableCell.align}>
                        <Typography variant="subtitle1" className={`${classes.status} ${classes[data.status]}`}>
                        {data.status}
                        </Typography>
                       
                      </TableCell>
                      <TableCell align={userTableCell.align}>
                      <div className={classes.imageStyle}>
                      <Avatar alt="Remy Sharp" src={data.image}/>
                        <div className={classes.name}>{data.name}</div>
                      </div>
                      </TableCell>
                      <TableCell align={userTableCell.align}>
                        {data.email} 
                      </TableCell>
                      <TableCell align={userTableCell.align} onClick={handleOpen}>
                        {data.action} 
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
          

     </Box>
   )

 }

export default CustomUserTable