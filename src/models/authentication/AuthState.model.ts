import { ErrorAuth } from './AuthError.model';
import { UserFirebase } from './UserFirebase.model';

export interface UserAuthState {
	currentUser: UserFirebase | null;
	isAuthenticated: Boolean;
	isLoggingIn: Boolean;
	loginError: string;
	isSigningUp: Boolean;
	signupLoading: Boolean;
	signupErrors: [];
	isLoggingOut: Boolean;
	logoutErrors: [];
}
