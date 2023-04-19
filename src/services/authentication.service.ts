import { auth, googleProvider } from '@/firebase';
import { AuthUserCredential } from '@/models';
import {
	User,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';

export const getCurrentUser = (): User => auth.currentUser as User;

export const registerWithEmailAndPassword = async ({
	email,
	password,
}: AuthUserCredential): Promise<User> => {
	const userData = await createUserWithEmailAndPassword(auth, email, password)
		.then(({ user }) => user)
		.catch(error => error);
	return userData;
};

export const loginWithEmailAndPassword = async ({
	email,
	password,
}: AuthUserCredential): Promise<User> => {
	const userData = await signInWithEmailAndPassword(auth, email, password)
		.then(({ user }) => user)
		.catch(error => error.message);
	return userData;
};

export const loginWithGoogleAccount = async () => {
	const userData = await signInWithPopup(auth, googleProvider)
		.then(userResult => userResult)
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			return { errorCode, errorMessage, email };
		});

	return userData;
};

export const logput = async () => {
	const currentUserUid = getCurrentUser()?.uid;
	const logout = await signOut(auth);

	return currentUserUid !== '' && logout;
};
