import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    ${(props) => props.theme.Body_1};
    width: 100%;
    padding: 18px 0;
    border: none;
    color: ${(props) => props.theme.grey_6};
`;

const FormInput = (props: any) => {
    const { _name, value, _onChange, _placeholder } = props;

    return (
        <Input
            name={_name}
            value={value}
            onChange={_onChange}
            placeholder={_placeholder}
        />
    );
};

export default FormInput;
