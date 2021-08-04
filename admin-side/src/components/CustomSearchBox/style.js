import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    serchBox: {
        position: 'relative',
        background: `linear-gradient(to top , #FD749B, #281AC8)`,

        padding: '0.12em',
        borderRadius: '20px',
        marginRight: '20px',
        width: '30%',
        height: '40px',
    },
    textField: {
        height: '100%',
        background: 'white',
        borderRadius: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            margin: '0 17px'
        },
        '&  .MuiInput-underline:before': {
            borderBottom: 'none'
        },
        '&  .MuiInput-underline:after': {
            borderBottom: 'none'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none'
        }
    },
    
}))