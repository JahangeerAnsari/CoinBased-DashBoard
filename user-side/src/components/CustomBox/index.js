import { Box } from '@material-ui/core'
import React from 'react';
import useStyles from './style';

/**
* @author
* @function CustomBox
**/

const CustomBox = (props) => {
    const classes = useStyles();
  return(
    <Box className={classes.rootTable}>

    </Box>
   )

 }

export default CustomBox