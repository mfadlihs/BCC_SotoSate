import { TextField } from '@mui/material';
import { styled } from '@mui/system';

export const Input = styled(TextField, {
	shouldForwardProp: prop => prop !== 'autoComplete',
})(props => ({
	'& input': {
		backgroundColor: '#E8E8E8',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '20px',
	},
}));
