import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import AnniversaryIcon from 'public/icons/upcoming_anniversary.svg';
import BirthdayIcon from 'public/icons/upcoming_birthday.svg';
import CalendarIcon from 'public/icons/upcoming_calendar.svg';
import { pixelToVh, pixelToVw } from 'utils/utils';

const ScheduleContainer = styled.article`
    display: flex;
    align-items: center;
    padding: ${pixelToVh(11)} ${pixelToVw(19)};

    // width: ${pixelToVw(159)};
    min-width: ${pixelToVw(159)};
    height: ${pixelToVh(56)};
    background: #fff;
    border-radius: 4px;

    svg {
        width: 20px;
        height: 20px;
    }

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
                font-family: Apple SD Gothic Neo;
                margin: 0;
                width: ${pixelToVw(96)};
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
`;

const UpcomingSchedule = (props: any) => {
    const { title, startDate, endDate, type, calendarId } = props;

    return (
        <Link
            href={{
                pathname: '/calendar',
                query: { title, startDate, endDate, type },
            }}
            key={calendarId}
        >
            <ScheduleContainer>
                {type !== '기념일' ? (
                    <CalendarIcon />
                ) : title.includes('생일') ? (
                    <BirthdayIcon />
                ) : (
                    <AnniversaryIcon />
                )}
                <div>
                    <p>{startDate}</p>
                    <p>{title}</p>
                </div>
            </ScheduleContainer>
        </Link>
    );
};

export default UpcomingSchedule;
