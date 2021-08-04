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
  const [value, setValue] = React.useState('');
  const onChange = (e) => {
    console.log("===> e.target : ", e.target)
    setValue(e.target.value)
  }
  const onClick = () => {

  }
  const searchBoxProps = {
    placeholder: "Search users",
    value,
    onChange,
    // btnProps: {
    //   onClick,
    //   text: "", 
    //   icon:""
    // }
  }
  const pageHeader = {
    PageHeading: "Admin Management Users",
    pageName: "Users",
    searchBox: false,
    searchBoxProps
  };

  return (
    <Layout pageHeader={pageHeader}>
      <CustomUserTable pathname={pathname} />
    </Layout>

  )

}

export default Users;