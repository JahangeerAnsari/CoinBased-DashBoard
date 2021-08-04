import { Box, Checkbox, IconButton, Typography } from '@material-ui/core'
import React from 'react';
import useStyles from './style';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { pagePaths } from '../../Utils/Constant';

/**
* @author
* @function CustomBox
**/

const CustomBox = (props) => {
    const classes = useStyles();
  return(
    <Box className={classes.rootTable}>
      { !(props.pathname && props.pathname === pagePaths.user  ) && 
       <div style={{
          display: 'flex', justifyContent: 'space-between',
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
          <Typography variant="subtitle1" className={classes.leftTextStyle}>
               {props.textLeft}
          </Typography>
          <IconButton>
            <MoreHorizIcon 
             onClick={props.onClick}
            />
          </IconButton>
       </div> 
}
       {props.children}
    </Box>
   )

 }

export default CustomBox