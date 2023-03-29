import { useRouter } from 'next/router';
import React from 'react';
import { CaptionDropdowns } from 'react-day-picker';
import styled from 'styled-components';
import Search from 'public/images/icons/search.svg';
import { pixelToRem } from 'utils/utils';
import type { CaptionPropsType } from 'feature/calender/types';

const CalendarCaption = (props: CaptionPropsType) => {
    const router = useRouter();
    return (
        <CaptionWrapper>
            <CaptionDropdowns displayMonth={props.displayMonth} />
            <Search onClick={() => router.push('/calendar/search')} />
        </CaptionWrapper>
    );
};

export default CalendarCaption;

const CaptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${pixelToRem(16)};

    .rdp-caption_dropdowns {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;

        .rdp-dropdown_month {
            .rdp-caption_label {
                margin-left: ${pixelToRem(12)};
            }
        }

        .rdp-caption_label {
            padding: 0;
            border: 0;
            ${({ theme }) => theme.Subhead_1}
            color: ${({ theme }) => theme.grey_6};
        }
    }

    svg {
        path {
            fill: ${({ theme }) => theme.grey_6};
        }
    }
`;
