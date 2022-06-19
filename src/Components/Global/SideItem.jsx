import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const SideItem = styled(Box, {
	shouldForwardProp: prop => prop !== 'active',
})(props => ({
	padding: '9px 30px',
	backgroundColor: props.active && props.theme.palette.primary3.main,
	borderRadius: '20px',
	display: 'flex',
	alignItems: 'center',
	gap: '20px',
}));
