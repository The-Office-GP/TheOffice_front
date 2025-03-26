export interface LoginFormInput {
    email: string;
    password: string;
}

export interface RegisterFormInput {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    wallet: null;
}

export interface UpdateFormInput {
    username: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}