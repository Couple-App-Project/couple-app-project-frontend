import React, { useLayoutEffect, useState } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { Calendar, CalendarDayDetail, CalendarAddButton } from '../components';
import { useQueryCalendars } from '../queries/queryFn';

const ScreenCalender = () => {
    const [coupleInfo, setCoupleInfo] = useState({
        anniversary: '',
        backgroundColor: '',
        myBirthday: '',
        myEmail: '',
        myNickname: '',
        myTodayComment: '',
        specialPlace: null,
        yourBirthday: '',
        yourNickname: '',
        yourTodayComment: '',
    });

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            const coupleInfo = window.localStorage.getItem('coupleInfo');
            setCoupleInfo(
                coupleInfo === null
                    ? {
                          anniversary: '',
                          backgroundColor: '',
                          myBirthday: '',
                          myEmail: '',
                          myNickname: '',
                          myTodayComment: '',
                          specialPlace: null,
                          yourBirthday: '',
                          yourNickname: '',
                          yourTodayComment: '',
                      }
                    : JSON.parse(coupleInfo),
            );
        }
    }, []);

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
                )}-${coupleInfo?.anniversary.slice(6)}`}
                myBirthday={`20${selectDate.slice(
                    0,
                    2,
                )}-${coupleInfo.myBirthday.slice(5, 10)}`}
                yourBirthday={`20${selectDate.slice(
                    0,
                    2,
                )}-${coupleInfo.yourBirthday.slice(5, 10)}`}
            />
            <CalendarDayDetail
                selectedDay={selectedDay}
                coupleDay={coupleInfo.anniversary}
                myBirthday={coupleInfo.myBirthday.slice(5, 10)}
                myNickname={coupleInfo.myNickname}
                yourBirthday={coupleInfo.yourBirthday.slice(5, 10)}
                yourNickname={coupleInfo.yourNickname}
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
