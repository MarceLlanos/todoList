import { UserAuthState } from '@/models/authentication/AuthState.model';
import { UserFirebase } from '@/models/authentication/UserFirebase.model';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserAuthState = {
	currentUser: null,
	isAuthenticated: false,
	isLoggingIn: false,
	loginError: '',
	isSigningUp: false,
	signupLoading: false,
	signupErrors: [],
	isLoggingOut: false,
	logoutErrors: [],
};

export const userAuthSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		loginUser: (state, { payload }: PayloadAction<UserFirebase>) => {
			return {
				...state,
				isLoggingIn: false,
				isAuthenticated: true,
				currentUser: payload,
			};
		},
		loginError: (state, { payload }: PayloadAction<string>) => {
			return {
				...state,
				isLoggingIn: false,
				isAuthenticated: false,
				loginError: payload,
			};
		},
		singUpUser: (state, action: PayloadAction<UserFirebase>) => {
			return {
				...state,
				isSigningUp: false,
				isAuthenticated: true,
				signupLoading: false,
				currentUser: action.payload,
				signupErrors: [],
			};
		},
		singUpError: (state, action) => {
			return {
				...state,
				isAuthenticated: false,
				signupLoading: false,
				signupErrors: action.payload,
			};
		},
		logoutUser: state => {
			return {
				...state,
				isLoggingOut: false,
				isAuthenticated: false,
				currentUser: null,
			};
		},
		logoutError: (state, action) => {
			return {
				...state,
				isLoggingOut: false,
				logoutErrors: action.payload,
			};
		},
	},
});

export const {
	loginUser,
	loginError,
	singUpUser,
	singUpError,
	logoutUser,
	logoutError,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
