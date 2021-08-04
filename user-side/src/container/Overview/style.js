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
    

    
   
}))