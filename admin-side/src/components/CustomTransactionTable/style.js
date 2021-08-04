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
    Completed:{
     background: theme.palette.success.main,
    },
    Failed:{
        background: theme.palette.error.main,
    },
    InProgress:{
        background: theme.palette.gradient.bottom,
    },
    imageStyle:{
        width:'20px',
        height:'20px',
        color:theme.palette.gradient.top,
        fontFamily:theme.typography.poppinsBold
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