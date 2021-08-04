import { Box, Typography } from '@material-ui/core';
import React from 'react'
import Layout from '../../components/Layout';
import LinkButton from '../../components/LinkButton';
import useStyles from './style';
 
/**
* @author
* @function Logout
**/

const Logout = (props) => {
  const classes = useStyles()
  const pageHeader = {
    PageHeading: "",
    pageName: "Logout",
    noCalender: true
  };
  return(
    <Layout pageHeader={pageHeader}>
       <Box className={classes.root}>
        <div style={{
          display: 'flex', justifyContent: 'center',
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
          <Typography varriant="subtital" className={classes.settingHeader}>
            you are about to logout of system
          </Typography>
         
        </div>

        <div style={{display:'flex', margin:'0 auto', justifyContent:'center',
      padding:'100px 0px'}}>
        <LinkButton
         text="Logout"
         textStyle={classes.logoutBtn}
        />
        </div>
        </Box>
    </Layout>
   )

 }

export default Logout