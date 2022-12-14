import router from "next/router";
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
      <CalenderButton onClick={() => router.push("/calendar")}>
        π
      </CalenderButton>
      <br />

      <ProfileSection>
        <Profile />
        <p>D+333</p>
        <Profile />
      </ProfileSection>

      <p>nκ°μ μΌμ </p>

      <style jsx>{`
        p {
          text-align: center;
        }
      `}</style>
    </>
  );
}
