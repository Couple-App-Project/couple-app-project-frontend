import styled from 'styled-components';

interface ElbuttonProps {
    type: 'button' | 'submit' | 'reset' | undefined;
    width: string;
    lineHeight: string;
    children?: React.ReactNode;
    _onClick: () => void;
    _disabled: boolean;
}

const ElButton = ({
    type,
    width,
    lineHeight,
    children,
    _onClick,
    _disabled,
}: ElbuttonProps) => {
    const styles = { width, lineHeight, _disabled };
    return (
        <Button {...styles} type={type} onClick={_onClick} disabled={_disabled}>
            {children}
        </Button>
    );
};

export default ElButton;

ElButton.defaultProps = {
    type: 'button',
    width: '100%',
    lineHeight: '',
    children: null,
    _onClick: () => {},
    _disabled: true,
};

const Button = styled.button`
    width: ${(props: any) => props.width};
    line-height: 48px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: ${(props: any) =>
        props._disabled ? '#a8aab2' : '#FF6E7F'};
    border-radius: 4px;
`;
