import React, { useState } from 'react';
import styled from 'styled-components';
import { Calendar, CalendarDayDetail, CalendarAddButton } from '../components';
import { format } from 'date-fns';
import { useQueryCalendars } from '../queries/queryFn';
import { useRecoilValue } from 'recoil';
import { userInfoState } from 'recoil/userState';

const ScreenCalender = () => {
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(
        new Date(),
    );

    const [selectDate, setSelectDate] = useState(format(new Date(), 'yyMM'));

    const changeDate = (e: any) => {
        setSelectDate(format(e, 'yyMM'));
        setSelectedDay(e);
    };

    const userInfo = useRecoilValue(userInfoState);

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
