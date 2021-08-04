import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root:{
        width:'auto',
        height:'250px',
       background: theme.palette.gradient.right,
       borderRadius:'2px',
       marginTop: '30px',
       marginBottom:'20px',
       borderTopRightRadius:'10px',
       borderTopLeftRadius:'10px',
       borderBottomRightRadius:'10px',
       
       borderBottomLeftRadius:'10px',
       
    },
    flag:{ 
        display:'flex',
       position:'relative',
       paddingTop:'70px',
       paddingLeft:'70px'

    
    },
    textArea:{
        display:'flex',
        width:'100%',
        '& .MuiTypography-root':{
            margin:'20px 0px',
            fontSize:'14px'
           
        }

    },
   
    
    leftSection:{
      marginLeft:'50px',
      width:'64%', 
    },
    leftText:{
      fontSize:'20px'
    },
   
    lernMoreBtn:{
      color:theme.palette.secondary.rgbMain,
      background:theme.palette.primary.white,
      fontFamily: theme.typography.poppinsLight,
      fontSize:'14px',
      margin:'5px 18px'
    },

    rightSection:{
      margin:'20px 30px',
      width:'40%',
     
      '& .MuiAvatar-root':{
          width:'70%',
          height:'87%',
          display:'flex',
          margin:'0 auto',
      }
    },
    smallTextBox:{
     display:'flex',
    
    },
    pTag:{
        fontFamily: theme.typography.poppinsLight,
        background:'green'
    },
    

    crossIcon:{
        fontFamily: theme.typography.poppinsLight,
        color: 'white',
        fontSize:'20px',
        top:'0',
        right:'0',
        position:'absolute',
        marginRight:'30px',
        padding:'30px',
        width:'fit-content'
       
       
    
    },
    btnDecoration:{
        background:'white',
        color: theme.palette.secondary.rgbMain,
    },
    centerBtn:{
        background: theme.palette.gradient.type2.bottom,
        color:'white',
        width:'fit-content',
        padding:'7px 15px',
        borderRadius:'20px',
        fontFamily: theme.typography.poppinsLight,
		fontSize: '12px',
        fontWeight:'100'
    
    },
    largeCount:{
        fontSize:'36px',
        fontFamily: theme.typography.poppinsBold,
        marginLeft:'10px'
    },
    lowerText:{
        fontSize:'15px',
        width:'80%',
        fontFamily: theme.typography.poppinsLight
    }

}))