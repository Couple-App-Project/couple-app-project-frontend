import React, { FunctionComponent, ChangeEvent, useState } from "react";
import styled from "styled-components";

interface Props {
  NextStep: () => void;
}

const CoupleCodeStep: FunctionComponent<Props> = ({ NextStep }) => {
  const [coupleCode, setCoupleCode] = useState({
    userCode: "A98YEON619",
    loverCode: "",
  });

  const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCoupleCode((prev) => {
      return { ...prev, loverCode: e.target.value };
    });
  };

  const handlerCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`${coupleCode.userCode}`)
        .then(() => alert("코드가 클립보드에 복사되었습니다."))
        .catch(() => alert("복사를 다시 시도해주세요."));
    } else {
      alert("공유하기가 지원되지 않는 환경 입니다.");
    }
  };

  return (
    <CoupleCodeWrap>
      <div>
        <label>내 커플 코드</label>
        <input type="text" defaultValue={coupleCode.userCode} disabled />
        <button type="button" onClick={handlerCopy}>
          코드복사
        </button>
      </div>
      <div>
        <label>커플 코드를 받으셨나요?</label>
        <input
          type="text"
          value={coupleCode.loverCode}
          onChange={onChangeCode}
        />
      </div>
      <button
        type="button"
        onClick={NextStep}
        disabled={coupleCode.loverCode !== "" ? false : true}
      >
        연결하기
      </button>
    </CoupleCodeWrap>
  );
};

export default CoupleCodeStep;

const CoupleCodeWrap = styled.div``;
