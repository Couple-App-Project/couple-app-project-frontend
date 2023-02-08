interface getDayListType {
    [key: string]: string;
}

const changeGetDay = (getDay: number) => {
    const getDayList: getDayListType = {
        'getDay 0': '일요일',
        'getDay 1': '월요일',
        'getDay 2': '화요일',
        'getDay 3': '수요일',
        'getDay 4': '목요일',
        'getDay 5': '금요일',
        'getDay 6': '토요일',
    };

    return getDayList[`getDay ${getDay}`];
};

export default changeGetDay;
