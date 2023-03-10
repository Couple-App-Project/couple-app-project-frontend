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

    const urlToFile = async () => {
        let imgArray = [];

        for await (const img of data.images) {
            const imgDownload = await fetch(img);
            const blob = await imgDownload.blob();

            imgArray.push(
                new File([blob], `image ${blob.size}`, {
                    type: blob.type,
                }),
            );
        }

        handleUpload({ target: { files: imgArray } });
    };

    useEffect(() => {
        if (data) {
            setDiary({ title: data.title, content: data.content });
            urlToFile();
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

        //@ts-ignore
        formData.append('calendarId', id);
        formData.append('title', diary.title);
        formData.append('content', diary.content);

        imgFile.forEach((v) => {
            formData.append('files', v);
        });

        data
            ? editDiaryMutation({ diaryId: data.id, data: formData })
            : createDiaryMutation(formData);
    };

    return (
        <DiaryWriteWrapper>
            <RegisterHead onSendDiary={onSendDiary} isEdit={data} />
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
