import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    drawerRoot: {
        paddingLeft: '250px'
    },
    drawer: (open) => ({
        display: 'block',
        background: 'transparent',
        [theme.breakpoints.down('sm')]: (open) => ({
            display: open ? 'block' : 'none ',
            '& .MuiDrawer-paper': {
                position: 'fixed',
                width:'250px',
                top: 0,
                left: 0,
                zIndex: 1500,
                background: 'transparent',
                display: 'flex',
                flexDirection: 'row',
            },
            '& .MuiTypography-displayBlock':{
                    width:'250px'
            },
            '& .MuiPaper-root': {
                width: '100%',
            }
        }),
        
    }),
    drawerContentBox: {
        width: '100%',
        height: '100%',
        background: `rgba(0,0,0, 0.1)`,
        boxShadow:  `10px 0 5px -2px #888`,
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
           
        }
    },

    root: {
        boxShadow: theme.shadows[1],
        zIndex: theme.zIndex.drawer + 1,
    },
    headerLogo: {
        height: 'auto',
        width: 'auto',
        '& .MuiAvatar-img': {
            width: '100px',
            height: 'auto'
        }

    },
    serchBox: {
        position: 'relative',
        background: `linear-gradient(to right bottom, #FD749B, #281AC8)`,
        padding: '0.12em',
        borderRadius: '20px',
        marginRight: '20px',
        width: '30%',
    },
    textField: {
        background: 'white',
        borderRadius: '20px',
        width: '100%',
        '& .img': {
            margin: '15px'
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
    userProfile: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    },

    userName: {
        fontFamily: theme.typography.poppins,
        marginLeft: "10px",
        paddingBottom: '0px',
        fontSize: '14px',
        fontWeight: '600',
        color: theme.palette.text.primary

    },
    notificationIcon: {
        margin: '0px 10px',
        color: '#281AC8',
    },
    badgeStyle: {
        '& .MuiBadge-anchorOriginTopRightRectangle': {
            background: `linear-gradient(to right bottom, #FD749B, #281AC8)`,
            color: 'white'
        }
    },
    drawerList: {
        width: '250px',
        height: '100%',
        paddingTop: '74px',
        background: theme.palette.common.white,
        borderRight: `1px solid rgba(0, 0, 0, 0.12)`,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 0,
            width: '250px',
        }


    },
    bottomList:{
        marginTop:'60px',
        marginLeft: '10px'
    },


    listItem:{
        borderTopRightRadius:'25px',
        borderBottomRightRadius:'25px',
        width:'95%',
        '&:hover':{
          background: theme.palette.gradient.bottom,
          '& .MuiTypography-body1':{
              color:theme.palette.common.white
          },
          '& .MuiAvatar-img':{
            filter: theme.action.hover.whiteFilter
          }
        },
         '& .MuiListItemAvatar-root':{
          width:'auto',
            height:'auto',
            marginRight:'12px',
            minWidth:'auto'
         },
  
        '& .MuiAvatar-root':{
            width:'auto',
            height:'auto'
        },
        '& .MuiTypography-body1':{
            fontSize:'12px',
            fontFamily: theme.typography.poppinsRegular,
        }
  
      },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }
}))