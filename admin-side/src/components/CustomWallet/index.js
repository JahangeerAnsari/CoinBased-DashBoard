import { Avatar, Box, CardMedia, IconButton, Typography } from '@material-ui/core'
import React from 'react';
import CustomText from '../CustomText';
import LinkButton from '../LinkButton'
import useStyles from './style';
import CloseIcon from '@material-ui/icons/Close';



/**
* @author
* @function 
**/

const text1= `Hi welcome, this page is the general overiew section of the admin panel which
you could edit and modefy the view of the page to your preferred taste.`



const CustomWallet = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      
      <div className={classes.flag}>
      <IconButton className={classes.crossIcon}>
         <CloseIcon/>
      </IconButton>
      </div>
     <Box className={classes.textArea}>
      <Box className={classes.leftSection}>
      <CustomText
       text="Transaction"
       textStyle={classes.leftText}
      />
       <CustomText
         text={text1}
        
        />
        <LinkButton
         text="lern more"
         linkStyle={classes.lernMoreBtn}
        />
     
      </Box>
      <Box className={classes.rightSection}>
       
      <Avatar
              alt="calender"
              src="/assets/images/calender.jpg"
              variant="square"
              className={classes.image}
            />
      </Box>

     </Box>

      
       


    </Box>
  )

}

export default CustomWallet