import instance from 'utils/api';
import { LoginForm } from 'types/interface';

export const apis = {
    login: async (loginForm: LoginForm) =>
        await instance.post('/auth/login', { 
            email: loginForm.email,
            password: loginForm.password
         }),
};
