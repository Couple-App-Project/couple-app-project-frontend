import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import useQueryCoupleInfo from 'feature/coupleInfo/queries/queryFn/useQueryCoupleInfo';
import useQueryBackground from '../queries/queryFn/useQueryBackground';
import useImage from 'feature/diary/hook/useImage';
import { getDday } from 'utils/getDday';
import { pixelToRem, pixelToVh } from 'utils/utils';
// import { ICoupleInfo } from '../types/CoupleInfo';

import ModalBackground from 'feature/common/components/ModalBackground';
import ModalInput from 'feature/common/components/ModalInput';
import UpcomingSchedule from '../components/UpcomingSchedule';
import Grid from 'components/Grid';

import Notification from 'public/icons/notification.svg';
import Heart from 'public/icons/heart.svg';
import Picture from 'public/icons/picture.svg';
import Pencil from 'public/icons/pencil.svg';

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
    display: flex;
    gap: 8px;
    margin-top: 8px;
    padding-left: 24px;
`;

export default function ScreenHome() {
    // const [imgFile, imgUrl, handleUpload, handleDelete] = useImage();

    const coupleInfoQuery = useQueryCoupleInfo();
    const coupleInfo = coupleInfoQuery?.data?.data?.data;
    const backgroundQuery = useQueryBackground();
    const [backgroundImage, setBackground] = useState('/slider_img.png');
    // '/slider_img.png' ?? backgroundQuery?.data?.data?.data[0];
    // console.log(backgroundImage);

    const [openBgModal, setBgModal] = useState(false);
    const [openCommentModal, setCommentModal] = useState(false);

    useEffect(() => {
        setBackground(
            '/slider_img.png' ?? backgroundQuery?.data?.data?.data[0],
        );
        console.log(backgroundQuery?.data?.data?.data[0]);
    }, [backgroundQuery]);

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
                        <UpcomingSchedule></UpcomingSchedule>
                        <UpcomingSchedule></UpcomingSchedule>
                        <UpcomingSchedule></UpcomingSchedule>
                    </ScheduleContainer>
                </ProfileSection>
            )}
        </>
    );
}
