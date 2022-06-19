import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import calculate from '../../../Assets/Images/LandingPage/calculate.png';
import periodic from '../../../Assets/Images/LandingPage/periodic.png';
import realtime from '../../../Assets/Images/LandingPage/realtime.png';

const useStyles = makeStyles(props => ({
	container: {
		backgroundColor: props.palette.complementary23.main,
		height: '100vh',
		paddingTop: '120px',
	},
	wrapper: {
		display: 'flex',
		gap: 20,
		justifyContent: 'space-around',
	},
	section: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	image: {
		marginBottom: '28px',
	},
}));

export default function Features() {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Typography mb={'100px'} textAlign='center' color='primary' variant='h2'>
				Keep your budget update
			</Typography>
			<Box className={classes.wrapper} px={['60px']}>
				<Box className={classes.section}>
					<img className={classes.image} src={calculate} />
					<Typography variant='h3' color='primary' gutterBottom>
						Calculate your budget
					</Typography>
					<Typography variant='tiny' textAlign={'center'}>
						We bring togeher all of your accounts, bills and more, so you can
						conveniently manage your finances from one dashboard
					</Typography>
				</Box>
				<Box className={classes.section}>
					<img className={classes.image} src={realtime} />
					<Typography variant='h3' color='primary' gutterBottom>
						Real-time tracker
					</Typography>
					<Typography variant='tiny' textAlign={'center'}>
						We bring togeher all of your accounts, bills and more, so you can
						conveniently manage your finances from one dashboard
					</Typography>
				</Box>
				<Box className={classes.section}>
					<img className={classes.image} src={periodic} />
					<Typography variant='h3' color='primary' gutterBottom>
						Generate periodic report
					</Typography>
					<Typography variant='tiny' textAlign={'center'}>
						We bring togeher all of your accounts, bills and more, so you can
						conveniently manage your finances from one dashboard
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
