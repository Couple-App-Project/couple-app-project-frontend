import { useState } from 'react';
import router from 'next/router';
import styled from 'styled-components';
import Radio from '../components/Radio';

const FieldsetStyle = styled.fieldset`
    all: unset;
    display: flex;
`;

export default function ScreenCalender() {
    const [schedule, setSchedule] = useState({
        title: '',
        scheduleType: '',
        date: '',
        location: ''
    });

    const scheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setSchedule({
            ...schedule,
            [name]: value,
        });
    };

    const postNewSchedule = () => {
        if (schedule.title==='' || schedule.location==='') alert('모든 정보를 입력해주세요')
        // router.push('/calendar')
    }

    return (
        <>
            <button onClick={() => router.push('/calendar')}>등록취소</button>
            <h1>일정</h1>
            <button onClick={postNewSchedule}>저장</button>
            <br />

            <input
                placeholder="제목"
                name="title"
                value={schedule.title}
                onChange={scheduleChange}
            />
            <br />

            <FieldsetStyle>
                <legend>구분</legend>

                <Radio value="goOut" _onChange={scheduleChange} checked={true}>
                    데이트
                </Radio>
                <Radio value="anniversary" _onChange={scheduleChange}>
                    기념일
                </Radio>
            </FieldsetStyle>

            <br />
            <input
                type="date"
                name="date"
                value={schedule.date}
                onChange={scheduleChange}
            />

            <br />
            <input
                placeholder="장소"
                name="location"
                value={schedule.location}
                onChange={scheduleChange}
            />
        </>
    );
}
