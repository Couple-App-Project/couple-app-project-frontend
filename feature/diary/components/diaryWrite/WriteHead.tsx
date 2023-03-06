import styled from 'styled-components';
import Close from 'public/images/icons/close.svg';

const WriteHead = ({ id }: any) => {
    return (
        <WriteHeadContainer>
            <Close />
            <h2>다이어리</h2>
            <span>{id ? '수정' : '저장'}</span>
        </WriteHeadContainer>
    );
};

export default WriteHead;

const WriteHeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    margin-bottom: 1.75rem;

    h2,
    span {
        color: ${(props) => props.theme.grey_6};
    }

    h2 {
        ${(props) => props.theme.Title_4}
    }
    span {
        ${(props) => props.theme.Body_3}
    }
`;
