import styled from 'styled-components';
import { WriteHead, WriteInput } from '../index';

const DiaryWrite = () => {
    return (
        <DiaryWriteWrapper>
            <WriteHead />
            <WriteInput />
        </DiaryWriteWrapper>
    );
};

export default DiaryWrite;

const DiaryWriteWrapper = styled.div``;
