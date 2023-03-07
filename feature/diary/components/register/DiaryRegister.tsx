import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useImage from 'feature/diary/hook/useImage';
import { useMutationCreateDiary } from 'feature/diary/queries/mutationFn';
import { RegisterHead, RegisterContent, RegisterBar } from '../index';

const DiaryWrite = () => {
    const router = useRouter();
    const { id, startDate, endDate } = router.query;
    const [diary, setDiary] = useState({ title: '', content: '' });

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiary((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const [imgFile, imgUrl, handleUpload, handleDelete] = useImage();

    const createDiaryMutation = useMutationCreateDiary();

    const handleCreateDiary = () => {
        const formData = new FormData();

        formData.append('calendarId', id);
        formData.append('title', diary.title);
        formData.append('content', diary.content);

        imgFile.forEach((v) => {
            formData.append('files', v);
        });

        createDiaryMutation(formData);
    };

    return (
        <DiaryWriteWrapper>
            <RegisterHead handleCreateDiary={handleCreateDiary} />
            <RegisterContent
                startDate={startDate}
                endDate={endDate}
                diary={diary}
                onChangeContent={onChangeContent}
                imgUrl={imgUrl}
                handleDelete={handleDelete}
            />
            <RegisterBar handleUpload={handleUpload} />
        </DiaryWriteWrapper>
    );
};

export default DiaryWrite;

const DiaryWriteWrapper = styled.div``;
