import React from 'react';
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

const ModalBackground = (props: any) => {
    const { closeButton } = props;

    return (
        <Modal closeButton={closeButton}>
            <Grid paddingTop="0">
                <EditMenu>
                    <button>
                        <Camera width="18" height="18" />
                        <span>배경 사진</span>
                    </button>
                    <ChevronRight />
                </EditMenu>

                <EditMenu>
                    <button>
                        <Paint width="18" height="18" />
                        <span>배경 색상</span>
                    </button>
                    <ChevronRight />
                </EditMenu>
            </Grid>
        </Modal>
    );
};

export default ModalBackground;
