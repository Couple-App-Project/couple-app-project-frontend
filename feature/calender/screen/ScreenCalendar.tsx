import router from 'next/router';
import { CalenderMain } from '../components';

export default function ScreenCalender() {
    return (
        <>
            <button onClick={() => router.push('/home')}>🏠</button>
            <h1>캘린더페이지</h1>
            <CalenderMain />
        </>
    );
}
