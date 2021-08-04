import React from 'react'
import CustomMainMenuText from '../CustomMainMemuText';
import Header from '../Header';
import useStyles from './style';


/**
* @author
* @function 
**/

const Layout = (props) => {
  const classes = useStyles();
  const {pageHeader} = props;
  return(
    <React.Fragment>
     <Header/>
       <div className={classes.layout}>
      <CustomMainMenuText {...pageHeader}/>
       {props.children}
       </div>
    </React.Fragment>
   )

 }

export default Layout