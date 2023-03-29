import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { Sliders } from 'components';
import Modal from 'feature/common/components/Modal';
import { useMutationDeleteDiary } from 'feature/diary/queries/mutationFn';
import { useQueryDiaryDetail } from 'feature/diary/queries/queryFn';
import { DiaryDetailDataType } from 'feature/diary/types';
import ChevronRight from 'public/icons/chevron-right.svg';
import Delete from 'public/icons/trash.svg';
import DefaultIcon from 'public/images/icons/diary-default.svg';
import Edit from 'public/images/icons/edit.svg';
import { pixelToRem } from 'utils/utils';
import { Content, DetailHead } from '../index';

const DiaryDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data }: { data?: DiaryDetailDataType } = useQueryDiaryDetail(
        Number(id),
    );

    console.log(id, data);
    /**
     * modal Fn
     */
    const [isModal, setIsModal] = useState<boolean>(false);

    const handleModal = () => {
        setIsModal(!isModal);
    };

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
                    handleModal={handleModal}
                />
            </div>
            {isModal && (
                <Modal _height="25vh" closeButton={handleModal}>
                    <div className="grid-content">
                        {[
                            <Edit
                                onClick={() =>
                                    router.push(`/diary/register/${id}`)
                                }
                                key="수정"
                            />,
                            <Delete onClick={handlerDelete} key="삭제" />,
                        ].map((el, i) => {
                            return (
                                <div
                                    key={i}
                                    className="meun-content"
                                    onClick={el.props.onClick}
                                >
                                    <div className={`title-icon ${el.key}`}>
                                        {el}
                                        {el.key}
                                    </div>
                                    <ChevronRight stroke="#3B3D49" />
                                </div>
                            );
                        })}
                    </div>
                </Modal>
            )}
        </DiaryDetailWrapper>
    );
};

export default DiaryDetail;

const DiaryDetailWrapper = styled.div`
    position: relative;
    height: 100vh;

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

    .grid-content {
        display: grid;
        align-content: center;
        height: calc(100% - 47px);

        .meun-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 ${pixelToRem(30)};

            .title-icon {
                display: flex;
                justify-content: center;
                align-items: center;
                ${({ theme }) => theme.Body_1};
                color: ${({ theme }) => theme.grey_6};
                &.삭제 {
                    color: ${({ theme }) => theme.red};
                }
                svg {
                    margin-right: ${pixelToRem(12)};
                }
            }

            &:first-of-type {
                margin-bottom: ${pixelToRem(25)};
            }
        }
    }
`;
