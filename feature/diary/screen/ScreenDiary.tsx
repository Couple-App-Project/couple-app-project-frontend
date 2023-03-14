import Grid from 'components/Grid';
import styled from 'styled-components';
import DiaryCard from '../components/DiaryCard';
import useQueryDiary from 'feature/diary/queries/queryFn/useQueryDiary';
import Bookmark from 'public/icons/bookmark.svg';
import { useEffect, useState } from 'react';

const BookmarkButton = styled.button<{ labelStatus: boolean }>`
    all: unset;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 22px;

    svg {
        fill: ${(props) =>
            props.labelStatus ? props.theme.primaryPink : 'none'};
    }

    path {
        stroke: ${(props) =>
            props.labelStatus ? props.theme.primaryPink : '#000'};
    }
`;

const ScreenDiary = () => {
    const diaryQuery = useQueryDiary();
    const totalDiaries = diaryQuery?.data?.data?.data;

    const [isShowLabels, toggleLabels] = useState(false);
    const [diaries, setDiaries] = useState(totalDiaries);

    const toggleBookmark = () => {
        toggleLabels(!isShowLabels);
        if (isShowLabels) {
            setDiaries(totalDiaries);
        } else {
            setDiaries(totalDiaries.filter((diary: any) => diary.labeled));
        }
    };

    useEffect(() => {
        setDiaries(totalDiaries);
    }, [totalDiaries]);

    return (
        <Grid>
            <BookmarkButton labelStatus={isShowLabels} onClick={toggleBookmark}>
                <Bookmark />
            </BookmarkButton>

            <DiaryWrapper>
                <section className="diary-list">
                    {diaries &&
                        diaries.map((el: any) => {
                            return <DiaryCard key={el.id} diaryInfo={el} />;
                        })}
                </section>
            </DiaryWrapper>
        </Grid>
    );
};

export default ScreenDiary;

const DiaryWrapper = styled.div`
    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 13px;
    }
`;
