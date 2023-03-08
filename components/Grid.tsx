import styled from 'styled-components';
import { pixelToVh } from 'utils/utils';

interface Props {
    children: any;
    paddingTop?: string;
    relative?: boolean;
}

const GridBox = styled.div<Props>`
    ${(props) => (props.paddingTop ? `padding-top: ${props.paddingTop};` : '')}
    padding-right: 24px;
    padding-left: 24px;
    ${(props) => (props.relative ? 'position: relative;' : '')}
`;

const Grid = (props: Props) => {
    const { children, paddingTop, relative } = props;

    const styles = {
        paddingTop,
        relative,
    };

    return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
    paddingTop: `${pixelToVh(63)}`,
};

export default Grid;
