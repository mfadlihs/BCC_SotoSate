import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArticleCard from '../../../Components/Global/ArticleCard';
import CollectionCard from '../../../Components/Page/LandingPage/CollectionCard';

const useStyles = makeStyles(props => ({
	wrapper: {
		display: 'flex',
		gap: 50,
	},
}));

export default function Articles() {
	const classes = useStyles();

	return (
		<Box py={'75px'}>
			<Typography
				px={['300px']}
				textAlign={'center'}
				color='primary'
				variant='h2'
				mb={'50px'}
			>
				Take a deeper dive into a new way to track your money
			</Typography>
			<Box px={'112px'} className={classes.wrapper}>
				<CollectionCard />
				{/* <ArticleCard /> */}
				<ArticleCard />
				<ArticleCard />
			</Box>
		</Box>
	);
}

function Card() {
	const classes = useStyles();
	return <Box></Box>;
}
