import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    rootTable:{
        width:'100%',
        height:'auto',
        border:'2px solid',
        marginRight:'auto',
        marginLeft:'auto',
        borderRadius:'5px',
        color:theme.border.main,
        marginTop:'20px',
        background:'white',

    },
    
    tableHeader:{
        marginLeft: '50px',
		marginTop: '60px',
		fontFamily: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
          
    },
    textLeft:{
        fontSize:'34',
        fontFamily: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
    },
    tableBox:{
        

       '& .MuiTableCell-head':{
        fontSize:'14px',
        fontWeight:'bold',
        color: theme.palette.secondary.main,
       }
    },
    tableRow:{
      borderRadius: '20px',
      border:'1 px'
    },
    
    tableButton:{
        color:"#FFFFFF",
		height: '60px',
		width: '30px',
		borderRadius: '50%',
		marginTop: '120px',
		marginRight: '70px',
		background: theme.palette.gradient.bottom,
    },
    buttonMore:{
        marginTop:'16px',
        display:'flex',
        justifyContent:'center',
        margin:'0 auto',
        background: theme.palette.gradient.bottom,
        width:'auto',
        height:'auto',
       border: '1px solid white',
       color:'white',
       marginBottom:'16px'
    },
    addMoreCardBtn:{
        background: theme.palette.gradient.bottom,
       border: '3px solid  #e96b9f',
       color:'white',
       marginLeft:'30px',
       widht:'auto',
       height:'auto',
       fontSize:'30px',
       

    },
    icon:{
      fontSize:'30px',
      fontFamily: theme.typography.poppinsBold,
    },
    linkBtn:{
        fontFamily: theme.typography.poppinsLight,
    },
    statticStyle:{
        fontSize:'34',
        fontFamily: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
      
    },
    myOwnReport:{
        fontSize:'18',
        fontFamily: theme.typography.poppinsMedium,
		color: theme.palette.text.primary,
    },
    
    smallCard:{
      display:'flex',
      padding:'30px',
      alignItems:'center'
     
       
    },
    smallImage:{
        width:'auto',
        height:'auto',
        marginLeft:'20px',
        borderRadius:'5px',
  
    },
    MediumCardBoxes:{
      display:'flex',
      padding:'30px',
      alignItems:'center'
     
    },
    rightBox:{
      margin:'0 auto'
    },
    label:{
      fontFamily: theme.typography.poppinsMedium,
      fontSize: '16px',
      marginTop:'10px',
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
       

  }

    
   
}))