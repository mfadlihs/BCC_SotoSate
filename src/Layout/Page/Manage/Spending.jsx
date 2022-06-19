import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import bri from '../../../Assets/Images/bri.png';
import remaining from '../../../Assets/Images/remaining.png';
import spending from '../../../Assets/Images/spending.png';

const useStyles = makeStyles(props => ({
	container: {
		boxShadow:
			'0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
		padding: '21px 18px',
		width: '300px',
		borderRadius: '21px',
	},
	credit: {
		backgroundImage: `url(${bri})`,
		backgroundSize: 'cover',
		borderRadius: '21px',
		aspectRatio: '302 / 192',
		width: '100%',
		position: 'relative',
	},
	creditDetail: {
		position: 'absolute',
		bottom: 10,
		left: 15,
	},
	remaing: {
		backgroundColor: props.palette.complementary22.main,
		borderRadius: '21px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	spending: {
		borderRadius: '21px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: props.palette.complementary13.main,
	},
}));

export default function Spending() {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Box mb={'25px'} className={classes.credit}>
				<Box className={classes.creditDetail}>
					<Typography fontWeight={700} color='#DCD6EA' fontSize={'20px'}>
						BCC Soto Sate
					</Typography>
					<Typography variant='body2' color='textSecondary'>
						6621 0865 82458980
					</Typography>
				</Box>
			</Box>
			<Box mb={'25px'} py={'25px'} className={classes.remaing}>
				<Box component='img' mb='5px' src={remaining} alt='logo' />
				<Typography
					gutterBottom
					fontWeight={600}
					variant='body2'
					color='text.secondary2'
				>
					Remaining Budget
				</Typography>
				<Typography color='text.success' fontWeight={700}>
					Rp2.000.000
				</Typography>
			</Box>
			<Box py={'25px'} className={classes.spending}>
				<Box component='img' mb='5px' src={spending} alt='logo' />
				<Typography
					gutterBottom
					fontWeight={600}
					variant='body2'
					color='text.secondary2'
				>
					Spending Budget
				</Typography>
				<Typography color='text.success' fontWeight={700}>
					Rp2.000.000
				</Typography>
			</Box>
		</Box>
	);
}
