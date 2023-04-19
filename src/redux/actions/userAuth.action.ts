import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { loginError } from '../slices/authUser.slice';

const dispatch = useAppDispatch();
export const loginErrorAuthentication = () => {
    const { isLoggingIn } = useAppSelector(state => state.userAuth);

    return (
        isLoggingIn === false &&
        dispatch(
            loginError(
                'Error the user doesn`t exist please create a new a account o create an accounf using your Google Account'
            )
        )
    );
};
