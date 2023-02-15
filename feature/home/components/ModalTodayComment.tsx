import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ModalTodayComment = (props: any) => {
    const { closeButton } = props;

    return (
        <Modal closeButton={closeButton} title="오늘의 한마디 작성">
            <form onSubmit={(e) => e.preventDefault()}>
                <input placeholder="오늘의 한마디를 입력해 주세요" />
                <p>
                    <span>0</span>
                    <span>/15</span>
                </p>
            </form>
        </Modal>
    );
};

export default ModalTodayComment;
