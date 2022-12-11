import router from 'next/router';

export default function ScreenCalender() {
    return (
        <>
            <button onClick={() => router.push('/calendar')}>등록취소</button>
            <h1>캘린더등록페이지</h1>
        </>
    );
}
