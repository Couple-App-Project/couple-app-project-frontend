import styled from 'styled-components';
import { useRouter } from 'next/router';

const RouteBtnContent = () => {
    const router = useRouter();

    return (
        <RouteBtnWrap>
            <button type="button" onClick={() => router.push('/login')}>
                로그인
            </button>
            <button type="button" onClick={() => router.push('/signup')}>
                회원가입
            </button>
        </RouteBtnWrap>
    );
};

export default RouteBtnContent;

const RouteBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & button {
        width: 120px;
        line-height: 40px;
        border: none;
        font-size: 16px;

        &:first-child {
            margin-bottom: 15px;
        }
    }
`;
