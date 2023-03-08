interface CalendersStateType {
    calendarId: number;
    authorInfo: {
        userId: number;
        userName: string;
        userNickname: null | string;
    };
    content: string;
    endDate: string;
    endTime: string;
    location: string;
    startDate: string;
    startTime: string;
    title: string;
    type: string;
}

export type { CalendersStateType };
