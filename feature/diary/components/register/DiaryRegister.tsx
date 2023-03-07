import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useImage from 'feature/diary/hook/useImage';
import {
    useMutationCreateDiary,
    useMutationEditDiary,
} from 'feature/diary/queries/mutationFn';
import { RegisterHead, RegisterContent, RegisterBar } from '../index';
import { useQueryDiaryDetail } from 'feature/diary/queries/queryFn';

const DiaryWrite = () => {
    const router = useRouter();
    const { id, startDate } = router.query;

    const { isLoading, data } = useQueryDiaryDetail(id);

    useEffect(() => {
        if (data) {
            setDiary({ title: data.title, content: data.content });
            console.log(data.images);
        }
    }, [data]);

    const [diary, setDiary] = useState({ title: '', content: '' });

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiary((prev) => {
            return { ...prev, [e.target.className]: e.target.value };
        });
    };

    const onEmojiClick = (emojiObject: any) => {
        setDiary((prev) => {
            return { ...prev, content: prev.content + emojiObject.emoji };
        });
    };

    const [imgFile, imgUrl, handleUpload, handleDelete] = useImage();

    const createDiaryMutation = useMutationCreateDiary();
    const editDiaryMutation = useMutationEditDiary();

    const onSendDiary = () => {
        const formData = new FormData();

        formData.append('calendarId', id);
        formData.append('title', diary.title);
        formData.append('content', diary.content);

        imgFile.forEach((v) => {
            formData.append('files', v);
        });

        data.id
            ? editDiaryMutation({ diaryId: data.id, data: formData })
            : createDiaryMutation(formData);
    };

    return (
        <DiaryWriteWrapper>
            <RegisterHead onSendDiary={onSendDiary} />
            <RegisterContent
                startDate={startDate || data?.calendar?.startDate}
                diary={diary}
                onChangeContent={onChangeContent}
                imgUrl={imgUrl}
                handleDelete={handleDelete}
            />
            <RegisterBar
                handleUpload={handleUpload}
                onEmojiClick={onEmojiClick}
            />
        </DiaryWriteWrapper>
    );
};

export default DiaryWrite;

const DiaryWriteWrapper = styled.div``;
