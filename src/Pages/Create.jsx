import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Input } from '../Components/Page/Login/Input';
import { Tombol } from '../Components/Page/Manage/Tombol';
import { useSideContext } from '../Context/SideContext';
import Sidebar from '../Layout/Global/Sidebar';

const useStyles = makeStyles(props => ({
	container: {
		boxShadow:
			'0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
		padding: '30px',
		marginRight: '30px',
		borderRadius: '21px',
		display: 'flex',
		gap: '50px',
		height: '80vh',
		position: 'relative',
	},
	nav: {
		boxShadow: '0px 0px 0px 1px gray inset',
		width: '100%',
		borderRadius: '8px',
		display: 'flex',
	},
	submit: {
		position: 'absolute',
		bottom: 100,
		right: 100,
	},
}));

export default function Create() {
	const classes = useStyles();
	const sideContext = useSideContext();

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

	for (let i in sideContext) {
		sideContext[i] = false;
	}

	sideContext.manage = true;

	const [age, setAge] = useState('BRI');

	const handleChange = event => {
		setAge(event.target.value);
	};

	return (
		<Sidebar create={true}>
			<form>
				<Box className={classes.container}>
					<Box flexBasis={'50%'}>
						<Typography variant='body2'>What is your budget’s name?</Typography>
						<Input
							fullWidth
							sx={{ marginBottom: '17px' }}
							placeholder='Enter name'
						></Input>
						<Typography variant='body2'>Choose Bank/E Wallet</Typography>
						<FormControl
							sx={{ marginBottom: '30px' }}
							color='primary'
							fullWidth
						>
							<Select value={age} onChange={handleChange}>
								<MenuItem value={'BRI'}>BRI</MenuItem>
								<MenuItem value={'BCA'}>BCA</MenuItem>
								<MenuItem value={'OVO'}>OVO</MenuItem>
								<MenuItem value={'Tokopedia'}>Tokopedia</MenuItem>
							</Select>
						</FormControl>
						<Typography variant='body2'>Choose Category</Typography>
						<Box className={classes.nav}>
							<Tombol
								sx={{ flexGrow: 1 }}
								onClick={() => {
									resetRules(1);
								}}
								variant={rules.a ? 'contained' : 'text'}
								color='primary'
							>
								50
							</Tombol>
							<Tombol
								sx={{ flexGrow: 1 }}
								onClick={() => {
									resetRules(2);
								}}
								color='primary'
								variant={rules.b ? 'contained' : 'text'}
							>
								30
							</Tombol>
							<Tombol
								sx={{ flexGrow: 1 }}
								onClick={() => {
									resetRules(3);
								}}
								color='primary'
								variant={rules.c ? 'contained' : 'text'}
							>
								20
							</Tombol>
						</Box>
					</Box>
					<Box flexBasis={'50%'}>
						<Typography variant='body2'>What is your budget?</Typography>
						<Input
							fullWidth
							sx={{ marginBottom: '17px' }}
							placeholder='Enter an amount'
						></Input>
						<Box mb={'200px'} sx={{ display: 'flex', gap: '20px' }}>
							<Box flexGrow={1}>
								<Typography variant='body2'>From</Typography>
								<Input type='date' fullWidth />
							</Box>
							<Box flexGrow={1}>
								<Typography variant='body2'>Until</Typography>
								<Input type='date' fullWidth />
							</Box>
						</Box>
						<Button
							sx={{ float: 'right', padding: '10px 30px' }}
							variant='contained'
						>
							{/* Create Budget */}
							<Typography>Create Budget</Typography>
						</Button>
					</Box>
				</Box>
			</form>
		</Sidebar>
	);
}
