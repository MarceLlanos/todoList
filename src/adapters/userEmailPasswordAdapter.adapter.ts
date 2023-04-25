import { UserFirebaseEmailPassword } from '@/models';
import { User } from 'firebase/auth';

export const createUserEmailPasswordAdapted = async (
	user: User,
	name: string,
	password: string
) => {
	try {
		const formattedUser: UserFirebaseEmailPassword = {
			email: user.email ?? '',
			uid: user.uid,
			name: name,
			photo: user.photoURL ?? '',
			password: password,
		};

		return formattedUser;
	} catch (error) {}
};
