interface getDayListType {
    [key: string]: string;
}

const changeGetDay = (getDay: number) => {
    const getDayList: getDayListType = {
        'getDay 0': '일',
        'getDay 1': '월',
        'getDay 2': '화',
        'getDay 3': '수',
        'getDay 4': '목',
        'getDay 5': '금',
        'getDay 6': '토',
    };

    return getDayList[`getDay ${getDay}`];
};

export default changeGetDay;
