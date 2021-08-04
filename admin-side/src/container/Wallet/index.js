import { TramRounded } from '@material-ui/icons';
import React from 'react'
import CustomWallt from '../../components/CustomWallet'
import Layout from '../../components/Layout/index'

/**
* @author
* @function Wallet
**/

const Wallet = (props) => {
  const pageHeader = {
    PageHeading: "Agent Management Wallet",
    pageName: "Wallet",
    noCalender: true
  };
  return(
    <Layout pageHeader={pageHeader} >
     <CustomWallt/>
    </Layout>
    
   )

 }

export default Wallet