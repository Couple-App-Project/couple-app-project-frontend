import React, { useState } from 'react';
import styled from 'styled-components';
import { pixelToVh } from 'utils/utils';
import Modal from './Modal';
import Grid from 'components/Grid';
import Camera from 'public/icons/camera.svg';
import Paint from 'public/icons/paint.svg';
import ChevronRight from 'public/icons/chevron-right.svg';

const EditMenu = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${pixelToVh(55)};
    border-bottom: 1px solid ${(props) => props.theme.grey_2};

    button {
        all: unset;
        display: flex;
        align-items: center;

        span {
            padding-left: 12px;
            ${(props) => props.theme.Body_1};
        }
    }
`;

const ColorChipsContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;

    div {
        width: 24px;
        height: 24px;
        border-radius: 50%;
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
    const { closeButton } = props;
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

    return (
        <Modal closeButton={closeButton} title={title}>
            {title === '' ? (
                <Grid paddingTop="0">
                    <EditMenu>
                        <button>
                            <Camera width="18" height="18" />
                            <span>배경 사진</span>
                        </button>
                        <ChevronRight />
                    </EditMenu>

                    <EditMenu onClick={colorChipPage}>
                        <button>
                            <Paint width="18" height="18" />
                            <span>배경 색상</span>
                        </button>
                        <ChevronRight />
                    </EditMenu>
                </Grid>
            ) : (
                <Grid paddingTop="24px">
                    <ColorChipsContainer>
                        {colorChips.map((el) => {
                            return (
                                <div key={el} style={{ background: el }}></div>
                            );
                        })}
                    </ColorChipsContainer>

                    <ColorSaveButton>완료</ColorSaveButton>
                </Grid>
            )}
        </Modal>
    );
};

export default ModalBackground;
