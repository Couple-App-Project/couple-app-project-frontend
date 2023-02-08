import { format, eachDayOfInterval, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { CalendersStateType } from 'types/CalendersStateType';

const dayArray = (calenderList: CalendersStateType[]) => {
    return calenderList.map((el) => {
        return {
            ...el,
            dateArray: eachDayOfInterval({
                start: parseISO(el.startDate),
                end: parseISO(el.endDate),
            }).map((el) => format(el, 'yyyy-MM-dd', { locale: ko })),
        };
    });
};

export default dayArray;
