import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Sliders } from 'components';
import { useMutationDeleteDiary } from 'feature/diary/queries/mutationFn';
import { useQueryDiaryDetail } from 'feature/diary/queries/queryFn';
import { DiaryDetailDataType } from 'feature/diary/types';
import DefaultIcon from 'public/images/icons/diary-default.svg';
import { pixelToRem } from 'utils/utils';
import { Content, DetailHead } from '../index';

const DiaryDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data }: { data?: DiaryDetailDataType } = useQueryDiaryDetail(
        Number(id),
    );

    /**
     * 캘린더 삭제
     */
    const deleteDiaryMutation = useMutationDeleteDiary(Number(id));

    const handlerDelete = () => {
        deleteDiaryMutation(data?.id!);
    };

    return (
        <DiaryDetailWrapper>
            <div className="slider-container">
                <DetailHead bookmark={data?.labeled!} />
                {0 < data?.images.length! ? (
                    <Sliders className="sliders" margin="1.25rem">
                        {data!.images.map((el, i) => {
                            return (
                                <div className="slider-items" key={i}>
                                    <Image
                                        src={el}
                                        alt={`slider ${i}`}
                                        layout="fill"
                                        className="slider-img"
                                        priority
                                        placeholder="blur"
                                        blurDataURL={el}
                                    />
                                </div>
                            );
                        })}
                    </Sliders>
                ) : (
                    <div className="default-img">
                        <DefaultIcon />
                    </div>
                )}
            </div>
            <div className="inner">
                <Content
                    calendarTitle={data?.calendar.title!}
                    title={data?.title!}
                    content={data?.content!}
                    date={data?.calendar?.startDate!}
                    disabled
                    edit
                    handlerDelete={handlerDelete}
                    id={Number(id)}
                />
            </div>
        </DiaryDetailWrapper>
    );
};

export default DiaryDetail;

const DiaryDetailWrapper = styled.div`
    .slider-container {
        position: relative;

        .slider-items {
            width: 100%;
            position: relative;

            & > span {
                position: unset !important;
            }
            .slider-img {
                object-fit: cover !important;
                position: relative !important;
                height: 38vh !important;
            }
        }

        .default-img {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${({ theme }) => theme.softPink};
            padding: ${pixelToRem(60)};
            margin-bottom: ${pixelToRem(20)};
            height: 38vh;
        }
    }

    .inner {
        padding: 0 ${pixelToRem(24)};
    }
`;
