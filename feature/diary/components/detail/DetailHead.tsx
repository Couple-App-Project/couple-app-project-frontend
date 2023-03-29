import { useRouter } from 'next/router';
import styled from 'styled-components';
import Bookmark from 'public/icons/bookmark.svg';
import Close from 'public/images/icons/close.svg';
import { pixelToRem } from 'utils/utils';

const DetailHead = ({ bookmark }: { bookmark: boolean }) => {
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
    padding: ${pixelToRem(16)} ${pixelToRem(24)};

    svg {
        &.bookmark-false {
            fill: none;
        }
        &.bookmark-true {
            fill: ${({ theme }) => theme.primaryPink};
        }
        path {
            stroke: ${({ theme }) => theme.white};
        }
    }
`;
