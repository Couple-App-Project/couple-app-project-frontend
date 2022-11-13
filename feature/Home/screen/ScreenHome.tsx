import styled from "styled-components";
import Profile from "../components/Profile";

const CalenderButton = styled.button`
  float: right;
`;
const ProfileSection = styled.section`
  display: flex;
  justify-content: center;
`;

export default function ScreenHome() {
  return (
    <>
      <CalenderButton>🗓</CalenderButton>
      <br />

      <ProfileSection>
        <Profile />
        <p>D+333</p>
        <Profile />
      </ProfileSection>

      <p>n개의 일정</p>

      <style jsx>{`
        p {
          text-align: center;
        }
      `}</style>
    </>
  );
}
