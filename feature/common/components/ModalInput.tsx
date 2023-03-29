import React, { useState } from 'react';
import styled from 'styled-components';

import { useMutationCoupleInfo } from 'feature/coupleInfo/queries/mutationFn';

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
        ${(props) => props.theme.Body_2};
        position: fixed;
        bottom: 0;
        height: ${pixelToVh(48)};
        background: ${(props) => props.theme.primaryPink};
        color: #fff;
        width: 100%;
    }
`;

const ModalInput = (props: any) => {
    const { closeButton, title, placeholder, maxLength, buttonText } = props;

    const [inputText, setInputText] = useState('');
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const coupleInfoMutation = useMutationCoupleInfo();

    const handleSubmit = () => {
        if (!inputText) {
            alert('내용을 입력해주세요');
            return;
        }

        if (props.title.includes('애칭')) {
            coupleInfoMutation({ nickname: inputText });
        } else if (props.title.includes('한마디')) {
            coupleInfoMutation({ todayComment: inputText });
        }

        closeButton();
    };

    return (
        <Modal closeButton={closeButton} title={title}>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Grid paddingTop="15px">
                    <InputContainer>
                        <input
                            placeholder={placeholder}
                            maxLength={maxLength}
                            value={inputText}
                            onChange={onChangeInput}
                        />
                        <p>
                            <span>{inputText.length}</span>
                            <span>/{maxLength}</span>
                        </p>
                    </InputContainer>
                </Grid>

                <button onClick={handleSubmit}>{buttonText}</button>
            </Form>
        </Modal>
    );
};

export default ModalInput;
