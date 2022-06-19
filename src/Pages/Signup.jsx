import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import Particle from '../Components/Global/Particle';
import { Input } from '../Components/Page/Login/Input';
import { GlobalButton } from '../Themes/GlobalButton';
import { GlobalLink } from '../Themes/GlobalLink';
import axios from 'axios';

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
	checkbox: {
		display: 'flex',
		gap: '10px',
		marginBottom: 60,
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

export default function Signup() {
	const classes = useStyles();

	const [forms, setForms] = useState({ name: '', email: '', password: '' });

	const handleSignup = async e => {
		e.preventDefault();

		try {
			console.log('coba ambil');
			const data = await axios.post(
				'https://bcc-soto-sate.ap-southeast-1.elasticbeanstalk.com/user/signup',
				{ ...forms }
			);

			console.log(data.data);
		} catch (e) {
			console.log('gagalll');
		}
	};

	return (
		<Particle>
			<Box width={['auto', 'auto', '610px']} className={classes.wrapper}>
				<form id='signup' onSubmit={handleSignup} autoComplete='off'>
					<Typography variant='h3'>Create Your Account</Typography>
					<p className={classes.subHead}>It{"'"}s free and easy</p>

					<Typography mb='5px' variant='body2'>
						Name
					</Typography>
					<Input
						type='text'
						sx={{ marginBottom: '20px' }}
						fullWidth
						required
						placeholder='Enter your name'
						autoComplete={false}
						onChange={e => {
							setForms(() => ({
								...forms,
								name: e.target.value,
							}));
						}}
					/>

					<Typography mb='5px' variant='body2'>
						Email
					</Typography>
					<Input
						type='email'
						sx={{ marginBottom: '20px' }}
						fullWidth
						required
						placeholder='Enter your email'
						autoComplete={false}
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
						type='password'
						sx={{ marginBottom: '33px' }}
						fullWidth
						required
						placeholder='Enter your password'
						autoComplete={false}
						onChange={e => {
							setForms(() => ({
								...forms,
								password: e.target.value,
							}));
						}}
					/>

					<Box className={classes.checkbox}>
						<Checkbox required sx={{ padding: 0 }} size='large' />

						<Typography variant='body2' fontSize='14px'>
							By checking the box, I agree that I have read and accepted the
							<span className={classes.span}>Terms of Use </span> and Privacy
							Policy.
						</Typography>
					</Box>

					<Box className={classes.create}>
						<Typography variant='body2' fontWeight={300}>
							Already have an account?{' '}
							<GlobalLink sx={{ color: '#215C94' }} to='/login'>
								Daftar
							</GlobalLink>
						</Typography>
						<GlobalButton type='submit' form='signup' variant='contained'>
							Create Account
						</GlobalButton>
					</Box>
				</form>
				<Button onClick={handleSignup} variant='contained'>
					click
				</Button>
			</Box>
		</Particle>
	);
}
