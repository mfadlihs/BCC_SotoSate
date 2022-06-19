import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import checkbox from '../../../Assets/Images/Checkbox.png';

const useStyles = makeStyles(props => ({
	head: {
		borderRadius: '16px 16px 0 0 ',
		backgroundColor: props.palette.primary2.main,
	},
}));

export default function HeadTable() {
	const classes = useStyles();
	return (
		<Grid container className={classes.head}>
			<Head item md={2.8425}>
				<Typography fontWeight={700} variant='h5'>
					TASK
				</Typography>
			</Head>
			<Head item md={2.12035}>
				<Typography fontWeight={700} variant='h5'>
					AMOUNT
				</Typography>
			</Head>
			<Head item md={2.2432}>
				<Typography fontWeight={700} variant='h5'>
					PERCENTAGES
				</Typography>
			</Head>
			<Head item md={3.93341}>
				<Typography fontWeight={700} variant='h5'>
					SET REMINDER
				</Typography>
			</Head>
			<Head item md={0.86043}>
				<img src={checkbox} />
			</Head>
		</Grid>
	);
}

const Head = styled(Grid)({
	textAlign: 'center',
	padding: '10px 0 10px',
});
