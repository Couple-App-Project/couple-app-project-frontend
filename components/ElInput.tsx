import styled from 'styled-components';

interface ElInputProps {
    className: string;
    label?: string;
    placeholder?: string;
    role: string;
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
    role,
    type,
    value,
    name,
    _onChange,
    _onFocus,
    children,
}: ElInputProps) => {
    const styles = { role };

    return (
        <ElInputWrapper className={className}>
            {label && <label>{label}</label>}
            <input
                {...styles}
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
    role: 'underline',
    _onChange: () => {},
    _onFocus: () => {},
    children: null,
};

export default ElInput;

const ElInputWrapper = styled.div`
    input {
        width: 100%;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #e9e9e9;
    }
`;
