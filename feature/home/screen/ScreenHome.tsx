import React, { useEffect } from 'react';

import router from 'next/router';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import useMutationHome from '../../home/queries/mutationFn/mutationFn';
import { getDday } from 'utils/getDday'
import Profile from '../components/Profile';

const CalenderButton = styled.button`
    float: right;
`;
const ProfileSection = styled.section`
    display: flex;
    justify-content: center;

    & > p {
        text-align: center;
    }
`;
const ScheduleSummary = styled.p`
    text-align: center;
`;

export default function ScreenHome() {
    const queryClient = useQueryClient()
    const mutate = useMutationHome();

    const coupleInfo = queryClient.getQueryData('couple-info')
    useEffect(() => {
        mutate()
        console.log(coupleInfo)
    }, [coupleInfo]);

    const myProfile = { type: '본인', name: coupleInfo?.myNickname, birthday: '1996-05-27' };
    const yourProfile = {
        type: '상대방',
        name: coupleInfo?.yourNickname,
        birthday: '1996-03-27',
    };


    return (
        <>
            <CalenderButton onClick={() => router.push('/calendar')}>
                🗓
            </CalenderButton>
            <br />

            <ProfileSection>
                <Profile profile={myProfile} />
                <p>D+{getDday(coupleInfo?.anniversary)}</p>
                <Profile profile={yourProfile} />
            </ProfileSection>

            <ScheduleSummary>n개의 일정</ScheduleSummary>
        </>
    );
}
