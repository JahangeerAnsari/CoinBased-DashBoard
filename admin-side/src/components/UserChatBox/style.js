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
    chatBox: {
        width: '100%',
        position: 'relative'
    },

    rightSide: {
        width: '100%',
        // borderLeft: '2px solid',
        // marginRight: 'auto',
        // marginLeft: '238px',
        // color: theme.border.main,
        // background: 'white',
        // top:'0',
        // position:'absolute',
        // bottom:'0'
        background: 'red',

    },
    active: {
        background: theme.palette.gradient.bottom,
        '& .MuiTypography-body1': {
            color: theme.palette.common.white
        },
        '& .MuiAvatar-img': {
            filter: theme.action.hover.whiteFilter
        }

    },
    // rounded button
    listItem: {
        // borderTopRightRadius: '25px',
        // borderBottomRightRadius: '25px',

        width: '95%',
        '&:hover': {
            // background: theme.palette.gradient.right,
            '& .MuiTypography-body1': {
                // color: theme.palette.common.white
            },
            // '& .MuiAvatar-img': {
            //     filter: theme.action.hover.whiteFilter
            // }
        },
        '& .MuiListItemAvatar-root': {
            width: 'auto',
            height: 'auto',
            marginRight: '12px',
            minWidth: 'auto'
        },

        '& .MuiAvatar-root': {
            width: 'auto',
            height: 'auto'
        },
        '& .MuiTypography-body1': {
            fontSize: '12px',
            fontFamily: theme.typography.poppinsRegular,
        }

    },
    badge: {
        '& .MuiBadge-anchorOriginTopRightRectangle': {
            background: `linear-gradient(to right bottom, #FD749B, #281AC8)`,
            color: 'white'
        }
    },
    imgStyle: {
        width: '10px',
        height: '10px'
    },
    avatar: {
        '&  img': {
            width: '40px',
            height: '40px'
        }
    },
    badgeStyle: {
        '& .MuiBadge-anchorOriginTopRightRectangle': {
            background: `linear-gradient(to right bottom, #FD749B, #281AC8)`,
            color: 'white'
        }
    },
    listText: {
        fontSize: '18px',
        color: theme.palette.text.primary,
        fontFamily: theme.typography.poppinsBold,
        '& .MuiListItemText-secondary': {
            fontSize: '10px',
            color: theme.palette.text.primary,
            fontFamily: theme.typography.poppinsLight,
        }
    },

    typing: {
        fontSize: '10px',
        color: theme.palette.text.primary,
        fontFamily: theme.typography.poppinsLight,
    },

    msgTime: {
        fontSize: '12px',
        color: theme.palette.text.primary,
        fontFamily: theme.typography.poppinsLight,
        letterSpacing: "0.7857144px",
        paddingTop: '20px',
        paddingBottom: '5px'
    },
    msg: {
        color: theme.palette.text.primary,
        fontFamily: theme.typography.poppinsLight,
        letterSpacing: "0.7857144px",
        padding: '10px',
        borderRadius: '10px',
        fontSize: '14px',
        background: theme.palette.primary.backgroundGrey,
        width: 'fit-content'

    },
    badgeDot: {
        position: 'relative',
        left: '32px',
        bottom: '18px',
        '& .MuiBadge-colorSecondary': {
            backgroundColor: theme.palette.success.main,
        },
    },

    leftAlign: {
        width: '100%',
        paddingRight: '20%'
    },
    rightAlign: {
        width: '100%',
        paddingLeft: '20%',
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))