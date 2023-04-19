import { AuthUserCredential, UserFirebase, UserFirebaseEmailPassword } from '@/models';
import { useAppDispatch, useAppSelector } from '@/redux';
import { registerAuthenticationByEmailPassword } from '@/redux/actions/userAuth.action';
import { loginUser, singUpError, singUpUser } from '@/redux/slices/authUser.slice';
import { PrimaryButton } from '@/styled-components';
import { Alert, TextField } from '@mui/material';
import React, { useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './styles/RegisterForm.css';
import { User } from 'firebase/auth';
import { createUserAdapted } from '@/adapters';
import { addDocument, loginWithEmailAndPassword, registerWithEmailAndPassword } from '@/services';
import { createUserEmailPasswordAdapted } from '@/adapters/userEmailPasswordAdapter.adapter';
export interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
	const dispatch = useAppDispatch();
	const isLogging = useAppSelector(({ userAuth }) => userAuth.isLoggingIn);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCredential>();

	const handleSubmitRegister: SubmitHandler<
		AuthUserCredential
	> = async dataUser => {
		try {
			const data: User = await registerWithEmailAndPassword(dataUser);
			const user: UserFirebase = (await createUserAdapted(data)) as UserFirebase;

			dispatch(singUpUser(user));
			await addDocument('user', {
				name: dataUser.userName,
				uid: user.uid,
				email: user.email,
				password: dataUser.password,
				avatar: user.photo
			});

			isLogging &&
				(errors.root = dispatch(
					singUpError(
						'Error the user doesn`t exist please create a new a account o create an accounf using your Google Account'
					)
				));

			// navigate(
			// 	`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`
			// );
			dataUser = {
				email: '',
				password: '',
				userName: ''
			};
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
				onSubmit={handleSubmit(handleSubmitRegister)}
				className='columnContainerCentered'
		>
			<TextField
				id='outlined-name-input'
				label='Your name*'
				type='text'
				autoComplete='userName'
				autoCorrect='off'
				autoCapitalize='off'
				margin='normal'
				aria-describedby='userName-validation'
				aria-required='true'
				{...register('userName', {
					required: 'User name is required',
					pattern: /[a-zA-Z0-9]$/,
				})}
				error={errors.email ? true : false}
			/>
			{errors.email && (
				<Alert severity='error' id='email-validation' aria-hidden={true}>
					<strong>Error:</strong> You must to enter a user name valid.
				</Alert>
			)}
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
					<strong>Error:</strong> Your password must have 5 or more chracters.
				</Alert>
			)}
			<PrimaryButton className='mt-3' type='submit'>
				Sign up
			</PrimaryButton>
		</form>
	);
};

export default RegisterForm;
