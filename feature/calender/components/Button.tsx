import React from 'react';
import styled from 'styled-components';
// import defaultTheme from 'styles/colors';

const ElButton = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 34px;
    border: ${(props: any) => (props.active ? '' : '1px solid #EFEFEF')};
    background: ${(props: any) =>
        props.active && props.type === '데이트'
            ? `${props.theme.primaryPink}`
            : props.active && props.type === '기념일'
            ? `${props.theme.primaryBlue}`
            : ''};
    color: ${(props: any) => (props.active ? '#fff' : `${props.theme.grey_4}`)};
    border-radius: 62px;
`;

const Button = (props: any) => {
    const { _onClick, children, type, active } = props;

    const styles = {
        active,
    };

    return (
        <ElButton
            {...styles}
            name="type"
            value={children}
            type={type}
            onClick={_onClick}
        >
            {children}
        </ElButton>
    );
};

export default Button;
