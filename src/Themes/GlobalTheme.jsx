import { createTheme } from '@mui/material';

export const Theme = createTheme({
	palette: {
		primary: {
			main: '#215C94',
		},
		primary1: {
			main: '#215C94',
		},
		primary2: {
			main: '#86B4E1',
		},
		primary3: {
			main: '#C1D5E8',
		},
		secondary: {
			main: '#1A2127',
		},
		secondary1: {
			main: '#1A2127',
		},
		secondary2: {
			main: '#353F49',
		},
		secondary3: {
			main: '#889AAB',
		},
		complementary1: {
			main: '#C9A962',
		},
		complementary11: {
			main: '#C9A962',
		},
		complementary12: {
			main: '#E4CB95',
		},
		complementary13: {
			main: '#FFF0CC',
		},
		complementary2: {
			main: '#53A2AB',
		},
		complementary21: {
			main: '#53A2AB',
			contrastText: '#FFF',
		},
		complementary22: {
			main: '#CAE2EB',
		},
		complementary23: {
			main: '#EDEFFB',
		},
		complementary3: {
			main: '#9E3F56',
		},
		complementary31: {
			main: '#9E3F56',
		},
		complementary32: {
			main: '#D27F93',
		},
		complementary33: {
			main: '#EDE0F1',
		},
		success: {
			main: '#2AC769',
		},
		white: {
			main: '#FFFFFF',
		},

		text: {
			primary: '#000000',
			secondary: '#FFFFFF',
			secondary2: '#353F49',
			success: '#2AC769',
		},
	},
	typography: {
		fontFamily: 'Inter',
		h1: {
			fontSize: '56px',
			fontWeight: 600,
		},
		h2: {
			fontWeight: 600,
			fontSize: '46px',
		},
		h3: {
			fontWeight: 600,
			fontSize: '30px',
		},
		/* title */
		h4: {
			fontWeight: 600,
			fontSize: '30px',
		},

		body1: {
			fontWeight: 500,
			fontSize: '24px',
		},

		/* caption */
		body2: {
			fontWeight: 500,
			fontSize: '16px',
		},
		h5: {
			fontWeight: 400,
			fontSize: '14px',
		},
	},
});
