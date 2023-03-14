import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
// import Image from 'next/image';
// import cat from 'public/cat.jpeg';
import useMutationSetting from '../queries/mutationFn/mutationFn';
import { ICoupleInfo } from '../types/CoupleInfo';
import { useQueryClient } from 'react-query';

import Grid from 'components/Grid';
import { Menu } from 'styles/menuStyle';
import ChevronRight from 'public/icons/chevron-right.svg';

import { getDday } from 'utils/getDday';
import { pixelToVh } from 'utils/utils';

// const Input = styled.input`
//     all: unset;
// `;

const ProfileHeader = styled.header`
    width: 100%;
    height: ${pixelToVh(150)};
    color: #fff;
    background: ${(props) => props.theme.primaryPink};

    h1 {
        font-size: 18px;
        line-height: 25px;

        span {
            font-weight: 700;
        }
    }

    h3 {
        ${(props) => props.theme.Body_2}
    }
`;

const Title = styled.h3`
    ${(props) => props.theme.Subhead_3};
    margin-bottom: 25px;
`;

const Icon = styled.div`
    width: 21px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoutButton = styled.button`
    all: unset;
    margin-top: ${pixelToVh(198)};
    width: 100%;
    height: ${pixelToVh(48)};
    border: 1px solid ${(props) => props.theme.grey_2};
    text-align: center;
    ${(props) => props.theme.Body_2}
`;

const ScreenMypage = () => {
    const queryClient = useQueryClient();
    const mutate = useMutationSetting();

    const coupleInfo: ICoupleInfo | undefined =
        queryClient.getQueryData('couple-info');
    // TODO: 하나로 합치거나 불필요한 코드 줄일 방법
    // const [profile, setProfile] = useState(cat);
    const [name, setName] = useState(coupleInfo?.yourNickname);
    const [birthday, setBirthday] = useState(
        coupleInfo?.myBirthday.slice(0, 10),
    );
    const [anniversary, setAnniversary] = useState(coupleInfo?.anniversary);
    const [dDay, setDday] = useState(getDday(coupleInfo?.anniversary));

    const handleAnniversary = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAnniversary = event.target.value;

        setAnniversary(newAnniversary);
        setDday(getDday(newAnniversary));
    };

    // @ts-ignore
    // const setPreview = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         // @ts-ignore
    //         setProfile(reader.result);
    //     };
    // };

    useEffect(() => {
        setName(coupleInfo?.yourNickname);
        setBirthday(coupleInfo?.myBirthday.slice(0, 10));
        setAnniversary(coupleInfo?.anniversary);
        setDday(getDday(coupleInfo?.anniversary));

        mutate();
    }, [coupleInfo, mutate]);

    return (
        <>
            <ProfileHeader>
                <Grid>
                    <h1>
                        <span>{coupleInfo?.myNickname}</span>님
                    </h1>
                    <h3>이메일주소</h3>
                </Grid>
            </ProfileHeader>

            <Grid paddingTop="27px">
                <Title>정보 관리</Title>
                <Menu>
                    <button>
                        <Icon>
                            <Image
                                src="/icons/colorHeart.png"
                                alt="애칭 수정 아이콘"
                                width="21px"
                                height="18px"
                            />
                        </Icon>
                        <span>(상대 이름) 애칭 수정</span>
                        {/* <input
                                id="backgroundInput"
                                type="file"
                                accept=".png, .jpg, .jpeg, .gif, .jfif, .webp, image/*;capture=camera"
                            /> */}
                    </button>
                    <ChevronRight />
                </Menu>
                {/* <Input
                    type="text"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                /> */}
                <Menu>
                    <button>
                        <Icon>
                            <Image
                                src="/icons/colorPencil.png"
                                alt="커플 된 날 변경 아이콘"
                                width="17px"
                                height="17px"
                            />
                        </Icon>
                        <span>커플 된 날 변경</span>
                        {/* <input
                                id="backgroundInput"
                                type="file"
                                accept=".png, .jpg, .jpeg, .gif, .jfif, .webp, image/*;capture=camera"
                            /> */}
                    </button>
                    <ChevronRight />
                </Menu>
                {/* D+<span>{dDay} </span> */}
                {/* <Input
                    type="date"
                    defaultValue={anniversary}
                    onChange={handleAnniversary}
                /> */}
                <LogoutButton>로그아웃</LogoutButton>
            </Grid>
        </>
    );
};

export default ScreenMypage;
