import { Navigate, Route } from 'react-router-dom';

import { PublicRoutes } from '@/models';
import { PageNotFound } from '@/utilities';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';

import './styles/Authentitcation.css';
import { ForgotPasswordPage } from './ForgotPasswordPage';

export interface AuthenticationProps {}

const Authentication: React.FC<AuthenticationProps> = () => {
	return (
		<PageNotFound>
			<Route
				path='/'
				element={<Navigate to={`${PublicRoutes.LOGIN}`} />}
			/>
			<Route path={`${PublicRoutes.LOGIN}/*`} element={<LoginPage />} />
			<Route
				path={`${PublicRoutes.REGISTER}/*`}
				element={<RegisterPage />}
			/>
			<Route
				path={`${PublicRoutes.FORGOTPASSWORD}/*`}
				element={<ForgotPasswordPage />}
			/>
		</PageNotFound>
	);
};

export default Authentication;
