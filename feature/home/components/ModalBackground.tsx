import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import ChevronRight from 'public/icons/chevron-right.svg';

const ModalBackground = (props: any) => {
    const { closeButton } = props;

    return (
        <Modal closeButton={closeButton}>
            <article>
                <button>배경 사진</button>
                <ChevronRight />
            </article>
            <article>
                <button>배경 색상</button>
                <ChevronRight />
            </article>
        </Modal>
    );
};

export default ModalBackground;
