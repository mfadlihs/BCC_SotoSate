import { Box } from '@mui/material';
import Jumbotron from '../Layout/Global/Jumbotron';
import Nav from '../Layout/Global/Nav';
import Articles from '../Layout/Page/LandingPage/Articles';
import Features from '../Layout/Page/LandingPage/Features';
import Footer from '../Layout/Page/LandingPage/Footer';

export default function LandingPage() {
	return (
		<>
			<Nav />
			<Jumbotron />
			<Features />
			<Articles />
			<Footer />
		</>
	);
}
