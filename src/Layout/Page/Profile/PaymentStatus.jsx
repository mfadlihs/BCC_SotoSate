import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import success from '../../../Assets/Images/success.png';
import fail from '../../../Assets/Images/fail.png';
import CircularProgress from '@mui/material/CircularProgress';
import './spinner.css';
import { GlobalButton } from '../../../Themes/GlobalButton';

const useStyles = makeStyles(props => ({
	container: {
		padding: '30px 40px',
		boxShadow:
			'0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default function PaymentStatus() {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Typography mb={'40px'} fontWeight={700}>
				Payment Status
			</Typography>
			<Box className={classes.content}>
				{/* <img src={success} /> */}
				<Box mb={'50px'} className='spinner' />
				<Typography gutterBottom fontSize={'22px'} fontWeight={600}>
					Your payment is still in the verification stage!
				</Typography>
				<GlobalButton variant='contained'>
					<Typography variant='body2'>Manage it, Now!</Typography>
				</GlobalButton>
			</Box>
		</Box>
	);
}
