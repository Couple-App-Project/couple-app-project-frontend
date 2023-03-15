import styled from 'styled-components';
import Close from 'public/images/icons/close.svg';
import Bookmark from 'public/icons/bookmark.svg';
import { useRouter } from 'next/router';

const DetailHead = ({ bookmark }: any) => {
    const router = useRouter();
    return (
        <DetailHeadContainer>
            <Close onClick={() => router.push('/diary')} />
            <Bookmark className={`bookmark-${bookmark}`} />
        </DetailHeadContainer>
    );
};

export default DetailHead;

const DetailHeadContainer = styled.div`
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 1.5rem;

    svg {
        &.bookmark-false {
            fill: none;
        }
        &.bookmark-true {
            fill: ${(props) => props.theme.primaryPink};
        }
        path {
            stroke: ${(props) => props.theme.white};
        }
    }
`;
