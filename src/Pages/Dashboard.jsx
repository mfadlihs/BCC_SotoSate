import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { useSideContext } from '../Context/SideContext';
import Sidebar from '../Layout/Global/Sidebar';
import axios from 'axios';

const useStyles = makeStyles(props => ({
	container: {
		boxShadow:
			'0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',

		padding: '30px',
		borderRadius: '20px',
		marginRight: '30px',
	},
	transaction: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

export default function Dashboard() {
	const sideContext = useSideContext();
	const classes = useStyles();

	for (let i in sideContext) {
		sideContext[i] = false;
	}

	sideContext.dashboard = true;

	const [data, setData] = useState([{ description: '', amount: '' }]);

	const ambil = async () => {
		try {
			console.log('coba ambil');
			const req = await axios.get(
				'https://sandbox.onebrick.io/v1/transaction/list?from=2021-10-01&to=2022-10-31',
				{
					headers: {
						Authorization:
							'Bearer access-production-e3a8a654-29d9-11ec-9621-0242ac130002',
					},
				}
			);

			setData(req.data.data);
			console.log(req.data.data);
			console.log(data);
		} catch (e) {}
	};

	useEffect(() => {
		ambil();
	}, []);

	return (
		<Sidebar>
			<Box className={classes.container}>
				{data.map((i, j) => (
					<Box key={j} mb={'20px'} className={classes.transaction}>
						<Typography sx={{ width: '400px' }}>
							{data[0].description}
						</Typography>
						<Typography>{data[0].amount}</Typography>
					</Box>
				))}
				{/* <Box>
					<Typography>{data[0].description}</Typography>
				</Box> */}
			</Box>
		</Sidebar>
	);
}
