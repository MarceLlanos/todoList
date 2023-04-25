import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { MenuSide } from '../MenuSide';
import { NavbarTop } from '../NavbarTop';
import './styles/FrameDashboard.css';

export interface FrameDashboardProps {
	children: JSX.Element[] | JSX.Element;
}

const FrameDashboard: React.FC<FrameDashboardProps> = ({ children }) => {
	return (
		<>
			<Box sx={{ mt: 4 }} />
			<div className='navbar'>
				<div className='navbarTopContainer'>
					<NavbarTop />
				</div>
				<Grid container>
					<Grid item md={1} />
					<Grid item md={2}>
						<MenuSide />
					</Grid>
					<Grid item md={8}>
						<div className='navChildren'>{children}</div>
					</Grid>
					<Grid item md={1} />
				</Grid>
			</div>
		</>
	);
};

export default FrameDashboard;
