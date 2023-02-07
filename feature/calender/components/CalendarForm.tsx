import React from 'react';
import { useEffect,useState } from 'react';
import useQueryCalenderDetail from '../queries/queryFn/useQueryCalendarDetail';
import useMutationPostCalendar from '../queries/mutationFn/useMutationPostCalendar';
import useMutationUpdateCalendar from '../queries/mutationFn/useMutationUpdateCalendar'

import {useRouter} from 'next/router';
import styled from 'styled-components';
import Grid from 'components/Grid';
import Button from './Button'
import FormInput from './FormInput';

import Cancel from 'public/icons/cancel.svg'
import Calendar from 'public/icons/calendar.svg';
import Clock from 'public/icons/clock.svg';
import MarkerPin from 'public/icons/marker-pin.svg';
import Memo from 'public/icons/memo.svg';


const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    button {
        background: #fff;
        font-size: 16px;
        line-height: 18px;
    }
`

const InputCommon = styled.div`
    border-bottom: 1px solid ${props=>props.theme.grey_2};
    display: flex;
    align-items: center;

    svg {
        overflow: visible;
    }
`

const TypeContainer = styled(InputCommon)`
    padding: 11px 0;

    button {
        &:nth-child(2) {
            margin-left: 16px;
        }
        &:last-child {
            margin-left: 8px;
        }
    }
`;
const TimeInputContainer = styled(InputCommon)`
    padding: 18px 0;
    input {
        border: none;
        margin-left: 16px;
    }
`
const IconInputContainer = styled(InputCommon)`
    input {
        margin-left: 16px;
    }
`

const CalendarForm = () => {
    const router = useRouter();
    const {calendarId} = router.query

    const createCalendar = useMutationPostCalendar();
    const updateCalendar = useMutationUpdateCalendar();
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
    const [schedule, setSchedule] = useState(defaultValue);
    const [activeType, setActiveType] = useState(schedule.type);
    
    const calendarInfo = useQueryCalenderDetail()?.data?.data?.data

    useEffect(()=>{
        if(calendarId!==undefined) {
            setSchedule(
                {
                    title: calendarInfo?.title,
                    type: calendarInfo?.type,
                    startDate: calendarInfo?.startDate,
                    endDate: calendarInfo?.endDate,
                    startTime: calendarInfo?.startTime,
                    endTime: calendarInfo?.endTime,
                    location: calendarInfo?.location,
                    content: calendarInfo?.content
                }
            )
            }
        }, [calendarInfo])

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

        if (name === 'type') {
            setActiveType(value)
        }
    };

    const saveSchedule = () => {
        if (schedule.title==='' || schedule.location==='') {
            alert('모든 정보를 입력해주세요')
            return
        }

        // console.log(router.query?.calendarId)
        if(router.pathname === '/calendar/register') {
            createCalendar(schedule)
        } else {
            updateCalendar({calendarInfo:schedule, calendarId:router.query.calendarId})
        }
    }

    return (
        <Grid>
            <Header>
                <Cancel onClick={() => router.push('/calendar')}/>
                {/* {router.pathname==='/calendar/register'?<h1>일정</h1>:<h1>편집</h1>} */}
                <button onClick={saveSchedule}>저장</button>
            </Header>

            <InputCommon>
                <FormInput
                    _name='title'
                    _placeholder='제목'
                    value={schedule.title}
                    _onChange={scheduleChange}
                />
            </InputCommon>

            <TypeContainer>
                <Calendar/>
                <Button _onClick={scheduleChange} active={activeType==='데이트'}>데이트</Button>
                <Button _onClick={scheduleChange} active={activeType==='기념일'}>기념일</Button>
            </TypeContainer>

            <TimeInputContainer>
                <Clock/>
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
            </TimeInputContainer>

            <IconInputContainer>
                <MarkerPin/>
                <FormInput
                    _name='location'
                    _placeholder='장소'
                    value={schedule.location}
                    _onChange={scheduleChange}
                />
            </IconInputContainer>

            <IconInputContainer>
                <Memo/>
                <FormInput
                    _name='content'
                    _placeholder='메모'
                    value={schedule.content}
                    _onChange={scheduleChange}
                />
            </IconInputContainer>
        </Grid>
    );
};

export default CalendarForm;