import React from 'react';
import { DayContent } from 'react-day-picker';
import styled from 'styled-components';
import { pixelToRem } from 'utils/utils';
import type { DayContentPropsType } from 'feature/calender/types';

const CalendarDay = (props: DayContentPropsType) => {
    return (
        <DayWrapper className="day-content">
            <DayContent {...props} />
            <ul className="calendar-circle">
                <li className="anniversary-circle" />
                <li className="date-circle" />
            </ul>
        </DayWrapper>
    );
};

export default CalendarDay;

const DayWrapper = styled.div`
    .calendar-circle {
        position: absolute;
        left: 0px;
        bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        li {
            width: ${pixelToRem(4)};
            height: ${pixelToRem(4)};
            border-radius: 50%;

            &.anniversary-circle {
                background-color: ${({ theme }) => theme.mediumBlue};
            }
            &.date-circle {
                margin-left: 0.1rem;
                background-color: ${({ theme }) => theme.primaryPink};
            }
        }
    }
`;
