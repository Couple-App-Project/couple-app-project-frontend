import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Grid from 'components/Grid';
import { pixelToVh } from 'utils/utils';

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
    border-bottom: 1px solid ${(props) => props.theme.grey_6};

    input {
        all: unset;
        width: 100%;
        ${(props) => props.theme.Body2}
    }

    p > span:last-child {
        color: ${(props) => props.theme.grey_4};
    }
`;

const Form = styled.form`
    height: 100%;
    position: relative;

    button {
        position: sticky;
        height: ${pixelToVh(48)};
        background: ${(props) => props.theme.primaryPink};
        color: #fff;
        bottom: 0;
        width: 100%;
    }
`;

const ModalTodayComment = (props: any) => {
    const { closeButton } = props;

    return (
        <Modal closeButton={closeButton} title="오늘의 한마디 작성">
            <Form onSubmit={(e) => e.preventDefault()}>
                <Grid paddingTop="15px">
                    <InputContainer>
                        <input
                            placeholder="오늘의 한마디를 입력해 주세요"
                            maxLength={15}
                        />
                        <p>
                            <span>0</span>
                            <span>/15</span>
                        </p>
                    </InputContainer>
                </Grid>

                <button>등록</button>
            </Form>
        </Modal>
    );
};

export default ModalTodayComment;
