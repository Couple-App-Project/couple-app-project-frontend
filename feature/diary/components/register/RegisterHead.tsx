import { useRouter } from 'next/router';
import styled from 'styled-components';
import Close from 'public/images/icons/close.svg';
import { pixelToRem } from 'utils/utils';
import type { DiaryDetailDataType } from '../../types';

const RegisterHead = ({
    sendDiary,
    isEdit,
}: {
    sendDiary: () => void;
    isEdit: DiaryDetailDataType;
}) => {
    const router = useRouter();
    return (
        <RegisterHeadContainer>
            <Close onClick={() => router.push('/diary')} />
            <h2>다이어리</h2>
            <button onClick={sendDiary}>{isEdit ? '수정' : '저장'}</button>
        </RegisterHeadContainer>
    );
};

export default RegisterHead;

const RegisterHeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${pixelToRem(24)};
    margin-bottom: ${pixelToRem(30)};

    h2,
    button {
        color: ${({ theme }) => theme.grey_6};
    }

    h2 {
        ${({ theme }) => theme.Title_4}
    }
    button {
        background-color: transparent;
        ${({ theme }) => theme.Body_3}
    }
`;
