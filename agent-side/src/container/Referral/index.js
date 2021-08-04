import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react'
import Layout from '../../components/Layout/index';
import useStyles from './style';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CustomUserTable from '../../components/CustomUserTable';

/**
* @author
* @function Referral
**/

const Referral = (props) => {
  const classes = useStyles();
  const pageHeader = {
    PageHeading: "Agent Management Referral",
    pageName: "Referral",
    noCalender: true
  };
  const pathname = window.location.pathname;
  console.log("====> pathname : ", pathname)
  
  return(
    <Layout pageHeader={pageHeader}>
      <Box className={classes.root}>
        <div style={{
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
         <Typography varriant="subtital" className={classes.referrelHeader}>
           Affiliate
          </Typography>
          <Typography varriant="subtital2" className={classes.getBonusText}>
           Get referal bonuses by sharing your referal link width friends
          </Typography>
            <div style={{padding:'20px 0px', display:'flex', justifyContent:'right', alignItems:'center'}}>
          
          <Typography varriant="subtital2"  className={classes.getLink} >
           https://gogeafrica/register/agentrose
          </Typography>
           <FileCopyOutlinedIcon style={{ marginLeft:'20px',}} />
         

            </div>
        </div>
           {/* table */}
           <CustomUserTable pathname={pathname}/>
       
        </Box>
    </Layout>
    
   )

 }

export default Referral;