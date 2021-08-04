import {
  Avatar, Box, Button,
  TableCell, Grid, Table, TableHead, TableRow, Typography, TableBody, Menu, MenuItem, IconButton
} from '@material-ui/core'
import React, { useState } from 'react';
import CustomBox from '../CustomBox';
import CustomCard from '../CustomCard';
import CustomCardProfile from '../CustomCardProfile';
import LinkButton from '../LinkButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './style'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';


/**
* @author
* @function CustomProfile
**/

const CustomProfile = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(null);
  const [selectIndex, setSelectedIndex] = useState(null);
  const [userPaymentDetails, setUserPaymentDetails] = useState(null);
  const [dropMenu, setDropMenu] = useState([
    {
      menu: "Payment Details",
    },
    {
      menu: "Block User",
    }
  ]);
  // step 1
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false)

  const handleOpen = (e, user) => {
    setOpen(e.currentTarget);
    setDropMenu([{
      menu: "Payment Details",
      user
    },

    {
      menu: "Block User",
      user
    }]);
  };
  const handleClose = () => setOpen(false);
  const handleSelect = (index) => {
    setSelectedIndex(index);
    const menu = dropMenu[index]
    console.log("===> uiser; : ", menu.user);
    setUserPaymentDetails(menu);
    handleClose();
    handleOpenModal();
  }


  // const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const tableCell = [
    {
      label: `Transaction ID`
    },

    {
      label: `Date`
    },
    {
      label: `Product`
    },
    {
      label: `Amount`
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
      tansactionId: '12345678',
      date: '12/07/21',
      value: `$100`,
      giftCardType: 'Amazon GiftCard',
      amount: `#18000`,
      status: 'Succcssfull',


    },
    {
      tansactionId: '12345678',
      date: '12/07/21',
      value: `$100`,
      giftCardType: 'Steam GiftCard',
      amount: `#18000`,
      status: 'Decline',

    },
    {
      tansactionId: '12345678',
      date: '12/07/21',
      value: `$100`,
      giftCardType: 'Amazon GiftCard',
      amount: `#18000`,
      status: 'Succcssfull',

    },
    {
      tansactionId: '12345678',
      date: '12/07/21',
      value: `$100`,
      giftCardType: 'Amazon GiftCard',
      amount: `#18000`,
      status: 'Succcssfull',

    },
    {
      tansactionId: '12345678',
      date: '12/07/21',
      value: `$100`,
      giftCardType: 'Amazon GiftCard',
      amount: `#18000`,
      status: 'Pending',

    },
  ]




  // card section

  const records = [
    {
      text: 'Total Number of Transactions',
      total: 10000,
      statusValue: "22.8",
      status: 'increment',
    },
    {
      text: 'Total Amount Earned',
      total: '#23000',
      statusValue: "11.8",
      status: 'decrement',
    },
    {
      text: 'Total in wallet',
      total: '#0',
      statusValue: '11.8',
      status: 'decrement',
    }
  ];

  const userDetails = [
    {
      _id: "1",
      status1: 'Down',
      status2: 'Block User',
      image: `/assets/images/ansari.jpeg`,
      name: 'jahangeer ansari',
      email: "ansari@gmail.com",
    },
  ];





  const renderRecords = () => {
    return records.map((obj, index) => {
      return (
        <Grid item lg={4} md={4} sm={4} xs={12} key={index}>
          <CustomCardProfile {...obj} />

        </Grid>
      );
    });
  };
  return (
    <React.Fragment>


      <Box className={classes.rootProfile}>

        {
          userDetails.map((data, index) => {
            return (
              <Box>
                <Avatar alt="Remy Sharp" src={data.image} className={classes.img} />
                <Typography className={classes.name}>{data.name}</Typography>
                <Typography variant="body2" className={classes.email}>{data.email}</Typography>
                <div style={{ display: 'flex', paddingTop: '10px' }}>
                  <Typography variant="subtitle1" className={`${classes.status1} ${classes[data.status1]}`}>
                    {data.status1}
                  </Typography>
                  <Typography variant="subtitle1" className={`${classes.status2} ${classes[data.status2]}`}>
                    {data.status2}
                  </Typography>
                </div>
              </Box>
            )
          })
        }

        {/* cards  users */}
        <Box paddingTop={'20px'}>
          <Grid container spacing={4} className={classes.cardBox}>
            {renderRecords()}
          </Grid>
        </Box>


        {/* menu items */}

        <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
          {
            dropMenu.map((item, index) => (
              <MenuItem onClick={() => handleSelect(index)} className={classes.menuItem}>{item.menu}</MenuItem>
            ))
          }
        </Menu>

        {/* Modal Check */}

        {/* MODAL START */}

        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {userPaymentDetails && userPaymentDetails.menu === "Payment Details" && <DialogTitle id="alert-dialog-title" className={classes.paymentTitle}>{userPaymentDetails.menu}</DialogTitle>}

          <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {userPaymentDetails && userPaymentDetails.menu === "Payment Details" && <Grid container spacing={3}>
                <Grid item>
                  <Typography variant="body1" className={classes.menuTitle} >Product</Typography>
                  <Typography variant="body2" className={classes.itemsValue}><b>{userPaymentDetails.user.value}-</b>{userPaymentDetails.user.giftCardType}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.menuTitle} >Exchange Rate</Typography>
                  <Typography variant="body2" className={classes.itemsValue}><b>{userPaymentDetails.user.amount}-</b>per dollor</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.menuTitle}>Return</Typography>
                  <Typography variant="body2" className={classes.itemsValue}><b>{userPaymentDetails.user.return || 0}</b></Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.menuTitle}>Date</Typography>
                  <Typography variant="body2" className={classes.itemsValue}>{userPaymentDetails.user.date}</Typography>
                </Grid>

                <Grid item>

                  <Avatar alt="logo" variant="square" src="/assets/logo/atmCard.svg" className={classes.atmCard} />


                </Grid>

              </Grid>}
              {userPaymentDetails && userPaymentDetails.menu === "Block User" && <Grid container>

                <Box className={classes.blockBox}>

                <Grid item >
                  <Avatar alt="logo" variant="square" src="/assets/logo/blockImg.svg" className={classes.blockCard} />
                </Grid>
                <Grid item >
                <Typography variant="body2" className={classes.blockText}>
                  Clicking on procced button deny on user acceess into the entire system proceed?
                   </Typography>
                </Grid>
                <Grid item>
                <div className={classes.proceedBtn} >
        <LinkButton
          text="Procced"
          linkStyle={""}
          link=""

        />

      </div>
                </Grid>

                </Box>
                




              </Grid>}
            </DialogContentText>
          </DialogContent>
        </Dialog>

        {/* MODAL FOR BLOCK Y */}

        {/* MODAL END */}

        {/*  */}
        <Box style={{
          marginTop: '100px',
          marginBottom: '100px'
        }} className={classes.rootTable}>
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
                        {data.tansactionId}
                      </TableCell>
                      <TableCell align={tableCell.align}>
                        {data.date}
                      </TableCell>

                      <TableCell align={tableCell.align}>
                        {data.value}
                        <div className={classes.cardType}>  {data.giftCardType}</div>

                      </TableCell>

                      <TableCell align={tableCell.align}>
                        {data.amount}
                      </TableCell>

                      <TableCell align={tableCell.align}>
                        <Typography variant="subtitle1" className={`${classes.status} ${classes[data.status]}`}>
                          {data.status}
                        </Typography>

                      </TableCell>

                      <TableCell align={tableCell.align} onClick={(e) => handleOpen(e, data)}>
                        <MoreHorizIcon />
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>


          </Table>



        </Box>

      </Box>


    </React.Fragment>


  )

}

export default CustomProfile