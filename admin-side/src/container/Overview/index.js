import { TableHead, TableRow, TableCell, TableBody, IconButton, Avatar, TextField, Button, MenuItem, Menu } from '@material-ui/core';
import { Box, Grid, Table, Typography ,Select} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React, { useState } from 'react'
import CustomCard from '../../components/CustomCard';
import Layout from '../../components/Layout/index';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from './style'
import CustomWallet from '../../components/CustomWallet';
import AddIcon from '@material-ui/icons/Add';
import CustomUserTable from '../../components/CustomUserTable';
import CustomTransactionTable from '../../components/CustomTransactionTable';
import LinkButton from '../../components/LinkButton';
import CustomBox from '../../components/CustomBox';
import { useHistory } from 'react-router-dom';
import AgentTable from '../../components/AgentTable';
import PaymentTable from '../../components/PaymentTable';



/**
* @author
* @function 
**/

const OverView = (props) => {

  const classes = useStyles();
  const history = useHistory();
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
        name: "View",
        link: `/view`,
      }, {
        name: "Delete",
        link: `/delete`,
      }];
      setDropMenus(menus);
    }
  }

  // select dropdown 
  const [option , setOption] = useState(1);
  const onUpdateSelect = ( e) => {
    console.log(e.target.value)
    setOption(e.target.value)
  }
  const pageHeader = {
    PageHeading: "Admin Management System OverView",
    pageName: "Overview",
    searchBox: true,
  };

  const records = [
    {
      text: 'Total Number of Users',
      total: 10000,
      statusValue: "22.8",
      status: 'increment',
    },
    {
      text: 'Total Number of Agents',
      total: 434,
      statusValue: "11.8",
      status: 'decrement',
    },
    {
      text: 'Total Numbers of transactions',
      total: '40000',
      statusValue: '11.8',
      status: 'decrement',
    }
  ];
  const tableCell = [
    {
      label: "iTunesCard"
    },
    {
      label: ""
    },
    {
      label: "AmazonCard"
    },
    {
      label: ""
    },
    {
      label: "Bitcoin"
    },

  ];

  const tableData = [
    {
      number: 'N400.00',
      name: 'USA Physical',
      bitcoin: 'bitcoinBTC',
    },
    {
      number: 'N400.00',
      name: 'USA E-Code card',
      bitcoin: 'bitcoinBTC',
    },
    {
      number: 'N400.00',
      name: 'UK Physical Card',
      bitcoin: 'bitcoinBTC',

    },
    {
      number: 'N400.00',
      name: 'UK E-Code Card',
      bitcoin: 'bitcoinBTC',
    },

  ];







  const renderRecords = () => {
    return records.map((obj, index) => {
      return (
        <Grid item lg={4} md={4} sm={4} xs={12} key={index}>
          <CustomCard {...obj} />

        </Grid>
      );
    });
  };



  return (
    <Layout pageHeader={pageHeader} >
      <Grid container spacing={4}>
        {renderRecords()}
      </Grid>
      {/* table / */}

      <CustomBox

        textLeft="Conversion Rate to Naira">

        <Box className={classes.tableBox}>
          <Table className={classes.table}>
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
                tableData.map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align={tableCell.align} className={classes.tableRow}>
                        {data.name}
                      </TableCell>
                      <TableCell align={tableCell.align} className={classes.tableRow}>
                        {data.number}
                      </TableCell>

                      <TableCell align={tableCell.align} className={classes.tableRow}>
                        {data.name}
                      </TableCell>
                      <TableCell align={tableCell.align} className={classes.tableRow}>
                        {data.number}
                      </TableCell>
                      <TableCell align={tableCell.align} className={classes.tableRow}>
                        {data.bitcoin}
                      </TableCell>

                      <TableCell align={tableCell.align} className={classes.tableRow}>
                        {data.number}
                      </TableCell>


                    </TableRow>

                  )
                })}
            </TableBody>

          </Table>
          {/* buttom more */}
          <IconButton className={classes.buttonMore}>
            <ArrowForwardIcon />

          </IconButton>

        </Box>
        {/*nich  */}
      </CustomBox>

      {/* wallet design */}
      <CustomWallet />


      {/* cards cpmpany desiogn */}
      <Box className={classes.rootTable}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
          <Typography varriant="subtital" className={classes.statticStyle}>
            Cards
          </Typography>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
        <Box>


          {/* custom small card */}
          <Box className={classes.smallCard}>
            <div style={{ display: 'flex' }}>
              <Avatar
                variant="square"
                src="/assets/logo/small_card.svg"
                className={classes.smallImage}
              />
               
              <Avatar
                variant="square"
                src="/assets/logo/itunes.svg"
                className={classes.smallImage}
              />
              <Avatar
                variant="square"
                src="/assets/logo/small_card.svg"
                className={classes.smallImage}
              />
               
              <Avatar
                variant="square"
                src="/assets/logo/itunes.svg"
                className={classes.smallImage}
              />
              
            </div>
            <div><IconButton className={classes.addMoreCardBtn}>
              <AddIcon className={classes.icon} />

            </IconButton></div>

          </Box>


          <Box style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <LinkButton
              text="View more"
              linkStyle={classes.linkBtn}
            />
          </Box>
        </Box>

      </Box>

      {/*<===== User Table=========> */}
      <CustomUserTable />


      {/* BITCOINS AND ETHENIUM  */}
      <CustomBox
        textLeft="Bitcoins and Ethenium"
         onClick={handleOpen}
        >

<Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
        {
          dropMenus.map((item, index) => (
            <MenuItem  onClick={() => handleSelect(index)} className={classes.menuItem}>{item.name}</MenuItem>
          ))
        }
      </Menu>
        <Box className={classes.MediumCardBoxes}>
          <Box className={classes.leftBox}>
            <div style={{ display: 'flex' }}>
              <Avatar
                variant="square"
                src="/assets/logo/bitcoinLogo.svg"
                className={classes.smallImage}
              />
              <Avatar
                variant="square"
                src="/assets/logo/ethenium.svg"
                className={classes.smallImage}
              />


            </div>
          </Box>
          <Box className={classes.rightBox}>
          <Box component="form" mt={2} className={classes.formBox}>
          <div>
          <label className={classes.label}>Product</label>
           <Select
          value={option}
          displayEmpty
          onChange={onUpdateSelect}
           variant="outlined"
           color="secondary"
           fullWidth>
             <MenuItem value={1} >Bitcoin</MenuItem>
             <MenuItem value={2} >Eteniums</MenuItem>
           </Select> 
          </div>
            
            <div>
           <TextField 
           fullWidth
           placeholder="1-20"
           margin="normal"
           type="text"
           variant="outlined"
           color="secondary"/>   
            </div>

        
  
        </Box>

        <Box>
         <Button type="submit" className={classes.btnSubmit}>
           add coins
         </Button>
        </Box>

          </Box>
        </Box>

      </CustomBox>


     {/* AGENT TABLE */}

    <AgentTable/>

   {/* AGENT TABLE END*/}

   {/* PAYMENT TABLE */}
    <PaymentTable/>


      {/* Transaction TABLE */}
      <CustomTransactionTable />

    </Layout>
  )

}

export default OverView