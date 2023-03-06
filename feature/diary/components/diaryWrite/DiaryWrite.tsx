import styled from 'styled-components';
import useS3Upload from 'hooks/useS3Upload';
import { WriteHead, WriteInput, WriteBar } from '../index';

const DiaryWrite = () => {
    const [uploadToClient, imagesUrl, uploadFile, fileUrl] = useS3Upload();
    return (
        <DiaryWriteWrapper>
            <WriteHead uploadFile={uploadFile} fileUrl={fileUrl} />
            <WriteInput imagesUrl={imagesUrl} />
            <WriteBar uploadToClient={uploadToClient} />
        </DiaryWriteWrapper>
    );
};

export default DiaryWrite;

const DiaryWriteWrapper = styled.div``;
