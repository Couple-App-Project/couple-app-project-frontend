import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import useMutationHome from '../../home/queries/mutationFn/mutationFn';
import { getDday } from 'utils/getDday';
import { pixelToRem, pixelToVh } from 'utils/utils';
import { ICoupleInfo } from '../types/CoupleInfo';

import ModalBackground from '../components/ModalBackground';
// import ModalTodayComment from '../components/ModalTodayComment';
import UpcomingSchedule from '../components/UpcomingSchedule';
import Grid from 'components/Grid';

import Notification from 'public/icons/notification.svg';
import Heart from 'public/icons/heart.svg';
import Picture from 'public/icons/picture.svg';
import Pencil from 'public/icons/pencil.svg';
import ModalTodayComment from '../components/ModalTodayComment';

const ProfileSection = styled.section`
    height: 100vh;
    background: #ffeeee;
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

        &:nth-child(2) {
            top: 100px;
            left: 50px;
        }
        &:nth-child(3) {
            top: 30px;
            right: 10px;
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
    const queryClient = useQueryClient();
    const mutate = useMutationHome();

    const [openBgModal, setBgModal] = useState(false);
    const [openCommentModal, setCommentModal] = useState(false);

    const coupleInfo: ICoupleInfo | undefined =
        queryClient.getQueryData('couple-info');
    useEffect(() => {
        mutate();
    }, [mutate]);

    return (
        <>
            {openBgModal ? (
                <ModalBackground closeButton={() => setBgModal(false)} />
            ) : null}
            {openCommentModal ? (
                <ModalTodayComment closeButton={() => setCommentModal(false)} />
            ) : null}

            {coupleInfo && (
                <ProfileSection>
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
                                src="/slider_img.png"
                                alt="메인화면 배경사진"
                                layout="fill"
                            />
                            <div className="colorFilter"></div>

                            <article>오늘도 화이팅!</article>
                            <article>즐거운 하루 보내!</article>

                            <IconContainer>
                                <button onClick={() => setBgModal(true)}>
                                    <Picture />
                                </button>
                                <button onClick={() => setCommentModal(true)}>
                                    <Pencil />
                                </button>
                            </IconContainer>
                        </ImageContainer>

                        <div>{coupleInfo?.myTodayComment}</div>
                        <div>{coupleInfo?.yourTodayComment}</div>
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
