export const emailCheck = (email: string) => {
    const _reg =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    return _reg.test(email);
};

export const passwordCheck = (password: string) => {
    const _reg =
        /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,20}$/;

    return _reg.test(password);
};
