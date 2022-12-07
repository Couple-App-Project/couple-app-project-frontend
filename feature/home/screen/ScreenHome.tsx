import router from 'next/router';
import styled from 'styled-components';
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
    const myProfile = { type: '본인', name: '소윤', birthday: '1996-05-27' };
    const yourProfile = {
        type: '상대방',
        name: '윤소',
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
                <p>D+333</p>
                <Profile profile={yourProfile} />
            </ProfileSection>

            <ScheduleSummary>n개의 일정</ScheduleSummary>
        </>
    );
}
