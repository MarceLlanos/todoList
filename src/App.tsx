import { lazy } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { PublicRoutes } from './models';
import { Authentication } from './pages';
import { PageNotFound } from './utilities';

import './App.css';

const LoginPage = lazy(() => import('./pages/Authentication/LoginPage/LoginPage'));

function App() {
	return (
		<div className='App'>
			<Router>
				<PageNotFound>
					<Route path='/' element={ <LoginPage /> } />
					<Route path='/' element={ <Authentication /> }>
						<Route
							path={`/*`}
							element={ <LoginPage /> }
						/>
					</Route>
				</PageNotFound>
			</Router>
		</div>
	);
}

export default App;
