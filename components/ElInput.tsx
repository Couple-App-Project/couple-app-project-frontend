import styled from 'styled-components';

interface ElInputProps {
    className: string;
    label?: string;
    placeholder?: string;
    type: string;
    value: string;
    name?: string;
    _onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    _onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}

const ElInput = ({
    className,
    label,
    placeholder,
    type,
    value,
    name,
    _onChange,
    _onFocus,
    children,
}: ElInputProps) => {
    return (
        <ElInputWrapper className={className}>
            {label && <label>{label}</label>}
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
                onChange={_onChange}
                onFocus={_onFocus}
            />
            {children}
        </ElInputWrapper>
    );
};

ElInput.defaultProps = {
    className: '',
    label: null,
    placeholder: '',
    type: 'text',
    _onChange: () => {},
    _onFocus: () => {},
    children: null,
};

export default ElInput;

const ElInputWrapper = styled.div`
    &.flex-box {
        display: flex;
        justify-content: center;
        align-items: normal;
    }
    input {
        width: 100%;
        line-height: 35px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #e9e9e9;
    }
`;
