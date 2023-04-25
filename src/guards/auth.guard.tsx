import { PublicRoutes, UserFirebase } from '@/models';
import { useAppSelector } from '@/redux';
import { Outlet, Navigate } from 'react-router-dom';

export const AuthGuard = () => {
	const user: UserFirebase = useAppSelector(
		({ userAuth }) => userAuth.currentUser
	) as UserFirebase;

	return user.uid ? <Outlet /> : <Navigate to={`/${PublicRoutes.LOGIN}`} />;
};
