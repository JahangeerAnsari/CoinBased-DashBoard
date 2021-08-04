import React from 'react'
import CustomTransactionTable from '../../components/CustomTransactionTable';
import Layout from '../../components/Layout/index'

/**
* @author
* @function Transactions
**/

const Transactions = (props) => {

  const pathname = window.location.pathname;
  console.log("====> pathname : ", pathname)
  
  const pageHeader = {
    PageHeading: "Agent Management Transaction",
    pageName: "Transaction",
    noCalender: true
  };
  return(
    <Layout pageHeader={pageHeader}>
     <CustomTransactionTable pathname={pathname}/>
    </Layout>
   
   )

 }

export default Transactions;