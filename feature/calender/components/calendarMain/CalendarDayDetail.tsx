import Link from 'next/link';
import React from 'react';
import { format } from 'date-fns';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import BirthDay from 'public/images/icons/birthday.svg';
import Heart from 'public/images/icons/heart.svg';
import calendersState from 'recoil/calendersState';
import { changeDate, getDday } from 'utils/functions';
import { pixelToRem } from 'utils/utils';
import type { CalendarMainPropsType } from '../../types';
import { dayArray } from '../../modules/functions';

const CalendarDayDetail = ({
    selectedDay,
    coupleDay,
    myBirthday,
    myNickname,
    yourBirthday,
    yourNickname,
}: CalendarMainPropsType) => {
    const calenderList = useRecoilValue(calendersState);

    const day = format(selectedDay!, 'yyyy-MM-dd');

    /**
     * 해당 년.월 일정 목록 중 사용자 지정 일정과 일치한 배열
     */
    const selectDetailList = dayArray(calenderList).filter((el) =>
        el.dateArray.includes(day),
    );

    return (
        <DayDetailWrpper>
            <div className="day-detail-head">
                <h3>{changeDate(selectedDay!)}</h3>
                {Math.floor(getDday(coupleDay!, selectedDay)) > 0 && (
                    <span>
                        {`사귄 지 ${Math.floor(
                            getDday(coupleDay!, selectedDay),
                        )}일째`}
                    </span>
                )}
            </div>
            <ul>
                {selectDetailList?.map((cur, idx) => {
                    return (
                        <Link href={`/calendar/${cur.calendarId}`} key={idx}>
                            <li>
                                <div className={`${cur.type}`} />
                                <h4>{cur.title}</h4>
                                <span>
                                    {cur.startTime
                                        ? `${cur.startTime} - ${cur.endTime}`
                                        : '작성 시간이 없어요!'}
                                </span>
                            </li>
                        </Link>
                    );
                })}
                {day?.slice(5) === coupleDay?.slice(5) && (
                    <li className="anniversary special">
                        <Heart />
                        <h4>
                            {Number(day?.split('-')[0]) -
                                Number(coupleDay?.split('-')[0]) ===
                            0
                                ? '처음 만난 날'
                                : `${
                                      Number(day?.split('-')[0]) -
                                      Number(coupleDay?.split('-')[0])
                                  }주년`}
                        </h4>
                        <span>하루종일</span>
                    </li>
                )}
                {(day?.slice(5) === myBirthday ||
                    day?.slice(5) === yourBirthday) && (
                    <li className="birthday special">
                        <BirthDay />
                        <h4>{`${
                            day?.slice(5) === myBirthday
                                ? myNickname
                                : yourNickname
                        } 생일`}</h4>
                        <span>하루종일</span>
                    </li>
                )}
            </ul>
        </DayDetailWrpper>
    );
};

export default CalendarDayDetail;

const DayDetailWrpper = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.grey_1};
    padding: ${pixelToRem(16)} ${pixelToRem(24)};
    margin-bottom: 12vh;
    overflow: auto;

    h3,
    h4 {
        color: ${({ theme }) => theme.grey_6};
        ${({ theme }) => theme.Body_2};
    }

    .day-detail-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: ${pixelToRem(12)};

        span {
            color: ${({ theme }) => theme.grey_4};
            ${({ theme }) => theme.Body_3};
        }
    }

    ul {
        li {
            position: relative;
            padding: ${pixelToRem(16)} 0 ${pixelToRem(16)} ${pixelToRem(56)};
            background-color: ${({ theme }) => theme.white};
            border: 1px solid ${({ theme }) => theme.grey_2};
            border-radius: 6px;

            &:not(:last-child) {
                margin-bottom: ${pixelToRem(8)};
            }

            div {
                position: absolute;
                left: ${pixelToRem(24)};
                top: 50%;
                transform: translateY(-50%);
                width: ${pixelToRem(8)};
                height: ${pixelToRem(8)};
                border-radius: 50%;

                &.기념일 {
                    background-color: ${({ theme }) => theme.mediumBlue};
                }
                &.데이트 {
                    background-color: ${({ theme }) => theme.primaryPink};
                }
            }

            span {
                ${({ theme }) => theme.Body_3}
                color: ${(props) => props.theme.grey_4};
            }

            &.special {
                &.birthday {
                    background-color: ${({ theme }) => theme.softPink};
                    border: 1px solid ${({ theme }) => theme.primaryPink};
                }
                &.anniversary {
                    background-color: ${({ theme }) => theme.softBlue};
                    border: 1px solid ${({ theme }) => theme.mediumBlue};
                }
                svg {
                    position: absolute;
                    left: ${pixelToRem(19)};
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
`;
