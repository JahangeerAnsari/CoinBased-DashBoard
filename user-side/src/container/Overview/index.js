import { TableHead, TableRow, TableCell, TableBody, IconButton, Button, Avatar } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { Box, Grid, Table, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react'
import CustomCard from '../../components/CustomCard';
import Layout from '../../components/Layout/index';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from './style'
import CustomWallet from '../../components/CustomWallet';
import LinkButton from '../../components/LinkButton';
import { Rowing } from '@material-ui/icons';
import CustomUserTable from '../../components/CustomUserTable';
import CustomTransactionTable from '../../components/CustomTransactionTable';


/**
* @author
* @function 
**/

const OverView = (props) => {
  const classes = useStyles();
  const pageHeader = {
    PageHeading: "Agent Management System OverView",
    pageName: "Overview",
    noCalender: false
  };

  const records = [
    {
      text: 'Total Number of Transaction',
      total: 1500,
      statusValue: "22.8"
    },
    {
      text: 'Total Number of Trade',
      total: 43498,
      statusValue: "11.8"
    },
    {
      text: 'Market Rates Vaalue',
      total: '87%',
      statusValue: '11.8'
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
      number: '1234567',
      name: 'USA Physical',
      bitcoin: 'bitcoinBTC',
    },
    {
      number: '1234567',
      name: 'USA E-Code card',
      bitcoin: 'bitcoinBTC',
    },
    {
      number: '1234567',
      name: 'UK Physical Card',
      bitcoin: 'bitcoinBTC',

    },
    {
      number: '1234567',
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

      <Box className={classes.rootTable}>
      <div style={{
          display: 'flex', justifyContent: 'space-between',
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
          <Typography varriant="subtital" className={classes.textLeft}>
            Conversion Rate to Naira
          </Typography>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
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

      </Box>

      {/* wallet design */}
      <CustomWallet />


      {/* statics desiogn */}
      <Box className={classes.rootTable}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
          <Typography varriant="subtital" className={classes.statticStyle}>
            Statics
          </Typography>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
        <Box  >
          <div style={{
            display: 'flex', flexDirection: 'column',
            paddingLeft: "50px"
          }} >
            <Typography varriant="subtital" className={classes.myOwnReport}>
              My Own Report
            </Typography>


          </div>
        </Box>

      </Box>

{/*<===== User Table=========> */}
 <CustomUserTable/>

 {/* Transaction TABLE */}
 <CustomTransactionTable/>

    </Layout>
  )

}

export default OverView