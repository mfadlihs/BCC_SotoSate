import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../../../Assets/Images/logo.png';
import collection from '../../../Assets/Images/LandingPage/collection.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { GlobalButton } from '../../../Themes/GlobalButton';

const useStyles = makeStyles(props => ({
	container: {
		aspectRatio: '377 / 504',
		backgroundColor: props.palette.primary.main,
		borderRadius: 20,
		padding: '30px',
		userSelect: 'none',
		position: 'relative',
	},
	thumbnail: {
		width: '100%',
		height: '45%',
		borderRadius: 16,
		backgroundColor: 'rgba(193, 213, 232, 0.3)',
	},
}));

export default function CollectionCard() {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Typography variant='body2' mb={'25px'} color='textSecondary'>
				Collection
			</Typography>
			<img alt='logo' src={logo} width='34px' />
			<Typography gutterBottom fontWeight={700} color='textSecondary'>
				My Spend as your personal finance management
			</Typography>
			<Box className={classes.thumbnail}>
				<img src={collection} width={'100%'} height={'100%'} />
			</Box>
			<GlobalButton
				sx={{ position: 'absolute', bottom: 20, right: 40 }}
				color='white'
				endIcon={<ArrowForwardIcon />}
			>
				See All
			</GlobalButton>
		</Box>
	);
}
