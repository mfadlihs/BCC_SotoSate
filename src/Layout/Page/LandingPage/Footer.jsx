import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GlobalButton } from '../../../Themes/GlobalButton';

const useStyles = makeStyles(props => ({
	container: {
		backgroundColor: props.palette.primary.main,
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	wrapper: {
		display: 'flex',
		gap: 45,
	},
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<Box className={classes.container} py={'70px'}>
			<Typography
				variant='h2'
				color='textSecondary'
				textAlign='center'
				mb={'50px'}
			>
				Start track your own money
			</Typography>
			<Box className={classes.center}>
				<Box className={classes.wrapper}>
					<GlobalButton variant='outlined' color='white'>
						See Pricelist
					</GlobalButton>
					<GlobalButton variant='contained' color='primary3'>
						Get Started
					</GlobalButton>
				</Box>
			</Box>
		</Box>
	);
}
