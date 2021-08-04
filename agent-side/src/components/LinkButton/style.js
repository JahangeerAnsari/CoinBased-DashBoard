import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    activeLink:{
        cursor:'pointer',
        fontSize:'14px',
        textAlign:'center',
        background: theme.palette.gradient.bottom,
        color:'white',
        padding:'9px 22px',
        borderRadius:'20px',
        "&:hover": {
            textDecoration: "none",
            color: theme.palette.primary.main,
      
          },
    }
}))