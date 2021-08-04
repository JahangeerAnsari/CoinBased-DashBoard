import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
		primary: {
			main: '#281AC8',
			rgbMain: `rgb(40, 26, 200)`,
			   white:'#fff',
			   backgroundGrey:'#f6f6f6'
		},
		secondary: {
			main: '#FD749B',
			rgbMain: `rgb(253, 116, 155)`,
		},
		btnBackground:{
			
		},
		error: {
			main: '#F85D5D',
		},
		success: {
			main: '#5DF888',
		},
		gradient: {
			right: `linear-gradient(to right, rgba(253, 116, 155, .8), rgba(40, 26, 200, .7))`,
			bottom: `linear-gradient(to bottom, rgba(253, 116, 155, .8), rgba(40, 26, 200, .7))`,
			left: `linear-gradient(to left, rgba(253, 116, 155, .8), rgba(40, 26, 200, .7))`,
			top: `linear-gradient(to top, rgba(253, 116, 155, .8), rgba(40, 26, 200, .7))`,
			type2: {
				top: `linear-gradient(to top, rgba(252, 88, 179, .8), rgba(254, 174, 104,0.7))`,
				bottom: `linear-gradient(to bottom, rgba(252, 88, 179, 1), rgba(254, 174, 104, 1))`,
				right: `linear-gradient(to right, rgba(252, 88, 179, .8), rgba(254, 174, 104,0.7))`,
				left: `linear-gradient(to left, rgba(252, 88, 179, .8), rgba(254, 174, 104,0.7))`,
			}
		},
		text: {
			primary: '#858585',
		},
	},
	typography: {
		fontFamily: 'Poppins Medium',
		body1: {
			fontFamily: 'Poppins',
		},
		poppins: "'Poppins', sans-serif",
		poppinsBold: "'Poppins Bold', sans-serif",
		poppinsExtraBold: "'Poppins Extra Bold', sans-serif",
		poppinsLight: "'Poppins Light', sans-serif",
		poppinsMedium: "'Poppins Medium', sans-serif",
		poppinsRegular: "'Poppins Regular', sans-serif",
		poppinsSemiBold: "'Poppins Semi-Bold', sans-serif",
	},
	action: {
		hover: {
			whiteFilter: `brightness(0) invert(1)`,
		},
	},
	border: {
		main: '#F0F0F0',
	},
});

export default theme;