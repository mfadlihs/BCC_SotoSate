import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { Api } from '../Config/api';
import { useAuth } from '../Config/Auth';
import { useSideContext } from '../Context/SideContext';
import Sidebar from '../Layout/Global/Sidebar';
import Financial from '../Layout/Page/Profile/Financial';
import PaymentStatus from '../Layout/Page/Profile/PaymentStatus';
import ProfileSide from '../Layout/Page/Profile/ProfileSide';
import axios from 'axios';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		gap: 30,
	},
});

export default function Profile() {
	const classes = useStyles();
	const sideContext = useSideContext();

	const { id, token } = useAuth();

	const ambil = async () => {
		try {
			console.log('coba ambil');
			const data = await axios.get(
				'https://sandbox.onebrick.io/v1/transaction/list?from=2021-10-01&to=2022-10-31',
				{
					headers: {
						Authorization:
							'Bearer access-production-e3a8a654-29d9-11ec-9621-0242ac130002',
					},
				}
			);

			console.log(data.data);
		} catch (e) {}
	};

	useEffect(() => {
		ambil();
	}, []);

	for (let i in sideContext) {
		sideContext[i] = false;
	}

	sideContext.profile = true;

	return (
		<Sidebar>
			<Box className={classes.container}>
				<Box pb={'50px'} flexGrow={1}>
					<Financial />
					<PaymentStatus />
				</Box>
				<Box width={'380px'}>
					<ProfileSide />
				</Box>
			</Box>
		</Sidebar>
	);
}
