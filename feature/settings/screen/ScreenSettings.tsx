import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cat from 'public/cat.jpeg';
import styled from 'styled-components';

const Input = styled.input`
    all: unset;
`;

const ScreenSettings = () => {
    const [profile, setProfile] = useState(cat);
    const [name, setName] = useState('애칭!');
    const [birthday, setBirthday] = useState('2000-01-01');
    const [anniversary, setAnniversary] = useState('2016-09-11');
    const [dDay, setDday] = useState(0);

    const getDday = (newAnniversary: string) => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();

        const anniversaryDate = new Date(newAnniversary);
        const anniYear = anniversaryDate.getFullYear();
        const anniMonth = anniversaryDate.getMonth();
        const anniDay = anniversaryDate.getDate();

        const anniversaryTime = new Date(
            anniYear,
            anniMonth,
            anniDay,
        ).getTime();
        const currentTime = new Date(year, month, day).getTime();

        // 처음 만난 날을 1일째로 포함하기 때문에 마지막에 +1 진행
        setDday((currentTime - anniversaryTime) / (1000 * 60 * 60 * 24) + 1);
    };

    const handleAnniversary = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAnniversary = event.target.value;

        setAnniversary(newAnniversary);
        getDday(newAnniversary);
    };

    const setPreview = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setProfile(reader.result);
        };
    };

    useEffect(() => {
        getDday(anniversary);
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
