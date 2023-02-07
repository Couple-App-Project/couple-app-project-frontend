import styled from 'styled-components';

interface ElbuttonProps {
    type: 'button' | 'submit' | 'reset' | undefined;
    form?: string;
    width: string;
    lineHeight: string;
    children?: React.ReactNode;
    _onClick: () => void;
    _disabled: boolean;
}

const ElButton = ({
    type,
    form,
    width,
    lineHeight,
    children,
    _onClick,
    _disabled,
}: ElbuttonProps) => {
    const styles = { width, lineHeight, _disabled };
    return (
        <Button
            {...styles}
            type={type}
            onClick={_onClick}
            disabled={_disabled}
            form={form}
        >
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
    line-height: 3rem;
    text-align: center;
    font-size: 0.825rem;
    font-weight: 400;
    color: ${(props: any) =>
        props._disabled ? props.theme.grey_4 : props.theme.white};
    background-color: ${(props: any) =>
        props._disabled ? props.theme.grey_3 : props.theme.primaryPink};
    border-radius: 50px;
`;
