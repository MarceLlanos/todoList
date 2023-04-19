import React, { useEffect, useState } from 'react';
import './styles/ErrorBoundary.css';

export interface ErrorBoundaryProps {}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = () => {
	const [error, setError] = useState({
		errorInfo: '',
		hasError: false
	});

	const errorInfo: string = '';
	
	useEffect(() => {
		setError({
			errorInfo: errorInfo,
			hasError: true
		});
	
	}, [error]);
	
	return (
		error && (
			<div className="errorContainer">
			<h1>
				Something went wrong
			</h1>
			<p>
			I apologize for any inconvenience this may have caused. If you would
			like to send me a report of the error, feel free to send me an email
			or a tweet with the details.
			</p>
			<ul>
				<li>
					<a href=""></a>
				</li>
			</ul>
		</div>
		)
	);
};

export default ErrorBoundary;
