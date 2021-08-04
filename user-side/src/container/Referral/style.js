import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
    referrelHeader:{
        fontSize:'34',
        fontFamily: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
        
    },
    getBonusText:{
        marginTop:'15px',
     fontFamily: theme.typography.poppinsLight,
    fontSize: '13px',
    color: theme.palette.text.primary,

    },
    getLink:{
        fontFamily: theme.typography.poppinsLight,
    fontSize: '13px',
    color: theme.palette.text.primary,
    }
}))