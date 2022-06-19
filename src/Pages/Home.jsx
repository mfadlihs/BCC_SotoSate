import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArticleCard from '../Components/Global/ArticleCard';
import { useSideContext } from '../Context/SideContext';
import Sidebar from '../Layout/Global/Sidebar';

const useStyles = makeStyles(props => ({
	container: {
		display: 'flex',
	},
}));

export default function Home() {
	const classes = useStyles();
	const sideContext = useSideContext();

	for (let i in sideContext) {
		sideContext[i] = false;
	}

	sideContext.home = true;

	return (
		<Sidebar>
			<Box className={classes.container}>
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</Box>
		</Sidebar>
	);
}
