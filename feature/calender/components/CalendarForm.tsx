import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Grid from 'components/Grid';
import useQueryCalendarDiary from 'feature/diary/queries/queryFn/useQueryCalendarDiary';

import Calendar from 'public/icons/calendar.svg';
import Cancel from 'public/icons/cancel.svg';
import ChevronRight from 'public/icons/chevron-right.svg';
import Clock from 'public/icons/clock.svg';
import MarkerPin from 'public/icons/marker-pin.svg';
import Memo from 'public/icons/memo.svg';
import Plus from 'public/icons/plus.svg';
import Trash from 'public/icons/trash.svg';
import { pixelToVh, pixelToVw } from 'utils/utils';
import useMutationDeleteCalendar from '../queries/mutationFn/useMutationDeleteCalendar';
import useMutationPostCalendar from '../queries/mutationFn/useMutationPostCalendar';
import useMutationUpdateCalendar from '../queries/mutationFn/useMutationUpdateCalendar';
import useQueryCalenderDetail from '../queries/queryFn/useQueryCalendarDetail';
import Button from './Button';
import FormInput from './FormInput';

const CalendarForm = () => {
    const router = useRouter();
    const { calendarId } = router.query;

    const { isLoading, data } = useQueryCalendarDiary(calendarId);
    const calendarDiaries = data?.data?.data;

    const createCalendar = useMutationPostCalendar();
    const updateCalendar = useMutationUpdateCalendar();
    const deleteCalendar = useMutationDeleteCalendar();
    const defaultDate = `${new Date().getFullYear()}-${String(
        new Date().getMonth() + 1,
    ).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;

    let defaultValue = {
        title: '',
        type: '데이트',
        startDate: defaultDate,
        endDate: defaultDate,
        startTime: '00:00',
        endTime: '23:59',
        location: '',
        content: '',
    };
    const [schedule, setSchedule] = useState(defaultValue);
    const [activeType, setActiveType] = useState(schedule.type);

    const calendarInfo = useQueryCalenderDetail()?.data?.data?.data;

    useEffect(() => {
        if (calendarId !== undefined) {
            setSchedule({
                title: calendarInfo?.title,
                type: calendarInfo?.type,
                startDate: calendarInfo?.startDate,
                endDate: calendarInfo?.endDate,
                startTime: calendarInfo?.startTime,
                endTime: calendarInfo?.endTime,
                location: calendarInfo?.location,
                content: calendarInfo?.content,
            });
            setActiveType(calendarInfo?.type);
        }
    }, [calendarInfo]);

    const scheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'startDateTime') {
            setSchedule({
                ...schedule,
                startDate: value.slice(0, 10),
                startTime: value.slice(-5),
            });
        } else if (name === 'endDateTime') {
            setSchedule({
                ...schedule,
                endDate: value.slice(0, 10),
                endTime: value.slice(-5),
            });
        } else {
            setSchedule({
                ...schedule,
                [name]: value,
            });
        }

        if (name === 'type') {
            setActiveType(value);
        }
    };

    const saveSchedule = () => {
        if (schedule.title === '' || schedule.location === '') {
            alert('모든 정보를 입력해주세요');
            return;
        }

        if (router.pathname === '/calendar/register') {
            createCalendar(schedule);
        } else {
            updateCalendar({
                calendarInfo: schedule,
                calendarId: router.query.calendarId,
            });
        }
    };

    const deleteSchedule = () => {
        if (confirm('정말로 삭제하시겠습니까?')) {
            deleteCalendar(router.query?.calendarId);
        }
    };

    return (
        <Grid>
            <Header>
                <Cancel
                    onClick={() => router.push('/calendar')}
                    width="13px"
                    height="13px"
                />
                <button onClick={saveSchedule}>저장</button>
            </Header>

            <InputCommon>
                <FormInput
                    _name="title"
                    _placeholder="제목"
                    value={schedule.title}
                    _onChange={scheduleChange}
                />
            </InputCommon>

            <TypeContainer>
                <Calendar />
                <Button
                    _onClick={scheduleChange}
                    active={activeType === '데이트'}
                >
                    데이트
                </Button>
                <Button
                    _onClick={scheduleChange}
                    active={activeType === '기념일'}
                >
                    기념일
                </Button>
            </TypeContainer>

            <TimeInputContainer>
                <Clock />
                <input
                    type="datetime-local"
                    name="startDateTime"
                    value={schedule.startDate + 'T' + schedule.startTime}
                    onChange={scheduleChange}
                />
                <input
                    type="datetime-local"
                    name="endDateTime"
                    value={schedule.endDate + 'T' + schedule.endTime}
                    onChange={scheduleChange}
                />
            </TimeInputContainer>

            <IconInputContainer>
                <MarkerPin />
                <FormInput
                    _name="location"
                    _placeholder="장소"
                    value={schedule.location}
                    _onChange={scheduleChange}
                />
            </IconInputContainer>

            <IconInputContainer>
                <Memo />
                <FormInput
                    _name="content"
                    _placeholder="메모"
                    value={schedule.content}
                    _onChange={scheduleChange}
                />
            </IconInputContainer>

            {calendarDiaries?.length ? (
                <Link
                    href={{
                        pathname: '/diary/detail/[id]',
                        query: {
                            id: calendarId,
                        },
                    }}
                    as={`/diary/detail/${calendarId}`}
                >
                    <DiaryMoveButton>
                        <Image
                            src="/icons/pink-diary.png"
                            alt="다이어리 아이콘"
                            width="22px"
                            height="22px"
                        />
                        <p>다이어리 이동</p>
                        <ChevronRight stroke="#ff6e7f" />
                    </DiaryMoveButton>
                </Link>
            ) : (
                <Link
                    href={{
                        pathname: '/diary/register/[id]',
                        query: {
                            id: calendarId,
                            title: schedule.title,
                            startDate: schedule.startDate,
                            endDate: schedule.endDate,
                        },
                    }}
                >
                    <WriteDiaryButton>
                        <Plus />
                        <p>다이어리 작성</p>
                    </WriteDiaryButton>
                </Link>
            )}

            {router.query?.calendarId ? (
                <DeleteButton onClick={deleteSchedule}>
                    <Trash />
                </DeleteButton>
            ) : (
                ''
            )}
        </Grid>
    );
};

export default CalendarForm;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    button {
        background: #fff;
        font-size: 16px;
        line-height: 18px;
    }
`;

const InputCommon = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.grey_2};
    display: flex;
    align-items: center;

    svg {
        overflow: visible;
    }
`;

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
        ${(props) => props.theme.Body_1};
        border: none;
        margin-left: 16px;
    }
`;
const IconInputContainer = styled(InputCommon)`
    input {
        margin-left: 16px;
    }
`;

const DiaryMoveButton = styled.button`
    display: flex;
    align-items: center;
    margin-top: ${pixelToVh(15)};
    padding: ${pixelToVw(16)};
    height: ${pixelToVh(48)};
    width: 100%;
    border: 1px solid ${(props) => props.theme.mediumPink};
    border-radius: 6px;
    background: ${(props) => props.theme.softPink};

    p {
        margin-left: ${pixelToVw(12)};
        margin-right: ${pixelToVw(6)};
        ${(props) => props.theme.Body_1};
        color: ${(props) => props.theme.primaryPink};
        text-align: left;
    }
`;

const WriteDiaryButton = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    margin-top: ${pixelToVh(18)};

    p {
        margin-left: ${pixelToVw(18)};
    }
`;

const DeleteButton = styled.button`
    all: unset;
    position: absolute;
    left: calc(50% - ${pixelToVw(20)});
    bottom: ${pixelToVh(24)};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.grey_2};
`;
