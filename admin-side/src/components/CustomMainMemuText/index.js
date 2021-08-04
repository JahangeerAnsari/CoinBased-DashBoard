import { Avatar, Box, FormControl, IconButton, Input, InputAdornment, Typography } from '@material-ui/core';
import React from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { classes } from 'istanbul-lib-coverage';
import useStyles from './style';
import CustomSearchBox from '../CustomSearchBox';
/**
* @author
* @function CustomMainMenuText
**/

const CustomMainMenuText = (props) => {
  const classes = useStyles();
  const { PageHeading, pageName, searchBox, searchBoxProps } = props;
  return (
    <Box >
      <div className={classes.menuText}>
        <Typography className={classes.pageHeading}>{PageHeading}</Typography>
        <Typography variant="body1" className={classes.pageHeading}>Account | COINBASE
          <IconButton aria-label="icon">
            <ArrowDropUpIcon />
          </IconButton>
        </Typography>
      </div>

      <div className={classes.pageText}>
        <Typography className={classes.text}>{pageName}</Typography>
        {!searchBox && <CustomSearchBox {...searchBoxProps} />}
      </div>

    </Box>
  )

}

export default CustomMainMenuText;