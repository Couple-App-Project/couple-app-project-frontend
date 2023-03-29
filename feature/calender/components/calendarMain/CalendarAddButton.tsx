import Link from 'next/link';
import styled from 'styled-components';
import AddBtnIcon from 'public/images/icons/add-button.svg';
import { pixelToRem } from 'utils/utils';

const CalendarAddButton = () => {
    return (
        <Link href="/calendar/register">
            <AddBtn>
                <AddBtnIcon />
            </AddBtn>
        </Link>
    );
};

export default CalendarAddButton;

const AddBtn = styled.a`
    position: absolute;
    bottom: ${pixelToRem(20)};
    right: ${pixelToRem(20)};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${pixelToRem(48)};
    height: ${pixelToRem(48)};
    margin-bottom: 12vh;
    background-color: ${({ theme }) => theme.primaryPink};
    border-radius: 50%;
`;
