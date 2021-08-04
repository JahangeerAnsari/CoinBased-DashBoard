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
    statticStyle:{
        fontSize:'34',
        fontFamily: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
    },

    //table Status
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
    Active:{
     background: theme.palette.success.main,
    },
    Down:{
        background: theme.palette.error.main,
    },
    Pending:{
        background: theme.palette.gradient.bottom,
    },
    imageStyle:{
        display:'flex',
    },
    name:{
        marginTop:'10px',
        marginLeft:'10px'
    },
   
   viewMoreBtn:{
            paddingTop:'16px',
                display:'flex',
                justifyContent:'center',
                margin:'0 auto',
                fontFamily: theme.typography.poppinsLight,
               border: '1px solid white',
               color:'white',
               paddingBottom:'16px'
        }
    
        
}))