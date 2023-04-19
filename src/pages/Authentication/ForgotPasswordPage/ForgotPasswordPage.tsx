import { TextField } from '@mui/material';

import { PrimaryButton } from '@/styled-components';

import '../styles/Authentitcation.css';

export interface ForgotPasswordPageProps {}

const ForgotPasswordPage : React.FC<ForgotPasswordPageProps> = () => {
	return (
		<>
			<section
				className='login columnContainerCentered'
				aria-labelledby='login'
			>
				<h1 className='title' id='login'>
					Reset your password
				</h1>
				<p className='mb-3'>
					Type in your email address below and we'll send you an email with instructions on how to create a new password.
				</p>
				<form className='columnContainerCentered'>
					<TextField
						id='outlined-email-input'
						label='Email*'
						type='email'
						autoComplete='email'
						autoCorrect='off'
						autoCapitalize='off'
						margin='normal'
						aria-describedby='email-validation'
						aria-required='true'
						// {...register('email', {
						// 	required: 'Email is required',
						// 	pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/,
						// })}
						// error={errors.email ? true : false}
					/>
					{/* {errors.email && (
						<Alert severity='error' id='email-validation' aria-hidden={true}>
							<strong>Error:</strong> Please enter a valid email.
						</Alert>
					)} */}
					<PrimaryButton className='mt-3' type='submit'>
						Reset password
					</PrimaryButton>
				</form>
			
			</section>
		</>
	);
};

export default ForgotPasswordPage;
