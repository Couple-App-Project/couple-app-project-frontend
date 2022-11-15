import React, { useState } from "react";
import styled from "styled-components";
import {
  InfoStepCount,
  CoupleCodeStep,
  CoupleDataStep,
  CoupleStartStap,
} from "../components";

const ScreenCoupleInfo = () => {
  const [step, setStep] = useState(0);

  const NextStep = () => {
    setStep((prev) => prev + 1);
  };

  const CoupleInfoConent = [
    <CoupleCodeStep key="CoupleCodeStep" NextStep={NextStep} />,
    <CoupleDataStep key="CoupleDataStep" NextStep={NextStep} />,
    <CoupleStartStap key="CoupleStartStap" />,
  ];

  return (
    <CoupleInfoWrap>
      <InfoStepCount />
      <div className="couple-info-content">{CoupleInfoConent[step]}</div>
    </CoupleInfoWrap>
  );
};

export default ScreenCoupleInfo;

const CoupleInfoWrap = styled.div``;
