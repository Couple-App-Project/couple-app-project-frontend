import React, { useState } from 'react';

import router from 'next/router';
import styled from 'styled-components';
import { pixelToVh } from 'utils/utils';

import Home from 'public/icons/home.svg';
import CalendarFill from 'public/icons/calendar_fill.svg';
import RectHeart from 'public/icons/rect_heart.svg';
import User from 'public/icons/user.svg';

const NaviContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    background: #fff;
    width: 100%;
    height: ${pixelToVh(80)};
`;
const NaviButton = styled.button<any>`
    all: unset;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        ${(props) => props.theme.Body_4};
    }

    path {
        fill: ${(props) =>
            props.currentPage === router.pathname ? '#3b3d49' : '#e2e4ea'};
    }
    span {
        color: ${(props) =>
            props.currentPage === router.pathname ? '#3b3d49' : '#e2e4ea'};
    }
`;
const NaviRectButton = styled(NaviButton)`
    path {
        fill: white;
    }
    rect {
        fill: ${(props) =>
            props.currentPage === router.pathname ? '#3b3d49' : '#e2e4ea'};
    }
`;

export default function BottomNavi() {
    const changePage = (pathname: string) => {
        router.push(pathname);
    };

    return (
        <NaviContainer>
            <NaviButton onClick={() => changePage('/home')} currentPage="/home">
                <div>
                    <Home />
                </div>
                <span>홈</span>
            </NaviButton>
            <NaviButton
                onClick={() => changePage('/calendar')}
                currentPage="/calendar"
            >
                <div>
                    <CalendarFill />
                </div>
                <span>캘린더</span>
            </NaviButton>
            <NaviRectButton
                onClick={() => changePage('/diary')}
                currentPage="/diary"
            >
                <div>
                    <RectHeart />
                </div>
                <span>다이어리</span>
            </NaviRectButton>
            <NaviButton
                onClick={() => changePage('/settings')}
                currentPage="/settings"
            >
                <div>
                    <User />
                </div>
                <span>마이페이지</span>
            </NaviButton>
        </NaviContainer>
    );
}
