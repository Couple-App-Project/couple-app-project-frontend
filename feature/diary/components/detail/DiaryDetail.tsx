import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useQueryDiaryDetail } from 'feature/diary/queries/queryFn';
import Content from '../common/Content';
import { useMutationDeleteDiary } from 'feature/diary/queries/mutationFn';

const DiaryDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { isLoading, data } = useQueryDiaryDetail(id);

    const deleteDiaryMutation = useMutationDeleteDiary();

    return (
        <div>
            <Inner>
                <Content
                    title={data?.title}
                    content={data?.content}
                    date={data?.calendar?.startDate}
                    disabled
                    edit
                    id={id}
                />
            </Inner>
            <button onClick={() => deleteDiaryMutation(data.id)}>삭제</button>
        </div>
    );
};

export default DiaryDetail;

const Inner = styled.div`
    padding: 0 1.5rem;
`;
