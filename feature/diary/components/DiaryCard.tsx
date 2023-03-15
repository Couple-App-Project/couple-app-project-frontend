import React from 'react';
import { useRouter } from 'next/router';

import useMutationLabel from '../queries/mutationFn/useMutationLabel';

import Image from 'next/image';
import styled from 'styled-components';
import Bookmark from 'public/icons/bookmark.svg';

const CardContainer = styled.article<{ isLabeled: boolean }>`
    & > div {
        position: relative;
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 9px;

        svg {
            position: absolute;
            right: 10px;
            top: 10px;
            z-index: 1;
            fill: ${(props) =>
                props.isLabeled ? props.theme.primaryPink : 'none'};
        }

        path {
            stroke: ${(props) =>
                props.isLabeled ? props.theme.primaryPink : '#fff'};
        }
    }
`;
const Title = styled.h1`
    ${(props) => props.theme.Title_5}
`;
const ScheduleDate = styled.h2`
    ${(props) => props.theme.Body_3};
    color: ${(props) => props.theme.grey_4};
`;

const DiaryCard = (props: any) => {
    const { diaryInfo } = props;

    const router = useRouter();
    const labelMutation = useMutationLabel();

    const calendarCreatedAt = new Date(diaryInfo?.calendar.createdAt);
    const dateFormat = `${calendarCreatedAt.getFullYear()}.${String(
        calendarCreatedAt.getMonth() + 1,
    ).padStart(2, '0')}.${String(calendarCreatedAt.getDate()).padStart(
        2,
        '0',
    )}`;

    const toggleLabel = () => {
        labelMutation(diaryInfo?.id);
    };

    return (
        <CardContainer isLabeled={diaryInfo?.labeled}>
            <div>
                <Bookmark stroke="#fff" onClick={toggleLabel} />
                <Image
                    src="/slider_img.png"
                    alt="다이어리 썸네일"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    onClick={() =>
                        router.push(`/diary/detail/${diaryInfo?.calendarId}`)
                    }
                />
            </div>
            <Title>{diaryInfo?.title}</Title>
            <ScheduleDate>{dateFormat}</ScheduleDate>
        </CardContainer>
    );
};

export default DiaryCard;
