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

const WriteHeadContainer = styled.div``;
