import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import useQueryCoupleInfo from 'feature/coupleInfo/queries/queryFn/useQueryCoupleInfo';
import useMutationLogout from '../queries/mutationFn/useMutationLogout';

import ModalInput from 'feature/common/components/ModalInput';
import ModalDate from 'feature/common/components/ModalDate';
import Grid from 'components/Grid';
import { Menu } from 'styles/menuStyle';
import ChevronRight from 'public/icons/chevron-right.svg';

import { pixelToVh } from 'utils/utils';

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
    const logoutMutate = useMutationLogout();

    const coupleInfoQuery = useQueryCoupleInfo();
    const coupleInfo = coupleInfoQuery?.data?.data?.data;

    const [anniversary, setAnniversary] = useState(coupleInfo?.anniversary);

    const [openNicknameModal, setNicknameModal] = useState(false);
    const [openAnniversaryModal, setAnniversaryModal] = useState(false);

    // const handleAnniversary = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const newAnniversary = event.target.value;
    //     setAnniversary(newAnniversary);
    // };

    const handleLogout = () => {
        if (confirm('정말 로그아웃 하시겠습니까?')) logoutMutate();
    };

    useEffect(() => {
        setAnniversary(coupleInfo?.anniversary);
    }, [coupleInfo]);

    return (
        <>
            {openNicknameModal ? (
                <ModalInput
                    closeButton={() => setNicknameModal(false)}
                    title="애칭 수정"
                    placeholder="애칭을 입력해 주세요."
                    maxLength="8"
                    buttonText="완료"
                />
            ) : null}
            {openAnniversaryModal ? (
                <ModalDate
                    closeButton={() => setAnniversaryModal(false)}
                    anniversaryInfo={anniversary}
                />
            ) : null}

            <ProfileHeader>
                <Grid>
                    <h1>
                        <span>{coupleInfo?.myNickname}</span>님
                    </h1>
                    <h3>{coupleInfo?.myEmail}</h3>
                </Grid>
            </ProfileHeader>

            <Grid paddingTop="27px">
                <Title>정보 관리</Title>
                <Menu onClick={() => setNicknameModal(true)}>
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
                    <ChevronRight stroke="#3B3D49" />
                </Menu>
                {/* <Input
                    type="text"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                /> */}
                <Menu onClick={() => setAnniversaryModal(true)}>
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
                    <ChevronRight stroke="#3B3D49" />
                </Menu>
                {/* D+<span>{dDay} </span> */}
                {/* <Input
                    type="date"
                    defaultValue={anniversary}
                    onChange={handleAnniversary}
                /> */}
                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </Grid>
        </>
    );
};

export default ScreenMypage;
