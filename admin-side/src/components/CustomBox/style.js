import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({
    rootTable:{
        width:'100%',
        height:'auto',
        border:'2px solid',
        marginRight:'auto',
        marginLeft:'auto',
        borderRadius:'5px',
        color:theme.border.main,
        marginTop:'20px',
        background:'white'

    },
    leftTextStyle:{
        fontSize:'34',
        fontFamily: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
      
    },
}))