import React from 'react';
import { useEffect,useState } from 'react';
import useQueryCalenderDetail from '../queries/queryFn/useQueryCalendarDetail';
import useMutationPostCalendar from '../queries/mutationFn/useMutationPostCalendar';

import Image from 'next/image';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import Radio from '../components/Radio';
import Button from './Button'

import Cancel from 'assets/icons/cancel.svg'
import Calendar from 'assets/icons/calendar.svg';
import Clock from 'assets/icons/clock.svg';
import MarkerPin from 'assets/icons/marker-pin.svg';
import Memo from 'assets/icons/memo.svg';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`
const FieldsetStyle = styled.fieldset`
    all: unset;
    display: flex;
`;


const CalendarForm = () => {
    const router = useRouter();
    const {calendarId} = router.query

    const createCalendar = useMutationPostCalendar();
    const defaultDate = `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2,'0')}`

    let defaultValue = {
        title: '',
        type: '데이트',
        startDate: defaultDate,
        endDate: defaultDate,
        startTime: "00:00",
        endTime: "23:59",
        location: '',
        content: ''
    }


    // useEffect(()=>{

    // }, [])
    const calendarInfo = useQueryCalenderDetail()?.data?.data?.data
    if(calendarId!==undefined) {
        defaultValue = {
            title: calendarInfo?.title,
            type: calendarInfo?.type,
            startDate: calendarInfo?.startDate,
            endDate: calendarInfo?.endDate,
            startTime: calendarInfo?.startTime,
            endTime: calendarInfo?.endTime,
            location: calendarInfo?.location,
            content: calendarInfo?.content
        }
    }

    const [schedule, setSchedule] = useState(defaultValue);

    const scheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'startDateTime') {
            setSchedule({
                ...schedule,
                startDate:value.slice(0,10),
                startTime:value.slice(-5)
            })
        } else if (name === 'endDateTime') {
            setSchedule({
                ...schedule,
                endDate:value.slice(0,10),
                endTime:value.slice(-5)
            })
        } else {
            setSchedule({
                ...schedule,
                [name]: value,
            });
        }
    };

    const postNewSchedule = () => {
        if (schedule.title==='' || schedule.location==='') alert('모든 정보를 입력해주세요')
        createCalendar(schedule)
    }

    return (
        <div>
            <Header>
                <Image src={Cancel} width="16px" height="16px" onClick={() => router.push('/calendar')}/>
                {/* {router.pathname==='/calendar/register'?<h1>일정</h1>:<h1>편집</h1>} */}
                <button onClick={postNewSchedule}>저장</button>
            </Header>
            <br />

            <input
                placeholder="제목"
                name="title"
                value={schedule.title}
                onChange={scheduleChange}
            />

            <FieldsetStyle>
                <Image src={Calendar} width="16px" height="16px"/>
                <Button _onClick={scheduleChange}>데이트</Button>
                <Button _onClick={scheduleChange}>기념일</Button>
                {/* <Radio value="데이트" _onChange={scheduleChange} checked={true}>
                    데이트
                </Radio>
                <Radio value="기념일" _onChange={scheduleChange}>
                    기념일
                </Radio> */}
            </FieldsetStyle>

            <br />
            <Image src={Clock} width="16px" height="16px"/>
            <input
                type="datetime-local"
                name="startDateTime"
                value={schedule.startDate+'T'+schedule.startTime}
                onChange={scheduleChange}
            />
            <input
                type="datetime-local"
                name="endDateTime"
                value={schedule.endDate+'T'+schedule.endTime}
                onChange={scheduleChange}
            />

            <br />
            <Image src={MarkerPin} width="16px" height="16px"/>
            <input
                placeholder="장소"
                name="location"
                value={schedule.location}
                onChange={scheduleChange}
            />

            <br />
            <Image src={Memo} width="16px" height="16px"/>
            <input
                placeholder="메모"
                name="content"
                value={schedule.content}
                onChange={scheduleChange}
            />
        </div>
    );
};

export default CalendarForm;