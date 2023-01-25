import styled from 'styled-components';

interface ElInputProps {
    className: string;
    label: string;
    type: string;
    _onChange?: () => void;
    _onFocus?: () => void;
    children?: React.ReactNode;
}

const ElInput = ({
    className,
    label,
    type,
    _onChange,
    _onFocus,
    children,
}: ElInputProps) => {
    return (
        <ElInputWrapper className={className}>
            <label>{label}</label>
            <input type={type} onChange={_onChange} onFocus={_onFocus} />
            {children}
        </ElInputWrapper>
    );
};

ElInput.defaultProps = {
    className: '',
    label: '',
    type: 'text',
    _onChange: () => {},
    _onFocus: () => {},
    children: null,
};

export default ElInput;

const ElInputWrapper = styled.div``;
