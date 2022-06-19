import { Box, Button, Modal, Typography } from '@mui/material';
import { useSideContext } from '../Context/SideContext';
import Sidebar from '../Layout/Global/Sidebar';
import create from '../Assets/Images/createNewBudget.png';
import { GlobalButton } from '../Themes/GlobalButton';
import { makeStyles } from '@mui/styles';
import Spending from '../Layout/Page/Manage/Spending';
import Report from '../Layout/Page/Manage/Report';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(props => ({
	container: {
		display: 'flex',
		gap: '25px',
		paddingRight: '30px',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'fixed',
		zIndex: 1000,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		border: 0,
	},
	modalBox: {
		width: '500px',
		borderRadius: '12px',
		border: `2px solid ${props.palette.primary.main}`,
		backgroundColor: 'white',
		padding: '20px',
	},
}));

export default function Manage() {
	const navigate = useNavigate();
	const classes = useStyles();
	const sideContext = useSideContext();
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	for (let i in sideContext) {
		sideContext[i] = false;
	}

	sideContext.manage = true;

	return (
		<Sidebar>
			<GlobalButton
				sx={{
					padding: '20px 30px',
					borderRadius: '15px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginBottom: '25px',
				}}
				onClick={handleOpen}
				variant='contained'
			>
				<Box component={'img'} mb={'5px'} display='block' src={create} />
				<Typography lineHeight={'14px'} variant='tiny' fontWeight={700}>
					Create a <br /> new budget
				</Typography>
			</GlobalButton>
			<Box pb={'40px'} className={classes.container}>
				<Box flexGrow={1}>
					<Report handleOpen={handleOpen} />
				</Box>
				<Spending />
			</Box>
			<Modal className={classes.modal} onClose={handleClose} open={open}>
				<Box className={classes.modalBox}>
					<Typography mb={'16px'}>
						Do you want to use 50/30/20 Budget Rule?
					</Typography>
					<Typography mb={'36px'} variant='body2'>
						50% on needs, 30% on wants, and socking away 20% to savings
					</Typography>
					<Box sx={{ float: 'right' }}>
						<GlobalButton variant='outlined' sx={{ marginRight: '10px' }}>
							No, I'm Not
						</GlobalButton>
						<GlobalButton
							onClick={() => {
								navigate('/manage-it/create');
							}}
							variant='contained'
						>
							Yes, I'm use it
						</GlobalButton>
					</Box>
					<Box sx={{ clear: 'both' }} />
				</Box>
			</Modal>
		</Sidebar>
	);
}
