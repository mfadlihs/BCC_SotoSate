import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Tombol } from '../../../Components/Page/Manage/Tombol';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { styled } from '@mui/system';
import checkbox from '../../../Assets/Images/Checkbox.png';
import HeadTable from '../../../Components/Page/Manage/HeadTable';
import TableContent from '../../../Components/Page/Manage/TableContent';
import InsightsIcon from '@mui/icons-material/Insights';

const useStyles = makeStyles(props => ({
	container: {
		boxShadow:
			'0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
		borderRadius: '21px',
		padding: '30px',
	},

	button: {
		padding: '8px 69px',
		borderRadius: '8px',
	},
	navWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	nav: {
		boxShadow: '0px 0px 0px 1px gray inset',
		width: 'max-content',
		borderRadius: '8px',
	},
	tableContainer: {},
	save: {
		display: 'flex',
		float: 'right',
		alignItems: 'center',
	},
}));

export default function Report(props) {
	const data = [
		{
			task: 'Beli Beras',
			amount: 100000,
			percentages: '2%',
			date: '06/09/2022',
			time: '08.00 AM',
		},
		{
			task: 'Pembayaran UKT',
			amount: 2500000,
			percentages: '50%',
			date: '12/09/2022',
			time: '07.00 AM',
		},
		{
			task: 'Upgrade PC',
			amount: 1000000,
			percentages: '20%',
			date: '30/09/2022',
			time: '07.00 AM',
		},
	];

	const [rules, setRules] = useState({
		a: true,
		b: false,
		c: false,
	});

	const resetRules = option => {
		// console.log(option);
		setRules({
			a: option == 1 ? true : false,
			b: option == 2 ? true : false,
			c: option == 3 ? true : false,
		});
	};

	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Typography gutterBottom>Daily Expenses - Bulan September</Typography>
			<Typography mb={'30px'} variant='h5'>
				01/09/2022 - 30/09/2022
			</Typography>
			<Box className={classes.navWrapper} mb={'20px'}>
				<Box className={classes.nav}>
					<Tombol
						onClick={() => {
							resetRules(1);
						}}
						variant={rules.a ? 'contained' : 'text'}
						color='complementary21'
					>
						50
					</Tombol>
					<Tombol
						onClick={() => {
							resetRules(2);
						}}
						color='complementary21'
						variant={rules.b ? 'contained' : 'text'}
					>
						30
					</Tombol>
					<Tombol
						onClick={() => {
							resetRules(3);
						}}
						color='complementary21'
						variant={rules.c ? 'contained' : 'text'}
					>
						20
					</Tombol>
				</Box>
				<Tombol variant='outlined' startIcon={<AddCircleOutlineIcon />}>
					Add task
				</Tombol>
			</Box>
			<Box className={classes.tableContainer}>
				<HeadTable />
				{data.map((dat, i) => (
					<TableContent data={dat} key={i} />
				))}
				<Box mb={'120px'} />
				<Box className={classes.save}>
					<Typography mr={'10px'} fontWeight={700} color='primary' variant='h5'>
						Show my Report
					</Typography>
					<InsightsIcon sx={{ marginRight: '20px' }} color='primary' />
					<Tombol variant='contained'>Save</Tombol>
				</Box>
				<Box sx={{ clear: 'both' }} />
			</Box>
		</Box>
	);
}
