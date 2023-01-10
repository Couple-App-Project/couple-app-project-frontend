import React, { useEffect } from 'react';

import router from 'next/router';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import useMutationHome from '../../home/queries/mutationFn/mutationFn';
import { getDday } from 'utils/getDday'
import { ICoupleInfo } from '../types/CoupleInfo';

const CalenderButton = styled.button`
    float: right;
`;
const ProfileSection = styled.section`
    & > p {
        text-align: center;
    }
`;

export default function ScreenHome() {
    const queryClient = useQueryClient()
    const mutate = useMutationHome();

    const coupleInfo:ICoupleInfo|undefined = queryClient.getQueryData('couple-info')
    useEffect(() => {
        mutate()
    }, [mutate]);

    return (
        <>
            <CalenderButton onClick={() => router.push('/calendar')}>
                🗓
            </CalenderButton>
            <br />

            {coupleInfo &&
            <ProfileSection>
                <p>우리 만난 지 {getDday(coupleInfo.anniversary)}일 째</p>
                <p>{coupleInfo.anniversary}</p>
                <p>
                    <span>{coupleInfo?.myNickname}</span>
                    <span>💖</span>
                    <span>{coupleInfo?.yourNickname}</span>
                </p>
                <div>{coupleInfo?.myTodayComment}</div>
                <div>{coupleInfo?.yourTodayComment}</div>
            </ProfileSection>
            }
        </>
    );
}
