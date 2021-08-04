import React from 'react'
import CustomProfile from '../../components/CustomProfile';
import Layout from '../../components/Layout'

/**
* @author
* @function UserProfile
**/

const UserProfile = (props) => {

    const pageHeader = {
        PageHeading: "Admin Management Users",
        pageName: "Users",
        searchBox: true,
        
      };
  return(
    <Layout pageHeader={pageHeader}>
          <CustomProfile/>
    </Layout>
   )

 }

export default UserProfile