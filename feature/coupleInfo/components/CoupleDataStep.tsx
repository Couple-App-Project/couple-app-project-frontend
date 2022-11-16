import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  NextStep: () => void;
}

const CoupleDataStep: FunctionComponent<Props> = ({ NextStep }) => {
  return (
    <CoupleDataWrap>
      <p>커플 정보 입력 페이지</p>
      <button type="button" onClick={NextStep}>
        입력하기
      </button>
    </CoupleDataWrap>
  );
};

export default CoupleDataStep;

const CoupleDataWrap = styled.div``;
