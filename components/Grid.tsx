import styled from 'styled-components';

interface Props {
    children: any;
    paddingTop?: string;
}

const GridBox = styled.div<Props>`
    ${(props) => (props.paddingTop ? `padding-top: ${props.paddingTop};` : "")}
    padding-right: 24px;
    padding-left: 24px;
`

const Grid = (props: Props) => {
    const { children, paddingTop } = props;

    const styles = {
        paddingTop
    }

    return (
        <GridBox {...styles}>
            {children}
        </GridBox>
    );
};

Grid.defaultProps = {
    paddingTop: '63px'
};

export default Grid;