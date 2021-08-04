import React, { useState } from 'react';
import {
    Card, CardContent,
    Avatar, Typography, IconButton, Box, Menu, MenuItem
} from '@material-ui/core'
import useStyles from './style';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

/**
* @author
* @function CustomCard
**/

const CustomCardProfile = (props) => {
    const classes = useStyles();
    const {status} = props;
    const { text, total, statusValue } = props;
   
    
    return (
        <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
           
            {/* dropDownMenu */}
           

            <Box className={classes.avatarBox}>
                <Avatar alt="logo" src="/assets/logo/card_logo.svg" className={classes.avatar} />
                <Typography>{total}</Typography>
            </Box>
            <Box className={classes.textBox}>
                <Box className={classes.bigText}>
                    <Typography variant="h5">{text}</Typography>
                </Box>
                <Box className={classes.smallText}>
                    <Box className={classes.triangleText}>
                        <Typography variant="h8">{statusValue}%</Typography>
                        { status === 'increment' && <Avatar alt="logo" src="/assets/logo/trianglegreen.svg" />}
                        { status === 'decrement' && <Avatar alt="logo" src="/assets/logo/downgreenlogo.svg" />}
                        {/* { status === 'increment' ? <Avatar alt="logo" src="/assets/logo/trianglegreen.svg" /> : <Avatar alt="logo" src="/assets/logo/trianglegreen.svg" />} */}
                    
                    </Box>
                    
                </Box>
            </Box>
        </CardContent>
    </Card>
    )

}

export default CustomCardProfile