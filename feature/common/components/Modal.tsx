import React from 'react';
import styled from 'styled-components';
import Cancel from 'public/icons/cancel.svg';

const ModalContainer = styled.section<{ _height: string }>`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    top: 0;
    left: 0;

    .modal-content {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: ${(props) => (props._height ? props._height : '375px')};
        background: #fff;
        border-radius: 8px 8px 0px 0px;
        animation: fadeUp 0.5s;

        .modalHeader {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 47px;
            border-bottom: 1px solid ${(props) => props.theme.grey_2};

            h1 {
                ${(props) => props.theme.Title_4}
            }

            svg {
                position: absolute;
                right: 22px;
                top: 19px;
            }
        }
    }

    @keyframes fadeUp {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
        }
    }
`;

const Modal = (props: any) => {
    const { closeButton, children, title } = props;

    return (
        <ModalContainer _height={props._height}>
            <section className="modal-content">
                <header className="modalHeader">
                    {title ? <h1>{title}</h1> : null}
                    <Cancel width="11px" height="11px" onClick={closeButton} />
                </header>

                {children}
            </section>
        </ModalContainer>
    );
};

export default Modal;
