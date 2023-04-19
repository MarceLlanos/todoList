import React from 'react';
import './styles/SingInWithGoogle.css';
import { OutlinedButton } from '@/styled-components';

export interface SingInWithGoogleProps {
	label: string;
	handleClick: () => {};
}

const SingInWithGoogle: React.FC<SingInWithGoogleProps> = ({
	label,
	handleClick,
}) => {
	return (
		<OutlinedButton className='signInWithGoogle' onClick={handleClick}>
			<img
				src='./src/assets/icons/google.svg'
				alt='Google Icon'
				className='googleIcon'
			/>
			{label}
		</OutlinedButton>
	);
};

export default SingInWithGoogle;
