import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import bri from '../../../Assets/Images/bri.png';
import ovo from '../../../Assets/Images/ovo.png';

const useStyles = makeStyles(props => ({
	container: {
		boxShadow:
			'0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
		borderRadius: '21px',
		padding: '30px 40px',
		width: '100%',
	},
	heading: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	cardContainer: {
		display: 'flex',
		gap: '30px',
	},
	bri: {
		background: `url(${bri})`,
	},
	ovo: {
		background: `url(${ovo})`,
	},

	card: {
		aspectRatio: '302 / 192',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		position: 'relative',
	},
	text: {
		position: 'absolute',
		bottom: 20,
		left: 20,
		userSelect: 'none',
	},
}));

export default function Financial() {
	const classes = useStyles();
	return (
		<Box mb={'30px'} className={classes.container}>
			<Box mb={'30px'} className={classes.heading}>
				<Typography flexGrow={1} fontWeight={700}>
					My Financial Accounts
				</Typography>
				<Typography variant='body2' color='primary'>
					Add Accounts
				</Typography>
			</Box>
			<Box className={classes.cardContainer}>
				<Box className={`${classes.card} ${classes.bri}`} flexGrow={1}>
					<Box className={classes.text}>
						<Typography
							fontSize={'20px'}
							fontWeight={700}
							color={'textSecondary'}
						>
							BCC Soto Sate
						</Typography>
						<Typography variant='body2' color='textSecondary'>
							6621 0865 82458980
						</Typography>
					</Box>
				</Box>
				<Box className={`${classes.card} ${classes.ovo}`} flexGrow={1}>
					<Box className={classes.text}>
						<Typography
							fontSize={'20px'}
							fontWeight={700}
							color={'textSecondary'}
						>
							BCC Soto Sate
						</Typography>
						<Typography variant='body2' color='textSecondary'>
							086789234671
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
