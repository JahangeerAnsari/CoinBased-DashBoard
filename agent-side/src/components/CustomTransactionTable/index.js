import {
  Avatar, Box, IconButton, Menu,
  MenuItem, Table, TableBody, TableCell,
  TableHead, TableRow, Typography
} from '@material-ui/core'
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LinkButton from '../LinkButton';
import useStyles from './style'
import { pagePaths } from '../../Utils/Constant';

/**
* @author
* @function CustomTransactionTable
**/

const CustomTransactionTable = (props) => {
  const classes = useStyles();
  // null for anchor value // or false case
  const [open, setOpen] = useState(null);
    const [selectIndex,setSelectedIndex] =useState(null);
  // step 1
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false)

  const handleOpen = (e) => setOpen(e.currentTarget);
  const handleClose = () => setOpen(false);
  const handleSelect = (index) => {
    setSelectedIndex(index);
    handleClose();
  }

  const dropMenu = ["Delete"];
  //  userTable data

  const tableCell = [
    {
      label: `Date`
    },
    {
      label: `Transaction ID`
    }, {
      label: `Type`
    },
    {
      label: `Name`
    },
    {
      label: `Value`
    },
    {
      label: `Return`
    },
    {
      label: `Status`
    },
    {
      label: `Action`
    },
  ];

  const rows = [
    {
      date: '12/07/21',
      tansactionId: '12345678',
      type: `/assets/logo/bitcoin.svg`,
      name: "Bitcoin",
      value: `$100`,
      return: `#18000`,
      status: 'Completed',
      action: <MoreHorizIcon />
    },
    {
      date: '2/07/21',
      tansactionId: '23535182',
      type: `/assets/logo/wallet.svg`,
      name: "Amazon",
      value: `$100`,
      return: `#18000`,
      status: 'Failed',
      action: <MoreHorizIcon />
    },
    {
      date: '25/01/21',
      tansactionId: '34567893546',
      type: `/assets/logo/bitcoin.svg`,
      name: "Bitcoin",
      value: `$100`,
      return: `#18000`,
      status: 'InProgress',
      action: <MoreHorizIcon />
    },
    {
      date: '6/03/21',
      tansactionId: '234567289',
      type: `/assets/logo/wallet.svg`,
      name: "Bitcoin",
      value: `$100`,
      return: `#18000`,
      status: 'Completed',
      action: <MoreHorizIcon />
    },
    {
      date: '12/07/21',
      tansactionId: '12345678',
      type: `/assets/logo/bitcoin.svg`,
      name: "Bitcoin",
      value: `$100`,
      return: `#18000`,
      status: 'Failed',
      action: <MoreHorizIcon />
    },
  ]
  return (


    <Box className={classes.rootTable}>
      {!(props.pathname && props.pathname === pagePaths.transactions) &&
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
          <Typography varriant="subtital" className={classes.statticStyle}>
            Transaction
          </Typography>
          <IconButton>
            <MoreHorizIcon onClick={handleOpen} />

          </IconButton>
        </div>
      }
      <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
        {
          dropMenu.map((item, index) => (
            <MenuItem onClick={() => handleSelect(index)} className={classes.menuItem}>{item}</MenuItem>


          ))
        }
      </Menu>

      {/* table User*/}

      <Table>
        <TableHead>
          <TableRow>
            {
              tableCell.map(cell => (
                <TableCell>{cell.label}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((data, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align={tableCell.align}>
                    {data.date}
                  </TableCell>
                  <TableCell align={tableCell.align}>
                    {data.tansactionId}
                  </TableCell>
                  <TableCell align={tableCell.align}>
                    <div >
                      <Avatar alt="Remy Sharp" src={data.type}
                        className={classes.imageStyle} />

                    </div>
                  </TableCell>
                  <TableCell align={tableCell.align}>
                    {data.name}
                  </TableCell>
                  <TableCell align={tableCell.align}>
                    {data.value}
                  </TableCell>
                  <TableCell align={tableCell.align}>
                    {data.return}
                  </TableCell>

                  <TableCell align={tableCell.align}>
                    <Typography variant="subtitle1" className={`${classes.status} ${classes[data.status]}`}>
                      {data.status}
                    </Typography>

                  </TableCell>

                  <TableCell align={tableCell.align} onClick={handleOpen}>
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

export default CustomTransactionTable