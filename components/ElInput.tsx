import styled from 'styled-components';
import { pixelToRem } from 'utils/utils';

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
        align-items: flex-end;
    }
    input {
        width: 100%;
        padding: ${pixelToRem(18)} 0;
        ${({ theme }) => theme.Body_2}
        color: ${({ theme }) => theme.grey_6};
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid ${({ theme }) => theme.grey_2};

        &::placeholder {
            color: ${({ theme }) => theme.grey_4};
        }
    }
`;
