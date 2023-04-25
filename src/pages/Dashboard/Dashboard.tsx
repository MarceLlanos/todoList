import { Navigate, Route } from 'react-router-dom';

import { PageNotFound } from '@/utilities';

import './styles/Dashboard.css';
import { PrivateRoutes } from '@/models';
import { InboxPage } from './pages';

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
	return (
		<PageNotFound>
			<Route
				path='/'
				element={<Navigate to={`${PrivateRoutes.DASHBOARD}`} />}
			/>
			<Route path={`/${PrivateRoutes.DASHBOARD}/*`} element={<InboxPage />} />
		</PageNotFound>
	);
};

export default Dashboard;
