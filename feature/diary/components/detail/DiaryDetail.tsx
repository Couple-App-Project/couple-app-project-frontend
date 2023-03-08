import { useRouter } from 'next/router';
import { useQueryDiaryDetail } from 'feature/diary/queries/queryFn';
import Content from '../common/Content';

const DiaryDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { isLoading, data } = useQueryDiaryDetail(id);

    return (
        <div>
            <Content
                title={data?.title}
                content={data?.content}
                date={data?.calendar?.startDate}
                disabled
            />
        </div>
    );
};

export default DiaryDetail;
