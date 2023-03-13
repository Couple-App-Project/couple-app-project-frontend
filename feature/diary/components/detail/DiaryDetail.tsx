import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { Sliders } from 'components';
import { useQueryDiaryDetail } from 'feature/diary/queries/queryFn';
import { Content, DetailHead } from '../index';
import { useMutationDeleteDiary } from 'feature/diary/queries/mutationFn';

const DiaryDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { isLoading, data } = useQueryDiaryDetail(id);

    const deleteDiaryMutation = useMutationDeleteDiary();

    return (
        <DiaryDetailWrapper>
            <div className="slider-container">
                <DetailHead />
                <Sliders className="slider">
                    {data?.images.map((el: string, i: number) => {
                        return (
                            <div className="slider-items" key={i}>
                                <Image
                                    src={el}
                                    alt={`slider ${i}`}
                                    layout="fill"
                                    className="slider-img"
                                />
                            </div>
                        );
                    })}
                </Sliders>
            </div>
            <div className="inner">
                <Content
                    title={data?.title}
                    content={data?.content}
                    date={data?.calendar?.startDate}
                    disabled
                    edit
                    id={id}
                />
            </div>
            <button onClick={() => deleteDiaryMutation(data.id)}>삭제</button>
        </DiaryDetailWrapper>
    );
};

export default DiaryDetail;

const DiaryDetailWrapper = styled.div`
    .slider-container {
        position: relative;

        .slider-items {
            width: 100%;

            & > span {
                position: unset !important;
                & .slider-img {
                    object-fit: cover !important;
                    position: relative !important;
                    height: 38vh !important;
                }
            }
        }
    }

    .inner {
        padding: 0 1.5rem;
    }
`;
