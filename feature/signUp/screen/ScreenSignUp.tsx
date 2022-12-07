import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useInput from '../hooks/useInput';
import useErrorField from '../hooks/useErrorField';

const ScreenSignUp = () => {
    const router = useRouter();

    const [email, onChangeEmail] = useInput('');
    const [pwd, onChangePwd] = useInput('');
    const [pwdConfirm, onChangePwdConfirm] = useInput('');
    const [name, onChangeName] = useInput('');
    const [birthday, onChangeBirthday] = useInput('');

    const [fieldFocus, setFieldFocus] = useState({
        email: false,
        pwd: false,
        pwdConfirm: false,
    });

    const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        setFieldFocus((prev) => {
            return {
                ...prev,
                [e.target.name]: true,
            };
        });
    };

    const [fieldErr, errorHandler] = useErrorField({
        email: false,
        pwd: false,
        pwdConfirm: false,
    });

    const sendSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            Object.values(fieldErr).includes(true) ||
            name === '' ||
            birthday === ''
        ) {
            alert('올바른 값을 입력해 주세요!');
        } else {
            const userSignUp = { email, password: pwd, name, birthday };
            console.log(userSignUp);
            router.push('/coupleinfo');
        }
    };

    return (
        <SignUpWrapper>
            <form className="sign-up-content" onSubmit={sendSignUp}>
                <fieldset>
                    <legend>회원가입</legend>
                    <div className="formbox">
                        <label htmlFor="email">이메일</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                onChangeEmail(e);
                                errorHandler(e);
                            }}
                            onFocus={(e) => focusHandler(e)}
                        />
                        {fieldFocus.email && fieldErr.email && (
                            <p>이메일 형식에 맞게 입력해 주세요.</p>
                        )}
                    </div>
                    <div className="formbox">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            id="password"
                            type="password"
                            name="pwd"
                            value={pwd}
                            onChange={(e) => {
                                onChangePwd(e);
                                errorHandler(e);
                            }}
                            onFocus={(e) => focusHandler(e)}
                        />
                        {fieldFocus.pwd && fieldErr.pwd && (
                            <p>
                                영문자, 숫자, 특수문자 조합으로 8~20자리를
                                입력해주세요.
                            </p>
                        )}
                    </div>
                    <div className="formbox">
                        <label htmlFor="password-confirm">비밀번호 확인</label>
                        <input
                            id="password-confirm"
                            type="password"
                            name="pwdConfirm"
                            value={pwdConfirm}
                            onChange={(e) => {
                                onChangePwdConfirm(e);
                                errorHandler(e, pwd);
                            }}
                            onFocus={(e) => focusHandler(e)}
                        />
                        {fieldFocus.pwdConfirm && fieldErr.pwdConfirm && (
                            <p>비밀번호가 일치하지 않습니다.</p>
                        )}
                    </div>
                    <div className="formbox">
                        <label htmlFor="name">이름</label>
                        <input id="name" value={name} onChange={onChangeName} />
                    </div>
                    <div className="formbox">
                        <label htmlFor="birthday">생년월일</label>
                        <input
                            id="birthday"
                            type="date"
                            value={birthday}
                            onChange={onChangeBirthday}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={
                            Object.values(fieldErr).includes(true) ||
                            name === '' ||
                            birthday === ''
                                ? true
                                : false
                        }
                    >
                        회원가입
                    </button>
                </fieldset>
            </form>
        </SignUpWrapper>
    );
};

export default ScreenSignUp;

const SignUpWrapper = styled.div``;
