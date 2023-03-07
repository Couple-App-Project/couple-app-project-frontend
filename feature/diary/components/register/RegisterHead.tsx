import styled from 'styled-components';
import { useRouter } from 'next/router';
import Close from 'public/images/icons/close.svg';

const RegisterHead = ({ onSendDiary }: { onSendDiary: () => void }) => {
    const router = useRouter();
    return (
        <RegisterHeadContainer>
            <Close onClick={() => router.push('/diary')} />
            <h2>다이어리</h2>
            <button onClick={onSendDiary}>저장</button>
        </RegisterHeadContainer>
    );
};

export default RegisterHead;

const RegisterHeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    margin-bottom: 1.75rem;

    h2,
    button {
        color: ${(props) => props.theme.grey_6};
    }

    h2 {
        ${(props) => props.theme.Title_4}
    }
    button {
        background-color: transparent;
        ${(props) => props.theme.Body_3}
    }
`;
