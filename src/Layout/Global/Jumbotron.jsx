import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import bg from '../../Assets/Images/jumbotron.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { GlobalButton } from '../../Themes/GlobalButton';
import { GlobalLink } from '../../Themes/GlobalLink';

const useStyles = makeStyles(props => ({
	container: {
		backgroundColor: props.palette.complementary33.main,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '90vh',
	},
	carousel: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}));

const Carousel = styled(Box)({
	'&:hover': {
		cursor: 'pointer',
	},
});

export default function Jumbotron() {
	const classes = useStyles();
	return (
		<Box px={'100px'} className={classes.container}>
			<Box width={'55%'} sx={{ userSelect: 'none' }}>
				<Carousel>
					<Swiper
						pagination={{ el: '.swiper-pagination', type: 'bullets' }}
						spaceBetween={50}
						slidesPerView={1}
					>
						{[
							'Manage your finance through one website',
							'All your money in one place',
							'Keep your budget update',
							'Start track your own money',
						].map(i => (
							<SwiperSlide key={i}>
								<Typography variant='h1' fontSize={['64px']} color='primary'>
									{i}
								</Typography>
							</SwiperSlide>
						))}
					</Swiper>
				</Carousel>

				<GlobalLink to='/signup'>
					<GlobalButton
						sx={{
							marginTop: '100px',
							borderRadius: '12px',
						}}
						endIcon={<ArrowForwardIcon />}
						variant='contained'
					>
						Get Started
					</GlobalButton>
				</GlobalLink>
			</Box>
			<Gambar component={'img'} src={bg} />
		</Box>
	);
}

const Kotak = styled(Box)({
	backgroundColor: 'red',
	width: 300,
	height: 300,
});

const Gambar = styled(Box)({
	display: 'block',
});
