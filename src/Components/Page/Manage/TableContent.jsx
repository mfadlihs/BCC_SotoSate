import { Box, Checkbox, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles(props => ({
	notif: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}));

export default function TableContent(props) {
	const { data } = props;
	const [notif, setNotif] = useState(true);
	console.log(data);

	const classes = useStyles();
	return (
		<Grid sx={{ borderBottom: '1px solid #ccc' }} container>
			<Table item md={2.8425}>
				<Typography letterSpacing={'0.08em'} fontWeight={400} variant='body2'>
					{data.task}
				</Typography>
			</Table>
			<Table item md={2.12035}>
				<Typography fontWeight={400} variant='body2'>
					Rp{data.amount}
				</Typography>
			</Table>
			<Table item md={2.2432}>
				<Typography textAlign='center' fontWeight={400} variant='body2'>
					{data.percentages}
				</Typography>
			</Table>
			<Table item md={3.93341}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box className={classes.notif}>
							{notif ? (
								<NotificationsActiveIcon
									sx={{ marginRight: '10px' }}
									fontSize='small'
									color='success'
									onClick={() => {
										setNotif(false);
									}}
								/>
							) : (
								<NotificationsOffIcon
									sx={{ marginRight: '10px' }}
									fontSize='small'
									color='error'
									onClick={() => {
										setNotif(true);
									}}
								/>
							)}
						</Box>
						<Typography fontWeight={400} variant='body2'>
							{data.date}
						</Typography>
					</Box>
					<Typography fontWeight={400} variant='body2'>
						{data.time}
					</Typography>
				</Box>
			</Table>
			<Table item md={0.86043}>
				<Checkbox sx={{ color: '#000000', padding: 0 }} size='medium' />
			</Table>
		</Grid>
	);
}

const Table = styled(Grid)({
	padding: '8px 16px',
});
