import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    menuText: {
        display: 'flex',
        fontSize: '18px',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.palette.text.primary,
        '& .MuiIconButton-root ': {
            padding: '0px'
        }

    },
    text: {
        marginTop:'10px',
        marginBottom:'10px',
        fontSize: '16px',
        fontWeight: '600',
        color: theme.palette.text.primary,
        fontFamily: theme.typography.poppinsLight,
       

    },
   

    pageText: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop:'20px',
        '& .MuiAvatar-img': {
            color: 'transparent',
            
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
            textAlign: 'center',
            textIndent: '10000px'
        }
    },
    pageHeading:{
        fontSize:'24',
        fontFamily: theme.typography.poppinsRegular,
		color: theme.palette.text.primary,  
    }
}))