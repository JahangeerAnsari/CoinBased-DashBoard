import { Avatar, Box ,IconButton,Typography} from '@material-ui/core';
import React from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { classes } from 'istanbul-lib-coverage';
import useStyles from './style';
/**
* @author
* @function CustomMainMenuText
**/

const CustomMainMenuText = (props) => {
    const  classes = useStyles();
    const {PageHeading, pageName, noCalender} = props;
  return(
    <Box >
       <div className={classes.menuText}>
       <Typography className={classes.pageHeading}>{PageHeading}</Typography>
       <Typography variant="body1" className={classes.pageHeading}>Account | AGENT Ansari 
       <IconButton aria-label="icon">
         <ArrowDropUpIcon/>
        </IconButton>
       </Typography>     
       </div>
   
       <div className={classes.pageText}>
       <Typography className={classes.text}>{pageName}</Typography>
       {!noCalender  && <Avatar
              alt="logo"
              src="/assets/logo/calender.svg"
              variant="square"
        
            />}
       </div>
       
    </Box>
   )

 }

export default CustomMainMenuText;