import React from 'react';
import './styles/LoginPage.css';

import { FooterLogin, LinkButton } from '@/styled-components';
import { Divider } from '@mui/material';
import { SingInWithGoogle } from '../components';
import { OrDivider } from '../components/OrDivider';
import { LoginForm } from './components';
import { UserCredential } from 'firebase/auth';
import { loginWithGoogleAccount } from '@/services';
import { UserFirebase } from '@/models';
import { createUserCredentialAdapted } from '@/adapters';
import { loginUser } from '@/redux/slices/authUser.slice';
import { useAppDispatch } from '@/redux';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	const dispatch = useAppDispatch();

	const handleGoogleLogin = async () => {
		try {
			const data: UserCredential =
				(await loginWithGoogleAccount()) as UserCredential;
			const user: UserFirebase = (await createUserCredentialAdapted(
				data
			)) as UserFirebase;

			dispatch(loginUser(user));
			// navigate(
			// 	`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`
			// );
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<section
				className='login columnContainerCentered'
				aria-labelledby='login'
			>
				<h1 className='title' id='login'>
					Log in
				</h1>
				<SingInWithGoogle
					label='Log in with Google'
					handleClick={handleGoogleLogin}
				/>

				<OrDivider extraClassName='mt-3 mb-3' />

				<LoginForm />

				<nav className='navButton'>
					<LinkButton>Forgot password?</LinkButton>
				</nav>
				<Divider light />
				<FooterLogin>
					<p>Don’t have an account?</p>
					<LinkButton>Sign up</LinkButton>
				</FooterLogin>
			</section>
		</>
	);
};

export default LoginPage;
