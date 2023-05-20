import { format, eachDayOfInterval, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { CalendersStateType } from 'types/CalendersStateType';

/**
 * 연속 일정 사이 날짜 구하기 및 일정 format 변환 Fn
 * @param calenderList 해당 년.월 일정 목록 []
 * @returns dateArray 프로퍼티 추가된 해당 년.월 일정 목록 []
 */
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
