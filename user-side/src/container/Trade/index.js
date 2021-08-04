import { Box } from '@material-ui/core';
import React from 'react'
import CustomDrawerMenu from '../../components/CustomDrawerMenu';
import Layout from '../../components/Layout/index';
import UserChatBox from '../../components/UserChatBox';
import useStyles from './style'
/**
* @author
* @function 
**/

const Trade  = (props) => {

  const classes = useStyles();
  const pageHeader = {
    PageHeading: "Agent Management Trade",
    pageName: "Trade",
    noCalender: true
  };

  return(
    <Layout pageHeader={pageHeader}>
    <UserChatBox/>
    
    </Layout>
   
   )

 }

export default Trade;