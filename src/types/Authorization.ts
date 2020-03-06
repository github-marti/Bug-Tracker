export interface Authorization {
    isLoggingIn: boolean;
    isLoggingOut: boolean;
    isVerifying: boolean;
    loginError: Error | undefined;
    logoutError: Error | undefined;
    isAuthenticated: boolean;
    user: object;
}
