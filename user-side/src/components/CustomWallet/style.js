import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root:{
        width:'auto',
        height:'320px',
       background: `url("/assets/logo/trophy-background.svg")`,
       borderRadius:'2px',
       marginTop: '30px',
       marginBottom:'20px',
       borderTopRightRadius:'10px',
       borderBottomRightRadius:'10px',
       borderTopLefttRadius:'10px',
       borderBottomLeftRadius:'10px',
       
    },
    headerWallet:{ 
        display: 'flex',
        justifyContent: 'space-between',
        padding: ' 40px 40px',
        

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