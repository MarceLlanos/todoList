import { createUserCredentialAdapted } from '@/adapters';
import { UserFirebase } from '@/models';
import { useAppDispatch } from '@/redux';
import { loginUser } from '@/redux/slices/authUser.slice';
import { loginWithGoogleAccount } from '@/services';
import { FooterLogin, LinkButton } from '@/styled-components';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { UserCredential } from 'firebase/auth';
import { SingInWithGoogle } from '../components';
import { OrDivider } from '../components/OrDivider';
import { RegisterForm } from './components';

import '../styles/Authentitcation.css';

export interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleGoogleSingIn = async () => {
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

	const onLoginClick = () => {
		navigate(`/`, { replace: true });
	};
	return (
		<section className='login columnContainerCentered' aria-labelledby='login'>
			<h1 className='title' id='login'>
				Sing up
			</h1>
			<SingInWithGoogle
				label='Sing up with Google'
				handleClick={handleGoogleSingIn}
			/>

			<OrDivider extraClassName='mt-3 mb-3' />

			<RegisterForm />

			<Divider light />
			<FooterLogin>
				<p>Already have an account?</p>
				<LinkButton onClick={onLoginClick}>Log in</LinkButton>
			</FooterLogin>
		</section>
	);
};

export default RegisterPage;
