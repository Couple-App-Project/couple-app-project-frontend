import axios from 'axios';
import { LoginForm } from 'types/interface';

const instance = axios.create({
    baseURL: '',
});

export const apis = {
    login: (loginForm: LoginForm) =>
        instance.post('/auth/login', { loginForm }),
};
