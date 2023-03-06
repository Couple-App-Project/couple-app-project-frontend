import styled from 'styled-components';
import useS3Upload from 'hooks/useS3Upload';
import { WriteHead, WriteInput } from '../index';

const DiaryWrite = () => {
    const [uploadToClient, imagesUrl, uploadFile, fileUrl] = useS3Upload();
    return (
        <DiaryWriteWrapper>
            <WriteHead />
            <WriteInput />
        </DiaryWriteWrapper>
    );
};

export default DiaryWrite;

const DiaryWriteWrapper = styled.div``;
