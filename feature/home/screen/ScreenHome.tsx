import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Grid from 'components/Grid';
import ModalBackground from 'feature/common/components/ModalBackground';
import ModalInput from 'feature/common/components/ModalInput';
import useQueryCoupleInfo from 'feature/coupleInfo/queries/queryFn/useQueryCoupleInfo';

import Heart from 'public/icons/heart.svg';
import Notification from 'public/icons/notification.svg';
import Pencil from 'public/icons/pencil.svg';
import Picture from 'public/icons/picture.svg';
import { getDday } from 'utils/functions';
import { pixelToRem, pixelToVh } from 'utils/utils';
import UpcomingSchedule from '../components/UpcomingSchedule';
import useQueryBackground from '../queries/queryFn/useQueryBackground';
import useQueryUpcoming from '../queries/queryFn/useQueryUpcoming';

const ProfileSection = styled.section<{ background: string }>`
    height: 100vh;
    background: ${(props: any) => props.background ?? '#F5F5F5'};
    overflow: hidden;

    .notification {
        position: absolute;
        top: ${pixelToVh(55)};
        right: 24px;
    }

    p {
        text-align: center;
    }

    p:nth-child(2) {
        font-family: 'Amatic SC';
        font-size: ${pixelToRem(36)};
        line-height: 32px;
        margin-bottom: ${pixelToVh(18)};
    }
`;
const Nickname = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;

    span {
        ${(props) => props.theme.Body_2};
    }
    svg {
        margin: 3px;
    }
`;
const ImageContainer = styled.section`
    width: 100%;
    height: ${pixelToVh(390)};
    background: #fff;
    position: relative;

    .colorFilter {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.16) 0%,
            rgba(0, 0, 0, 0) 100%
        );
        border: 4px solid #fff;
    }

    article {
        position: absolute;
        display: flex;
        align-items: center;

        height: 9%;
        background: rgba(255, 255, 255, 0.12);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 62px;
        padding: 0 12px;

        ${(props) => props.theme.Body_3}

        &:nth-child(4) {
            top: 100px;
            left: 30px;
        }
        &:nth-child(3) {
            top: 30px;
            right: 30px;
        }

        animation: motion 10s linear 0s infinite alternate;
        margin-top: 0;

        @keyframes motion {
            0% {
                margin-top: 0px;
            }
            100% {
                margin-top: 200px;
            }
        }
    }
`;
const IconContainer = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        background: rgba(0, 0, 0, 0.48);
        border-radius: 50%;
        margin-left: 8px;
    }
`;
const ScheduleContainer = styled.section`
    width: 100%;
    overflow: auto;
    display: flex;
    gap: 8px;
    margin-top: 8px;
    padding-left: 24px;
    padding-right: 24px;
    -ms-overflow-style: none; // /* IE, Edge */
    scrollbar-width: none; // /* Firefox */

    &::-webkit-scrollbar {
        display: none; // /* Chrome, Safari, Opera */
    }
`;

export default function ScreenHome() {
    const coupleInfoQuery = useQueryCoupleInfo();
    const upcomingQuery = useQueryUpcoming();
    const coupleInfo = coupleInfoQuery?.data?.data?.data;
    const upcomingSchedules = upcomingQuery?.data?.data?.data;
    console.log(upcomingSchedules);

    const backgroundQuery = useQueryBackground();
    const [backgroundImage, setBackground] = useState(
        '/images/background_image.jpg',
    );

    const [openBgModal, setBgModal] = useState(false);
    const [openCommentModal, setCommentModal] = useState(false);

    const urlToSrc = async (url: string) => {
        const imgDownload = await fetch(url);
        const blob = await imgDownload.blob();

        const image = new File([blob], `image ${blob.size}`, {
            type: blob.type,
        });

        setBackground(URL.createObjectURL(image));
    };

    useEffect(() => {
        const url =
            backgroundQuery?.data?.data?.data[0] ??
            '/images/background_image.jpg';
        if (url !== '/images/background_image.jpg') {
            urlToSrc(url);
        }
    }, [backgroundQuery?.data?.data?.data]);

    return (
        <>
            {openBgModal ? (
                <ModalBackground
                    closeButton={() => setBgModal(false)}
                    background={coupleInfo?.backgroundColor}
                />
            ) : null}
            {openCommentModal ? (
                <ModalInput
                    closeButton={() => setCommentModal(false)}
                    title="오늘의 한마디 작성"
                    placeholder="오늘의 한마디를 입력해 주세요"
                    maxLength="15"
                    buttonText="등록"
                />
            ) : null}

            {coupleInfo && (
                <ProfileSection background={coupleInfo?.backgroundColor}>
                    <Notification className="notification" />
                    <Grid>
                        <Nickname>
                            <span>{coupleInfo?.myNickname}</span>
                            <Heart />
                            <span>{coupleInfo?.yourNickname}</span>
                        </Nickname>
                        <p>D+{getDday(coupleInfo.anniversary)}</p>

                        <ImageContainer>
                            <Image
                                src={backgroundImage}
                                alt="메인화면 배경사진"
                                layout="fill"
                            />
                            <div className="colorFilter"></div>

                            {coupleInfo?.myTodayComment && (
                                <article>{coupleInfo?.myTodayComment}</article>
                            )}
                            {coupleInfo?.yourTodayComment && (
                                <article>
                                    {coupleInfo?.yourTodayComment}
                                </article>
                            )}

                            <IconContainer>
                                <button onClick={() => setBgModal(true)}>
                                    <Picture />
                                </button>
                                <button onClick={() => setCommentModal(true)}>
                                    <Pencil />
                                </button>
                            </IconContainer>
                        </ImageContainer>
                    </Grid>

                    <ScheduleContainer>
                        {upcomingSchedules &&
                            upcomingSchedules.map((el: any) => {
                                return (
                                    <UpcomingSchedule
                                        {...el}
                                        key={el.startDate}
                                    ></UpcomingSchedule>
                                );
                            })}
                    </ScheduleContainer>
                </ProfileSection>
            )}
        </>
    );
}
