import { Box, Typography } from '@material-ui/core'
import React from 'react';
import clsx from "clsx";
import useStyles from './style'

/**
* @author
* @function CustomText
**/

const CustomText = (props) => {

  const classes = useStyles();
  return (
    <Box>
      <Typography className={clsx(classes.title, props.textStyle)}>
        {props.text}
      </Typography>
    </Box>
  )

}

export default CustomText