import React from 'react'
import CustomUserTable from '../../components/CustomUserTable';
import Layout from '../../components/Layout/index';
/**
* @author
* @function 
**/

const Users = (props) => {
  const pathname = window.location.pathname;
  console.log("====> pathname : ", pathname)
  const pageHeader = {
    PageHeading: "Agent Management Users",
    pageName: "Users",
    noCalender: true
  };
  return (
    <Layout pageHeader={pageHeader}>
      <CustomUserTable pathname={pathname} />
    </Layout>

  )

}

export default Users;