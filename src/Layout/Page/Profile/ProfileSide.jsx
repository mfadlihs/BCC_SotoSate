import { Box, IconButton, Typography } from '@mui/material';
import pp from '../../../Assets/Images/pp.png';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles(props => ({
	container: {
		boxShadow:
			'0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
		height: '100vh',
		padding: '25px 0 50px 25px',
	},

	content: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
}));

export default function ProfileSide() {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Box className={classes.content}>
				<Box component='img' mr='20px' src={pp} />
				<Box mr={'10px'}>
					<Typography>BCC Soto Sate</Typography>
					<Typography fontWeight={300} variant='body2'>
						bccsotosate@gmail.com
					</Typography>
				</Box>
				<IconButton
				// sx={{
				// 	flexGrow: 1,
				// }}
				>
					<EditIcon />
				</IconButton>
			</Box>
		</Box>
	);
}
