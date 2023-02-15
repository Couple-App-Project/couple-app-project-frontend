import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ModalTodayComment = (props: any) => {
    const { closeButton } = props;

    return (
        <Modal closeButton={closeButton} title="오늘의 한마디 작성">
            <input placeholder="오늘의 한마디를 입력해 주세요" />
        </Modal>
    );
};

export default ModalTodayComment;
