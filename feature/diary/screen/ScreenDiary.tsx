import Grid from 'components/Grid';
import styled from 'styled-components';
import DiaryCard from '../components/DiaryCard';
import useQueryDiary from 'feature/diary/queries/queryFn/useQueryDiary';

const ScreenDiary = () => {
    const diaryQuery = useQueryDiary();
    const diaries = diaryQuery?.data?.data?.data;

    return (
        <Grid>
            <DiaryWrapper>
                <section className="diary-list">
                    {diaries &&
                        diaries.map((el: any) => {
                            return <DiaryCard key={el} />;
                        })}

                    {/* TODO: diaries 등록된거 생기면 밑에 코드 삭제하기 */}
                    <DiaryCard />
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
