import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    rootProfile:{
       display:'flex',
       flexDirection:'column',
       alignItems:'center'

    },
    status1:{
        textTransform: 'capitalize',
		whiteSpace: 'nowrap',
		fontFamily: theme.typography.poppinsRegular,
		color: theme.palette.common.white,
        width:'fit-content',
		fontSize: '15px',
		borderRadius: '20px',
		 padding: '2px 10px',
		textAlign: 'center',
        marginLeft:'10px'
    } ,
    status2:{
        textTransform: 'capitalize',
		whiteSpace: 'nowrap',
		fontFamily: theme.typography.poppinsRegular,
		color: theme.palette.common.white,
        width:'fit-content',
		fontSize: '15px',
		borderRadius: '20px',
		 padding: '2px 10px',
		textAlign: 'center',
        marginLeft:'10px'
    } ,
    Active:{
     background: theme.palette.success.main,
    },
    Down:{
        background: theme.palette.error.main,
    },
    img:{
        width:'120px',
        height:'120px'
    },
    name:{
        fontFamily: theme.typography.poppinsBold,
        fontWeight:'40px',
        paddingTop:'10px',
        textTransform:'uppercase'
    },
    email:{
        fontFamily: theme.typography.poppinsLight,
    },
    cardBox:{
        height:'140px',
        width:'fit-content',
       
    },
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
    cardType:{
        fontSize:'10px',
        fontFamily: theme.typography.poppinsLight,
        color:theme.palette.secondary.rgbMain
    },
    status:{
        textTransform: 'capitalize',
		whiteSpace: 'nowrap',
		fontFamily: theme.typography.poppinsRegular,
		color: theme.palette.common.white,
        width:'fit-content',
		fontSize: '15px',
		borderRadius: '20px',
		padding: '2px 10px',
		textAlign: 'center',
    } ,
    Succcssfull:{
     background: theme.palette.success.main,
    },
    Decline:{
        background: theme.palette.error.main,
    },
    Pending:{
        background: theme.palette.gradient.bottom,
    },
    closeButton:{
        top:'0',
        right:'0',
        position:'absolute',
        padding:'15px 15px'
    },
    dataGift:{
        display:'flex',
        justifyContent:'space-between'

    },
    paymentTitle:{
        display: 'flex',
    marginTop: '30px',
    justifyContent: 'center',
    color:theme.palette.secondary.rgbMain,
     '& .MuiTypography-h6':{
         fontSize:'25px',
         fontFamily: theme.typography.poppinsBold,
     }   
    },
    menuTitle:{
        
        width:'fit-content',
		fontSize: '15px',
		borderRadius: '20px',
		 padding: '2px 15px',
		textAlign: 'center',
        marginLeft:'10px',
        color: theme.palette.common.white,
        fontFamily: theme.typography.poppinsLight,
        background:theme.palette.gradient.type2.right
    },
    itemsValue:{
        marginTop:'10px',
        width:'fit-content',
		fontSize: '12px',
		
        alignItems:'center',
        fontFamily: theme.typography.poppinsLight,
    }, 
    atmCard:{
        width:'fit-content',
        height:'auto',
        overFlow:'hiden'
    },
    blockBox:{

        flexDirection:'column',
       
      
    },


    blockCard:{
       width:'fit-content',
       margin:'0 auto',
        height:'auto',
        overFlow:'hidden',
       
    },
    blockText:{
        fontSize: '12px',
	   margin:'0 auto',
        alignItems:'center',
         width:'60%',
        fontFamily: theme.typography.poppinsLight,
    },
    proceedBtn:{
        display:'flex',
        justifyContent:'center',
        padding:'20px',
        fontFamily: theme.typography.poppinsLight,
    }

}))