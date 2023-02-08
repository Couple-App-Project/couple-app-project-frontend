import React from 'react';
import styled from 'styled-components';
import { CaptionProps, CaptionDropdowns } from 'react-day-picker';
import Search from 'public/images/icons/search.svg';

const CalendarCaption = (props: CaptionProps) => {
    return (
        <CaptionWrapper>
            <CaptionDropdowns displayMonth={props.displayMonth} />
            <Search />
        </CaptionWrapper>
    );
};

export default CalendarCaption;

const CaptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .rdp-caption_dropdowns {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;

        .rdp-dropdown_month {
            .rdp-caption_label {
                margin-left: 0.875rem;
            }
        }

        .rdp-caption_label {
            padding: 0;
            border: 0;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 700;
            color: ${(props) => props.theme.grey_6};
        }
    }

    svg {
        path {
            fill: ${(props) => props.theme.grey_6};
        }
    }
`;
