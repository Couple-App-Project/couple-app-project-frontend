import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useMutationLogin from 'feature/login/queries/mutationFn/mutationFn'

export default function ScreenLogin() {
    const router = useRouter();
    const mutation = useMutationLogin();

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
        // TODO: userAction.login(userInput) 했을 때 요청 바로 가는 문제
        mutation.mutate(userInput)
        router.push('/');
    };

    return (
        <>
            {/* <QueryClientProvider client={queryClient}> */}
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

            {/* TODO : Link 주소 회원가입 페이지로 변경하기 */}
            <Link href="/">
                <button>회원가입</button>
            </Link>
            {/* </QueryClientProvider> */}
        </>
    );
}
