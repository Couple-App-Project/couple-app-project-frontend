import React, { useState } from 'react';
import styled from 'styled-components';

import { useMutationCoupleInfo } from 'feature/coupleInfo/queries/mutationFn';

import Modal from './Modal';
import Grid from 'components/Grid';
import { pixelToVh, pixelToVw } from 'utils/utils';

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
    border-bottom: 1px solid ${(props) => props.theme.grey_2};

    input {
        all: unset;
        width: 100%;
        ${(props) => props.theme.Body2}
    }
`;

const Form = styled.form`
    height: 100%;

    button {
        position: absolute;
        bottom: ${pixelToVw(32)};
        right: ${pixelToVw(24)};
        height: ${pixelToVh(48)};
        background: ${(props) => props.theme.primaryPink};
        color: #fff;
        width: calc(100% - ${pixelToVw(48)});
        border-radius: 62px;
    }
`;

const ModalDate = (props: any) => {
    const { closeButton, anniversaryInfo } = props;

    const [anniversary, setAnniversary] = useState(anniversaryInfo);
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnniversary(e.target.value);
    };

    const coupleInfoMutation = useMutationCoupleInfo();

    const handleSubmit = () => {
        coupleInfoMutation({ anniversary: anniversary });
        closeButton();
    };

    return (
        <Modal closeButton={closeButton} title="커플 된 날 변경">
            <Form onSubmit={(e) => e.preventDefault()}>
                <Grid paddingTop="15px">
                    <InputContainer>
                        <input
                            type="date"
                            value={anniversary}
                            onChange={onChangeInput}
                        />
                    </InputContainer>
                </Grid>

                <Grid>
                    <button onClick={handleSubmit}>완료</button>
                </Grid>
            </Form>
        </Modal>
    );
};

export default ModalDate;
