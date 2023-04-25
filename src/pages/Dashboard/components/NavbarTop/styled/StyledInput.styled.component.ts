import { OutlinedInput, styled } from '@mui/material';

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
	},
	width: '100%',
}));
