import { useState } from 'react';
import Link from 'next/link';
import useMutationLogin from 'feature/login/queries/mutationFn/mutationFn'

export default function ScreenLogin() {
    const mutate = useMutationLogin();

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
        mutate(userInput)
    };

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    이메일
                    <input
                        type="email"
                        name="email"
                        value={userInput.email}
                        onChange={onChangeInput}
                    />
                </label>
                <br />

                <label>
                    비밀번호
                    <input
                        type="password"
                        name="password"
                        value={userInput.password}
                        onChange={onChangeInput}
                    />
                </label>
                <br />

                <button onClick={handleLogin}>로그인</button>
            </form>

            <Link href="/signup">
                <button>회원가입</button>
            </Link>
        </>
    );
}
