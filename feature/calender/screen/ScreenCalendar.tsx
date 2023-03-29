import React, { useState } from 'react';
import { format } from 'date-fns';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userInfoState } from 'recoil/userState';
import { Calendar, CalendarDayDetail, CalendarAddButton } from '../components';
import { useQueryCalendars } from '../queries/queryFn';

const ScreenCalender = () => {
    const userInfo = useRecoilValue(userInfoState);

    /**
     * 사용자 지정 날짜 또는 현재 날짜, 매달 1일
     */
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(
        new Date(),
    );

    /**
     * 현재 년.월 또는 사용자 지정 년.월
     */
    const [selectDate, setSelectDate] = useState(format(new Date(), 'yyMM'));

    const changeDate = (e: Date) => {
        setSelectDate(format(e, 'yyMM'));
        setSelectedDay(e);
    };

    /**
     * Todo.suspense 추후 적용.
     */
    const { isLoading } = useQueryCalendars(selectDate);

    return (
        <CalenderWrapper>
            <Calendar
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                changeDate={changeDate}
                coupleDay={`20${selectDate.slice(
                    0,
                    2,
                )}-${userInfo.anniversary.slice(6)}`}
                myBirthday={`20${selectDate.slice(
                    0,
                    2,
                )}-${userInfo.myBirthday.slice(5, 10)}`}
                yourBirthday={`20${selectDate.slice(
                    0,
                    2,
                )}-${userInfo.yourBirthday.slice(5, 10)}`}
            />
            <CalendarDayDetail
                selectedDay={selectedDay}
                coupleDay={userInfo.anniversary}
                myBirthday={userInfo.myBirthday.slice(5, 10)}
                myNickname={userInfo.myNickname}
                yourBirthday={userInfo.yourBirthday.slice(5, 10)}
                yourNickname={userInfo.yourNickname}
            />
            <CalendarAddButton />
        </CalenderWrapper>
    );
};

export default ScreenCalender;

const CalenderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
