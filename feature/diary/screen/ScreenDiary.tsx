import styled from 'styled-components';

const ScreenDiary = () => {
    const list = [
        {
            id: 1,
            date: '2022-12-02',
            title: '전시회',
            content: '',
        },
        {
            id: 2,
            date: '2022-12-14',
            title: '해리포터 봄',
            content: '',
        },
        {
            id: 3,
            date: '2022-12-25',
            title: '크리스마스',
            content: '',
        },
    ];

    return (
        <DiaryWrapper>
            <h2>일정 완료 다이어리</h2>
            <div className="diary-list">
                {list.map((el) => {
                    return (
                        <div key={el.id}>
                            <h3>{el.title}</h3>
                            <span>{el.date}</span>
                            <p>{el.content}</p>
                        </div>
                    );
                })}
            </div>
        </DiaryWrapper>
    );
};

export default ScreenDiary;

const DiaryWrapper = styled.div``;
