import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import logo from '../../Assets/Images/logo.png';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import Clear from './Clear';

const useStyles = makeStyles(props => ({
	wrapper: {
		position: 'absolute',
		bottom: '10%',
		left: '10%',
		display: 'flex',
		gap: '10px',
		alignItems: 'center',
		userSelect: 'none',
	},
}));

export default function Particle({ children }) {
	const particleRef = useRef(null);

	function render() {
		particlesJS('particles-js', {
			particles: {
				number: { value: 150, density: { enable: true, value_area: 800 } },
				color: { value: '#ffffff' },
				shape: {
					type: 'circle',
					stroke: { width: 0, color: '#000000' },
					polygon: { nb_sides: 5 },
					image: { src: 'img/github.svg', width: 100, height: 100 },
				},
				opacity: {
					value: 0.5,
					random: false,
					anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
				},
				size: {
					value: 3,
					random: true,
					anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: '#ffffff',
					opacity: 0.4,
					width: 1,
				},
				move: {
					enable: true,
					speed: 6,
					direction: 'none',
					random: false,
					straight: false,
					out_mode: 'out',
					bounce: false,
					attract: { enable: false, rotateX: 600, rotateY: 1200 },
				},
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: { enable: false, mode: 'repulse' },
					onclick: { enable: true, mode: 'push' },
					resize: true,
				},
				modes: {
					grab: { distance: 400, line_linked: { opacity: 1 } },
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3,
					},
					repulse: { distance: 200, duration: 0.4 },
					push: { particles_nb: 4 },
					remove: { particles_nb: 2 },
				},
			},
			retina_detect: true,
		});
	}

	useEffect(() => {
		render();
		// particleRef.current.querySelector('canvas').style = '';
		// particleRef.current.querySelector('canvas').removeAttribute('height');
		// particleRef.current.querySelector('canvas').removeAttribute('width');
	}, []);

	return (
		<Box ref={particleRef} id='particles-js'>
			<Logo />
			{children}
			<Clear />
		</Box>
	);
}

function Logo() {
	const classes = useStyles();

	return (
		<Box className={classes.wrapper}>
			<img src={logo} />
			<Text>My Spend</Text>
		</Box>
	);
}

const Text = styled(Typography)({
	fontFamily: 'Nunito',
	fontStyle: 'normal',
	fontWeight: 800,
	fontSize: '40px',
	lineHeight: '20px',
	color: '#FFFFFF',
});
