import { lazy } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { PrivateRoutes } from './models';
import { Authentication } from './pages';
import { PageNotFound } from './utilities';

import './App.css';
import { AuthGuard } from './guards/auth.guard';

const LoginPage = lazy(
	() => import('./pages/Authentication/LoginPage/LoginPage')
);
const DashboardPage = lazy(() => import('./pages/Dashboard/Dashboard'));

function App() {
	return (
		<div className='App'>
			<Router>
				<PageNotFound>
					<Route path='/' element={<LoginPage />} />
					<Route path='/' element={<Authentication />}>
						<Route path={`/*`} element={<LoginPage />} />
					</Route>
					<Route path='/' element={<AuthGuard />}>
						<Route
							path={`${PrivateRoutes.PRIVATE}/*`}
							element={<DashboardPage />}
						/>
					</Route>
				</PageNotFound>
			</Router>
		</div>
	);
}

export default App;
