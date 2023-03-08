import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const CardContainer = styled.article`
    div {
        width: 100%;
        border-radius: 8px;
    }
`;
const Title = styled.h1`
    ${(props) => props.theme.Title_5}
`;
const ScheduleDate = styled.h2`
    ${(props) => props.theme.Body_3};
    ${(props) => props.theme.grey_4};
`;

const DiaryCard = () => {
    return (
        <CardContainer>
            <div>
                <Image
                    src="/slider_img.png"
                    alt="다이어리 썸네일"
                    // layout="fill"
                    width="100%"
                    height="100%"
                />
            </div>
            <Title>제주도 여행 같이 간 날</Title>
            <ScheduleDate>2023.03.07</ScheduleDate>
        </CardContainer>
    );
};

export default DiaryCard;
