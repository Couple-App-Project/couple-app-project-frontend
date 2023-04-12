import { useRouter } from 'next/router';
import styled from 'styled-components';

const RouteButton = () => {
    const router = useRouter();

    return (
        <RouteBtn type="button" onClick={() => router.push('/login')}>
            건너뛰기
        </RouteBtn>
    );
};

export default RouteButton;

const RouteBtn = styled.button`
    border: none;
    position: absolute;
    bottom: 2.5rem;
    right: 2rem;
    color: ${({ theme }) => theme.grey_4};
`;
