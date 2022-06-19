import { Box, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GlobalLink } from '../../Themes/GlobalLink';
import logo from '../../Assets/Images/logo.png';
import version from '../../Assets/Images/setting.png';
import { styled } from '@mui/system';
import { SideItem } from '../../Components/Global/SideItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useSideContext } from '../../Context/SideContext';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useState } from 'react';

export const sideWidth = '256px';

const useStyles = makeStyles(props => ({
	container: {
		display: 'flex',
		width: '100%',
		backgroundColor: 'rgba(193, 213, 232, 0.1)',
	},
	sidebar: {
		width: sideWidth,
		position: 'fixed',
		height: '100vh',
		boxShadow:
			'0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
		padding: '50px 30px 0px 40px',
	},
	back: {
		width: sideWidth,
	},
	content: {
		flexGrow: 1,
		minHeight: '100vh',
		width: `calc(100% - ${sideWidth})`,
		paddingLeft: 36,
	},
	title: {
		display: 'flex',
		gap: 12,
	},
	sideItem: {
		marginBottom: 24,
		display: 'block',
	},
	header: {
		padding: '20px 60px 20px 50px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		marginLeft: '-36px',
		marginBottom: '20px',
		position: 'relative',
		boxShadow:
			'0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
	},
	nav: {
		display: 'flex',
		gap: 40,
	},
	icon: {
		position: 'relative',
	},
	setting: {
		position: 'absolute',
		bottom: -125,
		left: -75,
		borderRadius: '16px',
		backgroundColor: '#FFFFFF',
		padding: '10px 40px',
		// zIndex: 100,
		boxShadow:
			'0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
		color: '#353F49',
	},
	settingItem: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		'&:hover': {
			cursor: 'pointer',
		},
	},
}));

export default function Sidebar(props) {
	const classes = useStyles();

	const [setting, setSetting] = useState(false);

	const sideContext = useSideContext();

	return (
		<Box className={classes.container}>
			<Box className={classes.sidebar}>
				<GlobalLink className={classes.sideItem} to='/home' mb={'40px'}>
					<Box className={classes.title}>
						<img width={'42px'} src={logo} />
						<Typography fontWeight={700} color='primary'>
							My Spend
						</Typography>
					</Box>
				</GlobalLink>
				<GlobalLink className={classes.sideItem} to='/home'>
					<SideItem active={sideContext.home}>
						<HomeOutlinedIcon color='secondary2' />
						<Typography
							variant='body2'
							fontWeight={700}
							color='text.secondary2'
						>
							Home
						</Typography>
					</SideItem>
				</GlobalLink>
				<GlobalLink className={classes.sideItem} to='/dashboard'>
					<SideItem active={sideContext.dashboard}>
						<DashboardIcon color='secondary2' />
						<Typography
							variant='body2'
							fontWeight={700}
							color='text.secondary2'
						>
							Dashboard
						</Typography>
					</SideItem>
				</GlobalLink>
				<GlobalLink className={classes.sideItem} to='/manage-it'>
					<SideItem active={sideContext.manage}>
						<FolderOutlinedIcon color='secondary2' />
						<Typography
							variant='body2'
							fontWeight={700}
							color='text.secondary2'
						>
							Manage It
						</Typography>
					</SideItem>
				</GlobalLink>
				<GlobalLink to='/profile'>
					<SideItem active={sideContext.profile}>
						<PermIdentityOutlinedIcon color='secondary2' />
						<Typography
							variant='body2'
							fontWeight={700}
							color='text.secondary2'
						>
							Profile
						</Typography>
					</SideItem>
				</GlobalLink>
			</Box>
			<Box className={classes.back} />

			<Box className={classes.content}>
				<Box className={classes.header}>
					{props.create ? (
						<Typography variant='h3'>Create a new budget</Typography>
					) : (
						<Typography variant='h3'>
							{sideContext.profile && 'Profile'}
							{sideContext.home && 'Home'}
							{sideContext.dashboard && 'Dashboard'}
							{sideContext.manage && 'Manage It'}
						</Typography>
					)}

					{/* {
						<Typography variant='h3'>
							{sideContext.profile && 'Profile'}
							{sideContext.home && 'Home'}
							{sideContext.dashboard && 'Dashboard'}
							{sideContext.manage && 'Manage It'}
						</Typography>
					} */}
					<Box className={classes.nav}>
						<IconButton>
							<SearchIcon fontSize={'large'} color='primary' />
						</IconButton>
						<Box className={classes.icon}>
							<Box display={!setting && 'none'} className={classes.setting}>
								<Box className={classes.settingItem} mb={'20px'}>
									<GTranslateOutlinedIcon />
									<Typography fontWeight={600} color='secondary' variant='tiny'>
										Language
									</Typography>
								</Box>
								<Box className={classes.settingItem} mb={'20px'}>
									<WbSunnyOutlinedIcon />
									<Typography fontWeight={600} color='secondary' variant='tiny'>
										Appearance
									</Typography>
								</Box>
								<Box className={classes.settingItem}>
									{/* <GTranslateOutlinedIcon /> */}
									<img width={'20px'} src={version} />
									<Typography fontWeight={600} color='secondary' variant='tiny'>
										Version 1.0
									</Typography>
								</Box>
							</Box>
							<IconButton
								onClick={() => {
									setSetting(!setting);
								}}
							>
								<SettingsIcon fontSize={'large'} color='primary' />
							</IconButton>
						</Box>
						<IconButton>
							<NotificationsNoneIcon fontSize={'large'} color='primary' />
						</IconButton>
					</Box>
				</Box>
				{props.children}
			</Box>
		</Box>
	);
}

const Image = styled(Box)({});
