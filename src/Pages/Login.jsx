import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Particle from '../Components/Global/Particle';
import { Input } from '../Components/Page/Login/Input';
import { Api } from '../Config/api';
import { useAuth } from '../Config/Auth';
import { GlobalButton } from '../Themes/GlobalButton';
import { GlobalLink } from '../Themes/GlobalLink';

const useStyles = makeStyles(props => ({
	wrapper: {
		backgroundColor: 'white',
		position: 'relative',
		float: 'right',
		padding: '70px 50px',
		zIndex: 200,
		userSelect: 'none',
		borderRadius: 32,
	},
	subHead: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: '24px',
		lineHeight: '48px',
		letterSpacing: '0.4px',
		marginBottom: 40,
	},
	span: {
		color: props.palette.primary.main,
	},
	create: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));

export default function Login() {
	const classes = useStyles();
	const navigate = useNavigate();

	const { SetAndGetToken } = useAuth();

	const [forms, setForms] = useState({ email: '', password: '' });

	const handleLogin = async e => {
		e.preventDefault();
		// navigate('/profile');

		try {
			console.log('ini ambil');
			const data = await Api.post('/user/login', {
				...forms,
			});

			const token = data.data.data['jwt-token'];
			const id = data.data.data.data.id;

			console.log(token);

			SetAndGetToken(token, id);

			navigate('/profile');
		} catch (e) {
			console.log('error pakk');
		}
	};

	return (
		<Particle>
			<Box width={['auto', 'auto', '610px']} className={classes.wrapper}>
				<form id='login' onSubmit={handleLogin} autoComplete='off'>
					<Typography mb={'60px'} variant='h3'>
						Welcome back!
					</Typography>

					<Typography mb='5px' variant='body2'>
						Email
					</Typography>
					<Input
						placeholder='Enter your email'
						sx={{ marginBottom: '20px' }}
						fullWidth
						type='email'
						autoComplete={false}
						required
						onChange={e => {
							setForms(() => ({
								...forms,
								email: e.target.value,
							}));
						}}
					/>

					<Typography mb='5px' variant='body2'>
						Password
					</Typography>
					<Input
						placeholder='Enter your password'
						sx={{ marginBottom: '33px' }}
						fullWidth
						type='password'
						autoComplete={false}
						required
						onChange={e => {
							setForms(() => ({
								...forms,
								password: e.target.value,
							}));
						}}
					/>

					<Typography
						width='100%'
						display='block'
						textAlign='right'
						color='primary'
						variant='tiny'
						mb='100px'
					>
						Forgot your password?
					</Typography>

					<Box className={classes.create}>
						<Typography variant='body2' fontWeight={300}>
							New user?{' '}
							<GlobalLink sx={{ color: '#215C94' }} to='/signup'>
								Sign up
							</GlobalLink>
						</Typography>
						<GlobalButton type='submit' form='login' variant='contained'>
							Sign In
						</GlobalButton>
					</Box>
				</form>
			</Box>
		</Particle>
	);
}

/*
email: 'useruseer@gmail.com',
password: 'password',
*/
