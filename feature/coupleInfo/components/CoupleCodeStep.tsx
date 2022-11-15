import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  NextStep: () => void;
}

const CoupleCodeStep: FunctionComponent<Props> = ({ NextStep }) => {
  return (
    <CoupleCodeWrap>
      <p>커플 코드 입력 페이지</p>
      <button type="button" onClick={NextStep}>
        연결하기
      </button>
    </CoupleCodeWrap>
  );
};

export default CoupleCodeStep;

const CoupleCodeWrap = styled.div``;
