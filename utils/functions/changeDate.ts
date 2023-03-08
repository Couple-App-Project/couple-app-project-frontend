import { getMonth, getDate, getDay } from 'date-fns';
import changeGetDay from './changeGetDay';

const changeDate = (date: Date) => {
    return `${getMonth(date || new Date()) + 1}월 ${getDate(
        date || new Date(),
    )}일 (${changeGetDay(getDay(date || new Date()))})`;
};

export default changeDate;
