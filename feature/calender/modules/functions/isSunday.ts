/**
 * 일요일 판별 Fn
 * @param day 날짜
 * @returns boolen
 */
const isSunday = (day: Date) => {
    return day.getDay() === 0;
};

export default isSunday;
