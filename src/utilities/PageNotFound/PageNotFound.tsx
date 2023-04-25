import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/PageNotFound.css';

export interface PageNotFoundProps {
	children: JSX.Element[] | JSX.Element;
}

const PageNotFound: React.FC<PageNotFoundProps> = ({ children }) => {
	return (
		<Routes>
			{children}
			<Route path='*' element={<>Not Found</>} />
		</Routes>
	);
};

export default PageNotFound;
