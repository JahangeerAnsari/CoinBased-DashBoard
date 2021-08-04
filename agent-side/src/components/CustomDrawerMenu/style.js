import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    active:{
        background: theme.palette.gradient.bottom,
        '& .MuiTypography-body1':{
            color:theme.palette.common.white
        },
        '& .MuiAvatar-img':{
          filter: theme.action.hover.whiteFilter
        }

    },
    // rounded button
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
    badgeStyle: {
      '& .MuiBadge-anchorOriginTopRightRectangle': {
          background: `linear-gradient(to right bottom, #FD749B, #281AC8)`,
          color: 'white'
      }
  },
}))