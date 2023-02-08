import styled from 'styled-components';
import AddBtnIcon from 'public/images/icons/add-button.svg';

const CalendarAddButton = () => {
    return (
        <AddBtn>
            <AddBtnIcon />
        </AddBtn>
    );
};

export default CalendarAddButton;

const AddBtn = styled.button`
    position: absolute;
    bottom: 6rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    background-color: #ff6e7f;
    border-radius: 50%;
`;
