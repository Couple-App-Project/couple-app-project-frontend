import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import useImage from 'feature/diary/hook/useImage';
import {
    useMutationCreateDiary,
    useMutationEditDiary,
} from 'feature/diary/queries/mutationFn';
import { useQueryDiaryDetail } from 'feature/diary/queries/queryFn';
import { EmojiClickDataType } from 'feature/diary/types';
import { pixelToRem } from 'utils/utils';
import { RegisterHead, RegisterContent, RegisterBar } from '../index';

const DiaryWrite = () => {
    /**
     * 캘린더 상세에서 query로 넘어온 데이터
     */
    const router = useRouter();
    const { id, title, startDate } = router.query;

    /**
     * 다이어리 상세 조회
     */
    const { data } = useQueryDiaryDetail(Number(id));

    const [imgFile, imgUrl, handleUpload, handleDelete] = useImage();

    /**
     * res img blob 객체로 변환 후 업로드
     */
    const urlToFile = useCallback(async () => {
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
    }, [data]);

    useEffect(() => {
        if (data) {
            setDiary({ title: data.title, content: data.content });
            urlToFile();
        }
    }, [data, urlToFile]);

    const [diary, setDiary] = useState({ title: '', content: '' });

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiary((prev) => {
            return { ...prev, [e.target.className]: e.target.value };
        });
    };

    const onEmojiClick = (emojiObject: EmojiClickDataType) => {
        console.log(typeof emojiObject.emoji);
        setDiary((prev) => {
            return { ...prev, content: prev.content + emojiObject.emoji };
        });
    };

    /**
     * 다이어리 생성 또는 수정
     */
    const createDiaryMutation = useMutationCreateDiary();
    const editDiaryMutation = useMutationEditDiary(Number(id));

    const sendDiary = () => {
        const formData = new FormData();

        formData.append('calendarId', id as string);
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
            <RegisterHead sendDiary={sendDiary} isEdit={data} />
            <RegisterContent
                startDate={startDate || data?.calendar?.startDate}
                calendarTitle={title || data?.calendar?.title}
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

const DiaryWriteWrapper = styled.div`
    position: relative;
    height: 100vh;
    padding-top: ${pixelToRem(16)};
`;
