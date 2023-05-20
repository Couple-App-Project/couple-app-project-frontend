interface DiaryDetailDataType {
    calendar: {
        content: string;
        createdAt: string;
        endDate: string;
        endTime: string;
        id: number;
        location: string;
        startDate: string;
        startTime: string;
        title: string;
        type: string;
        updatedAt: string;
        userId: number;
    };
    calendarId: number;
    content: string;
    createdAt: string;
    id: number;
    images: string[];
    labeled: boolean;
    title: string;
    updatedAt: string;
    userId: number;
}

export type { DiaryDetailDataType };
