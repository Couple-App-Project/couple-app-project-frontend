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
    });

    const scheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setSchedule({
            ...schedule,
            [name]: value,
        });
    };

    return (
        <>
            <button onClick={() => router.push('/calendar')}>등록취소</button>
            <h1>캘린더등록페이지</h1>
            <input
                placeholder="일정 제목 입력"
                name="title"
                value={schedule.title}
                onChange={scheduleChange}
            />
            <br />

            <FieldsetStyle>
                <legend>구분</legend>

                <Radio value="task" _onChange={scheduleChange}>
                    할 일
                </Radio>
                <Radio value="meet" _onChange={scheduleChange}>
                    약속
                </Radio>
            </FieldsetStyle>

            <br />
            <input
                type="date"
                name="date"
                value={schedule.date}
                onChange={scheduleChange}
            />
        </>
    );
}
