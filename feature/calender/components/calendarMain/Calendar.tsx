import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { getYear } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import calendersState from 'recoil/calendersState';
import type { CalendarMainPropsType } from '../../types';
import { isSunday, dayArray } from '../../modules/functions';
import { CalendarCaption, CalendarDay } from '../index';

const Calendar = ({
    changeDate,
    selectedDay,
    setSelectedDay,
    coupleDay,
    myBirthday,
    yourBirthday,
}: CalendarMainPropsType) => {
    const calenderList = useRecoilValue(calendersState);

    /**
     * 데이트 타입 날짜만 추출
     */
    const date = dayArray(calenderList)
        .filter((v) => v.type === '데이트')
        .reduce((acc, cur) => {
            return acc.concat(...cur.dateArray);
        }, [] as string[])
        .map((el) => new Date(el));

    /**
     * 기념일 타입 날짜만 추출 후 사귄 날, 생일 추가
     */
    const anniversary = dayArray(calenderList)
        .filter((v) => v.type === '기념일')
        .reduce((acc, cur) => {
            return acc.concat(...cur.dateArray);
        }, [] as string[])
        .map((el) => new Date(el))
        .concat(
            new Date(coupleDay!),
            new Date(myBirthday!),
            new Date(yourBirthday!),
        );

    return (
        <DayPickers
            fromYear={getYear(new Date())}
            toYear={getYear(new Date()) + 5}
            captionLayout="dropdown"
            onMonthChange={(e: Date) => changeDate && changeDate(e)}
            required
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            locale={ko}
            components={{ Caption: CalendarCaption, DayContent: CalendarDay }}
            modifiers={{ isSunday, date, anniversary }}
            modifiersClassNames={{
                isSunday: 'sunday-class',
                date: 'date-class',
                anniversary: 'anniversary-class',
            }}
        />
    );
};

export default Calendar;

const DayPickers = styled(DayPicker)`
    .rdp-month {
        width: 100%;
    }

    .rdp-table {
        width: 100%;
        max-width: 100%;

        .rdp-head_cell {
            font-size: 0.75rem;
            line-height: 1rem;
            font-weight: 400;
            color: ${(props) => props.theme.grey_5};
        }

        .rdp-cell {
            button {
                position: relative;
                width: 100%;
                max-width: 100%;
                height: 3rem;
            }

            .calendar-circle {
                li {
                    display: none;
                }
            }

            .anniversary-class {
                .calendar-circle {
                    .anniversary-circle {
                        display: block;
                    }
                }
            }

            .date-class {
                .calendar-circle {
                    .date-circle {
                        display: block;
                    }
                }
            }
        }

        .day-content {
            color: ${(props) => props.theme.grey_6};
        }

        .rdp-head_row th:first-child,
        .sunday-class .day-content {
            color: ${(props) => props.theme.red};
        }

        .rdp-day_selected {
            background-color: transparent;
            .day-content {
                width: 1.875rem;
                line-height: 1.875rem;
                background-color: #3b3d49;
                color: #fff;
                border-radius: 50%;
            }
        }
    }
`;
