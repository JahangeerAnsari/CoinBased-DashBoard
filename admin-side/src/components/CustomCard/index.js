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

const CustomCard = (props) => {
    const classes = useStyles();
    const {status} = props;
    const { text, total, statusValue } = props;
   
    const[open,setOpen] = useState(null);
    const [selectIndex,setSelectedIndex] =useState(null);
    // step 1
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false)
    const handleOpen = (e) => setOpen(e.currentTarget);
    const handleClose = () => setOpen(false)
    const handleSelect = (index) => {
      setSelectedIndex(index);
      handleClose();
    }
    const dropMenu = ["View","Delete"];
    return (
        <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
            <IconButton aria-label="settings" className={classes.moreButton}>
                <MoreHorizIcon onClick={handleOpen} />
            </IconButton>

            {/* dropDownMenu */}
            <Menu open={Boolean(open)} anchorEl={open} onClose={handleClose}>
          {
            dropMenu.map((item,index) => (
              <MenuItem onClick={() => handleSelect(index)} className={classes.menuItem}>{item}</MenuItem>
            ))
          }
        </Menu>

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
                    <Avatar alt="logo" src="/assets/logo/green_graph.svg" className={classes.logo} />
                </Box>
            </Box>
        </CardContent>
    </Card>
    )

}

export default CustomCard