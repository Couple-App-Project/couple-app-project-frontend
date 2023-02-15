import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { pixelToVh, pixelToVw } from 'utils/utils';

const ScheduleContainer = styled.article`
    display: flex;
    align-items: center;
    padding: ${pixelToVh(11)} ${pixelToVw(19)};

    width: ${pixelToVw(159)};
    min-width: 159px;
    height: ${pixelToVh(56)};
    background: #fff;
    border-radius: 4px;

    div {
        margin-left: 11px;

        p {
            text-align: left;
    
            &:nth-child(1) {
                ${(props) => props.theme.Body_4};
                color: ${(props) => props.theme.grey_4};
            }
            &:nth-child(2) {
                ${(props) => props.theme.Body_2};
                font-weight: 400;
                margin: 0;
            }
    }
`;

const UpcomingSchedule = () => {
    return (
        <ScheduleContainer>
            <Image
                src="/icons/birthday_pic.png"
                alt="다가오는 일정 아이콘"
                width="16px"
                height="16px"
            />
            <div>
                <p>23.02.28</p>
                <p>제주도 출발</p>
            </div>
        </ScheduleContainer>
    );
};

export default UpcomingSchedule;
