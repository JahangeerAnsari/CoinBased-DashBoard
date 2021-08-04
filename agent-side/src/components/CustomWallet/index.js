import { Box, Typography } from '@material-ui/core'
import React from 'react';
import CustomText from '../CustomText';
import LinkButton from '../LinkButton'
import useStyles from './style';



/**
* @author
* @function 
**/
const text1 = `Wallet`;
const text2 = `Total Earning`
const text3=`Balance`
const text4= `please note this's the total sum of ya'
transactions here on
GOGE AFRICA`


const CustomWallet = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.headerWallet}>
        <CustomText
          text={text1}
          textStyle={classes.wallet}

        />
        <LinkButton
          text="Widhdraw funds"
          linkStyle={classes.btnDecoration}
          link={""}
        />
      </div>
      <Box display="flex" alignItems="center" paddingTop="10px">
        <Box flexGrow={1}></Box>
        <Box width="32%">
          <CustomText
            text={text2}
            textStyle={classes.centerBtn}

          />
          <CustomText
            text="#120000.00"
            textStyle={classes.largeCount}

          />
          <CustomText
            text={text4}
            textStyle={classes.lowerText}

          />

        </Box>
        <Box width="32%">
          <CustomText
            text={text3}
            textStyle={classes.centerBtn}

          />
           <CustomText
            text="#30000.00"
            textStyle={classes.largeCount}

          />
          <CustomText
            text="please note this current balance amount left on your wallet"
            textStyle={classes.lowerText}

          />

        </Box>
      </Box>




    </Box>
  )

}

export default CustomWallet