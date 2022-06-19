import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../../Assets/Images/logo1.png';
import { GlobalLink } from '../../Themes/GlobalLink';

const useStyles = makeStyles(theme => ({
	logo: {
		display: 'flex',
		gap: 16,
	},
	itemWrapper: {
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	navWrapper: {
		gap: 60,
		display: 'flex',
	},
	toolbar: {
		padding: 50,
		backgroundColor: theme.palette.complementary33.main,
	},
}));

export default function Nav() {
	const classes = useStyles();

	return (
		<>
			<AppBar
				sx={{
					paddingTop: '15px',
					paddingBottom: '15px',
					overflow: 'hidden',
				}}
				color='complementary33'
				position='fixed'
			>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						['@media(min-width : 1200px)']: {
							paddingRight: '100px',
							paddingLeft: '100px',
						},
					}}
				>
					<GlobalLink className={classes.logo} to='/'>
						<img src={logo} alt='logo' />
						<Typography fontWeight={700} color='primary' fontFamily='nunito'>
							My Spend
						</Typography>
					</GlobalLink>
					<Box className={classes.itemWrapper}>
						<Box className={classes.navWrapper}>
							<Typography variant='body1'>Features</Typography>
							<Typography variant='body1'>FAQ</Typography>
							<Typography variant='body1'>About</Typography>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
			<Box className={classes.toolbar} />
		</>
	);
}
