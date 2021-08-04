import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ( {
    root: {
        width: '100%',
        height: 'auto',
        border: '2px solid',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: '5px',
        color: theme.border.main,
        marginTop: '20px',
        background: 'white',

    },
    settingHeader:{
        fontSize:'34',
        fontFamily: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
    },
    userProfile:{

     '& .MuiAvatar-root':{
         margin:'0 auto',
         width:'100px',
         height:'100px'
     }
     
    },
    
    textPhoto:{
      display:'flex',
      justifyContent:'center',
      paddingLeft:' 44%',
    paddingRight: '39%',
    marginTop: '4px',
    fontFamily: theme.typography.poppinsLight,
    fontSize: '13px',
    color: theme.palette.text.primary,


    },
    iconBox: {
    width: '100px',
    height: '100px',
    position: 'relative', 
    margin: '0 auto',
    marginTop:'20px'
    },
    addPicIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        color: 'white',
        fontSize:'80px'
    },
    formBox:{
     width:'40%',
    position: 'relative', 
    margin: '0 auto',
    justifyContent:'center',
     padding:'40px 0px',
     
    },
    label:{
        fontFamily: theme.typography.poppinsLight,
        fontSize: '13px',
        color: theme.palette.text.primary,
    
    

    },
    btnSubmit:{
        display:'flex',
        cursor:'pointer',
        fontSize:'12px',
        textAlign:'center',
        background: theme.palette.gradient.bottom,
        color:'white',
        fontFamily: theme.typography.poppinsLight,
        padding:'9px 22px',
        borderRadius:'20px',
        textTransform:'none',
        margin:'0 auto',
        "&:hover": {
            textDecoration: "none",
            color: theme.palette.primary.main,
      
          },
         

    },
    downText:{
        display:'flex',
        justifyContent:'center',
        paddingLeft:' 33%',
      paddingRight: '34%',
      marginTop: '4px',
      fontFamily: theme.typography.poppinsLight,
      fontSize: '16px',
      color: theme.palette.text.primary,
    },
    atmCardImage:{
        
        width:'330px',
        height:'180px',
       background: theme.palette.gradient.top,
       borderRadius:'2px',
       marginTop: '30px',
       margin:'30%',
       marginBottom:'20px',
       borderTopRightRadius:'10px',
       borderTopLefttRadius:'10px',
       borderBottomRightRadius:'10px',
       borderBottomLeftRadius:'10px',
    },
    editText:{
        fontFamily: theme.typography.poppinsLight,
        display:'flex',
        justifyContent:'flex-end',
        fontSize:'18px',
       padding:'29px 29px 10px 29px'
    },
    cardDetails:{
        marginLeft:'40px',
        '& .MuiTypography-root':{
            paddingBottom:'10px',
            letterSpacing: "0.7857144px",
        },
        '& .makeStyles-title-87':{
            fontFamily: theme.typography.poppinsLight,
            fontSize:'14px',
        }
    }
    
}))