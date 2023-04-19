import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { createUserCredentialAdapted } from '@/adapters';
import { PublicRoutes, UserFirebase } from '@/models';
import { useAppDispatch } from '@/redux';
import { loginUser } from '@/redux/slices/authUser.slice';
import { loginWithGoogleAccount } from '@/services';
import { FooterLogin, LinkButton } from '@/styled-components';
import { UserCredential } from 'firebase/auth';
import { SingInWithGoogle } from '../components';
import { OrDivider } from '../components/OrDivider';
import { LoginForm } from './components';

import '../styles/Authentitcation.css';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

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

	const onClickSingUp = () => {
		navigate(`/${PublicRoutes.REGISTER}`, { replace: true });
	};

	const onForgotPasswordClick = () => {
		navigate(`/${PublicRoutes.FORGOTPASSWORD}`, { replace: true });
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
					<LinkButton onClick={onForgotPasswordClick}>
						Forgot password?
					</LinkButton>
				</nav>
				<Divider light />
				<FooterLogin>
					<p>Don’t have an account?</p>
					<LinkButton onClick={onClickSingUp}>Sign up</LinkButton>
				</FooterLogin>
			</section>
		</>
	);
};

export default LoginPage;
