import Grid from 'components/Grid';
import styled from 'styled-components';
import DiaryCard from '../components/DiaryCard';
import useQueryDiary from 'feature/diary/queries/queryFn/useQueryDiary';
import Bookmark from 'public/icons/bookmark.svg';
import { useEffect, useState } from 'react';

const BookmarkButton = styled.button<{ selected: boolean }>`
    all: unset;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 22px;

    svg {
        fill: ${(props) => (props.selected ? props.theme.primaryPink : 'none')};
    }

    path {
        stroke: ${(props) =>
            props.selected ? props.theme.primaryPink : '#000'};
    }
`;

const ScreenDiary = () => {
    const diaryQuery = useQueryDiary();
    const totalDiaries = diaryQuery?.data?.data?.data;

    const [showLabels, setShowLabels] = useState(false);
    const [diaries, setDiaries] = useState(totalDiaries);

    const toggleBookmark = () => {
        setShowLabels(!showLabels);
        if (showLabels) {
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
            <BookmarkButton selected={showLabels} onClick={toggleBookmark}>
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
