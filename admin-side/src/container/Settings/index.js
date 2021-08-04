import { Avatar, Box, Divider, 
  TextField,IconButton, Typography, Button } from '@material-ui/core';
import React from 'react'
import Layout from '../../components/Layout/index';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import useStyles from './style';
import CustomText from '../../components/CustomText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';



/**
* @author
* @function Settings
**/

const Settings = (props) => {

  const classes = useStyles();
  const pageHeader = {
    PageHeading: "Agent Management Settings",
    pageName: "Setting",
    noCalender: true
  };
  const text = `The uploaded image must be 500px wide 500px long`;
  const text2 = `Fill the bank informatiom which you would want your transaction return and bonuses`
  return (
    <Layout pageHeader={pageHeader}>
      <Box className={classes.root}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
          <Typography varriant="subtital" className={classes.settingHeader}>
            Profile
          </Typography>
          <IconButton>
            <ExpandMoreIcon />

          </IconButton>
        </div>
        <Divider />

        <Box className={classes.userProfile}>
          {/* icon image text */}
          <Box className={classes.iconBox}>
            <Avatar src="/assets/images/ansari.jpeg" alt="photo" />
            <IconButton className={classes.addPicIcon}>
              <AddAPhotoIcon  />
            </IconButton>
          </Box>


          <CustomText
            text={text}
            textStyle={classes.textPhoto}
          />
        <Box component="form" mt={2} className={classes.formBox}>
          <div>
          <label className={classes.label}>Name</label>
           <TextField 
           fullWidth
           placeholder="name"
           margin="normal"
           variant="outlined"
           color="secondary"/> 
          </div>
            <div>
            <label className={classes.label}>Email</label>
           <TextField 
           fullWidth
           placeholder="Email"
           margin="normal"
           type="email"
           variant="outlined"
           color="secondary"/>   
            </div>
            <div>
            <label className={classes.label}>Phone</label>
           <TextField 
           fullWidth
           placeholder="+9142731716"
           margin="normal"
           type="email"
           variant="outlined"
           color="secondary"/>   
            </div>

            <div>
            <label className={classes.label}>Nationality</label>
           <TextField 
           fullWidth
           placeholder="Indian"
           margin="normal"
           type="email"
           variant="outlined"
           color="secondary"/>   
            </div>
          

        </Box>

        <Box>
         <Button type="submit" className={classes.btnSubmit}>
            save chnages
         </Button>
        </Box>


        </Box>
      <Box marginTop="40px">
       <Divider/>
      <div style={{
          display: 'flex', justifyContent: 'space-between',
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
          <Typography varriant="subtital" className={classes.settingHeader}>
            Password
          </Typography>
          <IconButton>
            <ExpandLessIcon />

          </IconButton>
        </div>
        <Divider />

      </Box>
       
      <Box marginBottom="30px">
      <div style={{
          display: 'flex', justifyContent: 'space-between',
          paddingTop: "30px",
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>
          <Typography varriant="subtital" className={classes.settingHeader}>
            Billing Information
          </Typography>
          <IconButton>
            <ExpandMoreIcon />

          </IconButton>
        </div>
        <Divider />

      </Box>
          
      <CustomText
            text={text2}
            textStyle={classes.downText}
          />
         <div className={classes.atmCardImage}>
            <CustomText 
              text="edit"
             textStyle={classes.editText}
             />
             <div className={classes.cardDetails}>
         <CustomText 
              text="United Bank of Chicago"
             textStyle={""}
             />
             <CustomText 
              text="4386 xxxx xxxx xxxx"
             textStyle={''}
             />
             <CustomText 
              text="Jahangeer Ansari"
             textStyle={""}
             />
         </div>
         </div>
         
      </Box>


    </Layout>

  )

}

export default Settings