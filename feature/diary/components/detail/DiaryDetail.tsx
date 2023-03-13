import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { Sliders } from 'components';
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
            <Sliders className="slider-wrap">
                {data?.images.map((el: string, i: number) => {
                    return (
                        <div className="slider-items" key={i}>
                            <Image
                                src={el}
                                alt={`slider 0${i}`}
                                layout="fill"
                                className="slider-img"
                            />
                        </div>
                    );
                })}
            </Sliders>
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
