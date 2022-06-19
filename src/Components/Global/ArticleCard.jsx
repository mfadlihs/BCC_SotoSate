import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import image from '../../Assets/Images/LandingPage/article.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { GlobalButton } from '../../Themes/GlobalButton';

const useStyles = makeStyles(props => ({
	container: {
		padding: '14px',
		aspectRatio: '377 / 504',
		userSelect: 'none',
		borderRadius: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	image: {
		height: '60%',
		marginBottom: 15,
	},
	cover: {
		width: '100%',
		height: '100%',
	},
}));

export default function ArticleCard() {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Box>
				<Box className={classes.image}>
					<img className={classes.cover} src={image} alt='image card' />
				</Box>
				<Typography variant='tiny' display={'block'} mb={'19px'}>
					ARTICLE
				</Typography>
				<Typography variant='h3'>
					Yuk Lebih Melek Finansial dengan 4 Cara Ini!
				</Typography>
			</Box>
			<Box>
				<GlobalButton
					sx={{ float: 'right', fontWeight: 600 }}
					endIcon={<ArrowForwardIcon />}
				>
					Read more
				</GlobalButton>
			</Box>
		</Box>
	);
}

const Image = styled(Box)({
	objectFit: 'cover',
});
