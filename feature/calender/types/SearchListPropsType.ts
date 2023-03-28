interface SearchListPropsType {
    list: {
        authorInfo: {
            userId: number;
            userName: string;
            userNickname: null | string;
        };
        calendarId: number;
        content: null | string;
        endDate: string;
        endTime: string;
        location: null | string;
        startDate: string;
        startTime: string;
        title: string;
        type: string;
    }[];
    search: string;
}

export type { SearchListPropsType };
