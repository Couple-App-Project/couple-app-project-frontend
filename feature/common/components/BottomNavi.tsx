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

    button {
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
    }
`;

export default function BottomNavi() {
    const [activePage, setActivePage] = useState(router.pathname);
    console.log(activePage);

    const changePage = (pathname: string) => {
        setActivePage(pathname);
        console.log(activePage);
        router.push(pathname);
    };

    return (
        <NaviContainer>
            <button onClick={() => changePage('/home')}>
                <div>
                    <Home
                        fill={activePage === '/home' ? '#3b3d49' : '#e2e4ea'}
                    />
                </div>
                <span
                    style={
                        activePage === '/home'
                            ? { color: '#3b3d49' }
                            : { color: '#e2e4ea' }
                    }
                >
                    홈
                </span>
            </button>
            <button onClick={() => changePage('/calendar')}>
                <div>
                    <CalendarFill
                        fill={
                            activePage === '/calendar' ? '#3b3d49' : '#e2e4ea'
                        }
                    />
                </div>
                <span
                    style={
                        activePage === '/calendar'
                            ? { color: '#3b3d49' }
                            : { color: '#e2e4ea' }
                    }
                >
                    캘린더
                </span>
            </button>
            <button onClick={() => changePage('/diary')}>
                <div>
                    <RectHeart
                        fill={activePage === '/diary' ? '#3b3d49' : '#e2e4ea'}
                    />
                </div>
                <span
                    style={
                        activePage === '/diary'
                            ? { color: '#3b3d49' }
                            : { color: '#e2e4ea' }
                    }
                >
                    다이어리
                </span>
            </button>
            <button onClick={() => changePage('/settings')}>
                <div>
                    <User
                        fill={
                            activePage === '/settings' ? '#3b3d49' : '#e2e4ea'
                        }
                    />
                </div>
                <span
                    style={
                        activePage === '/settings'
                            ? { color: '#3b3d49' }
                            : { color: '#e2e4ea' }
                    }
                >
                    마이페이지
                </span>
            </button>
        </NaviContainer>
    );
}
