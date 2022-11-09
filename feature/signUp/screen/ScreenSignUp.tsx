import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const ScreenSignUp = () => {
  const [email, onChangeEmail] = useInput("");
  const [pwd, onChangePwd] = useInput("");
  const [pwdConfirm, onChangePwdConfirm] = useInput("");
  const [name, onChangeName] = useInput("");
  const [birthday, onChangeBirthday] = useInput("");

  const pwdConfirmText = () => {
    if (pwd !== pwdConfirm) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  };

  const heandleSignUp = () => {
    const userSignUp = { email, password: pwd, name, birthday };
  };

  return (
    <SignUpWrapper>
      <form className="sign-up-content">
        <fieldset>
          <legend>회원가입</legend>
          <div className="formbox">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className="formbox">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              value={pwd}
              onChange={onChangePwd}
            />
          </div>
          <div className="formbox">
            <label htmlFor="password-confirm">비밀번호 확인</label>
            <input
              id="password-confirm"
              type="password"
              value={pwdConfirm}
              onChange={onChangePwdConfirm}
            />
            <p style={pwdConfirmText()}>비밀번호가 일치하지 않습니다.</p>
          </div>
          <div className="formbox">
            <label htmlFor="name">이름</label>
            <input id="name" value={name} onChange={onChangeName} />
          </div>
          <div className="formbox">
            <label htmlFor="birthday">생년월일</label>
            <input
              id="birthday"
              type="date"
              value={birthday}
              onChange={onChangeBirthday}
            />
          </div>
          <button type="submit" onClick={heandleSignUp}>
            회원가입
          </button>
        </fieldset>
      </form>
    </SignUpWrapper>
  );
};

export default ScreenSignUp;

const SignUpWrapper = styled.div``;
