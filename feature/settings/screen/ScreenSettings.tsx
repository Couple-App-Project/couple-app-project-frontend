import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cat from 'public/cat.jpeg';
import { getDday } from 'utils/getDday'
import styled from 'styled-components';

const Input = styled.input`
    all: unset;
`;

const ScreenSettings = () => {
    // TODO: 하나로 합치거나 불필요한 코드 줄일 방법
    const [profile, setProfile] = useState(cat);
    const [name, setName] = useState('애칭!');
    const [birthday, setBirthday] = useState('2000-01-01');
    const [anniversary, setAnniversary] = useState('2016-09-11');
    const [dDay, setDday] = useState(0);

    const handleAnniversary = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAnniversary = event.target.value;

        setAnniversary(newAnniversary);
        setDday(getDday(newAnniversary));
    };

    // TODO: 이미지 컴포넌트 따로 빼보기
    // @ts-ignore
    const setPreview = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            // @ts-ignore
            setProfile(reader.result);
        };
    };

    
    useEffect(() => {
        setDday(getDday(anniversary));
    }, []);

    return (
        <>
            <button>취소</button>
            <button>저장</button>
            <h6>프로필사진</h6>
            <Image
                src={profile}
                alt="Profile Image"
                width={100}
                height={100}
                style={{ borderRadius: '50%' }}
            />
            <input
                type="file"
                accept=".png, .jpg, .jpeg, .gif, .jfif, .webp, image/*;capture=camera"
                onChange={setPreview}
            />
            <br />
            <h6>이름</h6>
            <Input
                type="text"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h6>기념일</h6>
            D+<span>{dDay} </span>
            <Input
                type="date"
                defaultValue={anniversary}
                onChange={handleAnniversary}
            />
            <h6>생일</h6>
            <Input
                type="date"
                defaultValue={birthday}
                onChange={(e) => setBirthday(e.target.value)}
            />
            <br />
            <button>로그아웃</button>
        </>
    );
};

export default ScreenSettings;
