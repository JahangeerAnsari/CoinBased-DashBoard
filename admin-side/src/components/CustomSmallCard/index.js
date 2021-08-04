import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react';
import useStyles from './style';

/**
* @author
* @function CusotomSmallCard
**/

const CusotomSmallCard = (props) => {
    const {background,image, text} =  props;
    const classes =  useStyles()
    return (
        <Card className={classes.root}>
            <CardContent>
                {background}
                <Box className={classes.cardBox}>
                    <Avatar 
                     variant="square"
                     image={image}
                    />
                    <Typography className={classes.text}>
                       {text}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )

}

export default CusotomSmallCard