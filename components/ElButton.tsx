import styled from 'styled-components';

interface ElbuttonProps {
    width: string;
    lineHeight: boolean | string;
    children?: React.ReactNode;
    _onClick: () => void;
}

const ElButton = ({ width, lineHeight, children, _onClick }: ElbuttonProps) => {
    const styles = { width, lineHeight };
    return (
        <Button {...styles} onClick={_onClick}>
            {children}
        </Button>
    );
};

export default ElButton;

ElButton.defaultProps = {
    width: 'auto',
    lineHeight: false,
    children: null,
    _onClick: () => {},
};

const Button = styled.button``;
