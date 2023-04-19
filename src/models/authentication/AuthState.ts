import { ErrorAuth } from "./AuthError";
import { UserFirebase } from "./UserFirebase";

export interface UserAuthState {
    currentUser: UserFirebase | null,
    isAuthenticated: Boolean,
    isLoggingIn: Boolean,
    loginError: string,
    isSigningUp: Boolean,
    signupLoading: Boolean,
    signupErrors: [],
    isLoggingOut: Boolean,
    logoutErrors: [],
}