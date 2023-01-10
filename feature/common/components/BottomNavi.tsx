import React from 'react';

import router from 'next/router';
import styled from 'styled-components';

const NaviContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    background: #fff;
    width: 100%;
    height: 12.5%;
`

export default function BottomNavi() {
    return (
        <NaviContainer>
            <button onClick={() => router.push('/home')}>홈</button>
            <button onClick={() => router.push('/calendar')}>캘린더</button>
            {/* <button>채팅</button> */}
            <button onClick={() => router.push('/diary')}>다이어리</button>
            <button onClick={() => router.push('/settings')}>마이페이지</button>
        </NaviContainer>
    );
}
