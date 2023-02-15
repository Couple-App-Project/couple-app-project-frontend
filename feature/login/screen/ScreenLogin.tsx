import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useMutationLogin from 'feature/login/queries/mutationFn/mutationFn';
import Grid from 'components/Grid';

const Header = styled.header`
    margin-bottom: 50px;

    h1 {
        ${(props) => props.theme.Title_3}
    }
`;
const InputLabel = styled.label`
    display: flex;
    flex-direction: column;

    h2 {
        ${(props) => props.theme.Body_3};
    }

    p {
        margin-bottom: 6px;
        color: ${(props) => props.theme.grey_6};
    }

    input {
        border: 1px solid ${(props) => props.theme.grey_2};
        border-radius: 4px;
        height: 44px;
        padding: 0 14px;
        margin-bottom: 16px;
    }
`;
const LoginButton = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 16px;
    margin-bottom: 24px;
    border-radius: 62px;
    color: ${(props) => (props.disabled ? props.theme.grey_4 : '#fff')};
    background: ${(props) =>
        props.disabled ? props.theme.grey_3 : props.theme.primaryPink};
    font-size: 14px;
    line-height: 20px;
`;
const SignupButton = styled.div`
    text-align: center;
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;

    span {
        color: ${(props) => props.theme.grey_4};
        margin-right: 5px;
    }

    button {
        all: unset;
    }
`;

export default function ScreenLogin() {
    const mutate = useMutationLogin();

    const [disabled, setDisabled] = useState(true);
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
    });

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput((prevInput) => {
            return { ...prevInput, [e.target.name]: e.target.value };
        });
    };
    const handleLogin = () => {
        mutate(userInput);
    };

    useEffect(() => {
        if (userInput.email !== '' && userInput.password !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [userInput]);

    return (
        <Grid paddingTop="94px">
            <Header>
                <h1>반가워요!</h1>
                <h1>로그인 및 가입하기</h1>
            </Header>

            <form onSubmit={(e) => e.preventDefault()}>
                <InputLabel>
                    <h2>이메일</h2>
                    <input
                        type="email"
                        name="email"
                        value={userInput.email}
                        onChange={onChangeInput}
                        placeholder="이메일 입력"
                    />
                </InputLabel>

                <InputLabel>
                    <h2>비밀번호</h2>
                    <input
                        type="password"
                        name="password"
                        value={userInput.password}
                        onChange={onChangeInput}
                        placeholder="비밀번호 입력"
                    />
                </InputLabel>

                <LoginButton disabled={disabled} onClick={handleLogin}>
                    로그인
                </LoginButton>
            </form>

            <SignupButton>
                <span>계정이 없으신가요?</span>
                <Link href="/signup">
                    <button>회원가입</button>
                </Link>
            </SignupButton>
        </Grid>
    );
}
