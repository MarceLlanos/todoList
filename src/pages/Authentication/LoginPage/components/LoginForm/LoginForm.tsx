import { Alert, TextField } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { createUserAdapted } from '@/adapters';
import { AuthUserCredential, UserFirebase } from '@/models';
import { useAppDispatch, useAppSelector } from '@/redux';
import { loginError, loginUser } from '@/redux/slices/authUser.slice';
import { loginWithEmailAndPassword } from '@/services';
import { PrimaryButton } from '@/styled-components';
import { User } from 'firebase/auth';

import './styles/LoginForm.css';

export interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
	const dispatch = useAppDispatch();
	const isLogging = useAppSelector(({ userAuth }) => userAuth.isLoggingIn);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCredential>();

	const handleSubmitLogin: SubmitHandler<
		AuthUserCredential
	> = async dataUser => {
		try {
			const data: User = await loginWithEmailAndPassword(dataUser);
			const user: UserFirebase = (await createUserAdapted(
				data
			)) as UserFirebase;

			dispatch(loginUser(user));

			isLogging &&
				(errors.root = dispatch(
					loginError(
						'Error the user doesn`t exist please create a new a account o create an accounf using your Google Account'
					)
				));

			// navigate(
			// 	`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`
			// );
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(handleSubmitLogin)}
				className='columnContainerCentered'
			>
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
					{...register('email', {
						required: 'Email is required',
						pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/,
					})}
					error={errors.email ? true : false}
				/>
				{errors.email && (
					<Alert severity='error' id='email-validation' aria-hidden={true}>
						<strong>Error:</strong> Please enter a valid email.
					</Alert>
				)}

				<TextField
					id='outlined-password-input'
					label='Password*'
					type='password'
					autoComplete='current-password'
					margin='normal'
					aria-describedby='password-validation'
					aria-required='true'
					{...register('password', {
						required: true,
						minLength: 5,
					})}
					error={errors.password ? true : false}
				/>
				{errors.password && (
					<Alert severity='error' id='password-validation' aria-hidden={true}>
						<strong>Error:</strong> Please your password must to contain 5 o more characteres.
					</Alert>
				)}
				<PrimaryButton className='mt-3' type='submit'>
					Log in
				</PrimaryButton>
			</form>
		</>
	);
};

export default LoginForm;
