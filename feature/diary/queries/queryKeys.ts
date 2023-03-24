const queryKeys = {
    calendarDiary: (calendarId: number) => ['calendarDiary', calendarId],
    diaryDetail: (calendarId: number) => ['diaryDetail', calendarId],
    diary: () => ['diary'],
};

export default queryKeys;
