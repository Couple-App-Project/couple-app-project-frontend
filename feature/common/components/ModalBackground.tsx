import React, { useState } from 'react';
import styled from 'styled-components';

import Grid from 'components/Grid';
import { useMutationCoupleInfo } from 'feature/coupleInfo/queries/mutationFn';
import useMutationCreateBackground from 'feature/home/queries/mutationFn/useMutationCreateBackground';
import Camera from 'public/icons/camera.svg';
import CheckSmall from 'public/icons/check-small.svg';
import ChevronRight from 'public/icons/chevron-right.svg';
import Paint from 'public/icons/paint.svg';
import { Menu } from 'styles/menuStyle';
import { pixelToVh, pixelToVw } from 'utils/utils';
import Modal from './Modal';

const ColorChipsContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${pixelToVw(24)};

    & > div {
        position: relative;
        width: ${pixelToVw(28)};
        height: ${pixelToVw(28)};
        border-radius: 50%;
    }

    & > div > article > div {
        position: absolute;
        top: ${pixelToVw(-6)};
        left: ${pixelToVw(-6)};
        width: ${pixelToVw(40)};
        height: ${pixelToVw(40)};
        border: 1px solid #3b3d49;
        border-radius: 50%;
    }

    svg {
        position: absolute;
        top: ${pixelToVw(9.2)};
        left: ${pixelToVw(9)};
    }
`;
const ColorSaveButton = styled.button`
    position: absolute;
    left: 24px;
    bottom: ${pixelToVh(32)};
    width: calc(100% - 48px);
    height: ${pixelToVh(48)};
    border-radius: 62px;
    background: ${(props) => props.theme.primaryPink};
    color: #fff;
    ${(props) => props.theme.Body_2};
`;

const ModalBackground = (props: any) => {
    const { closeButton, background } = props;

    const createBackground = useMutationCreateBackground();

    const [title, setTitle] = useState('');

    const colorChipPage = () => {
        setTitle('색상 선택');
    };
    const colorChips = [
        '#F5F5F5',
        '#FCE8D5',
        '#FBF4D8',
        '#E2EEE0',
        '#DCEDEA',
        '#E1ECF8',
        '#E2E3FA',
        '#E9DDF8',
        '#F0E0F1',
        '#F1DAE4',
        '#FCE5E5',
    ];

    const [bgColor, setBgColor] = useState<string>(background ?? '#F5F5F5');
    const changeBgColor = (colorCode: string) => {
        setBgColor(colorCode);
    };

    const coupleInfoMutation = useMutationCoupleInfo();

    const saveBackground = () => {
        coupleInfoMutation({ backgroundColor: bgColor });
        closeButton();
    };

    const setBackground = () => {
        let myInput = document.getElementById('backgroundInput');
        myInput?.click();
    };

    const changeBackgroundImage = (e: any) => {
        const targetImage = e.target.files!;

        const formData = new FormData();
        formData.append('file', targetImage[0]);

        createBackground(formData);
        closeButton();
    };

    return (
        <Modal closeButton={closeButton} title={title}>
            {title === '' ? (
                <Grid paddingTop="0">
                    <Menu onClick={setBackground}>
                        <button>
                            <Camera width="18" height="18" />
                            <span>배경 사진</span>
                            <input
                                id="backgroundInput"
                                type="file"
                                accept="image/jpg,image/png,image/jpeg,image/gif,image/*;capture=camera"
                                onChange={changeBackgroundImage}
                            />
                        </button>
                        <ChevronRight stroke="#3B3D49" />
                    </Menu>

                    <Menu onClick={colorChipPage}>
                        <button>
                            <Paint width="18" height="18" />
                            <span>배경 색상</span>
                        </button>
                        <ChevronRight stroke="#3B3D49" />
                    </Menu>
                </Grid>
            ) : (
                <Grid paddingTop="24px">
                    <Grid paddingTop="0">
                        <ColorChipsContainer>
                            {colorChips.map((el) => {
                                return (
                                    <div
                                        key={el}
                                        style={{ background: el }}
                                        onClick={() => changeBgColor(el)}
                                    >
                                        {el === bgColor && (
                                            <article>
                                                <CheckSmall />
                                                <div></div>
                                            </article>
                                        )}
                                    </div>
                                );
                            })}
                        </ColorChipsContainer>
                    </Grid>

                    <ColorSaveButton onClick={saveBackground}>
                        완료
                    </ColorSaveButton>
                </Grid>
            )}
        </Modal>
    );
};

export default ModalBackground;
