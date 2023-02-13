import styled from 'styled-components';
import Back from 'public/images/icons/arrow-back.svg';
import { useSetRecoilState } from 'recoil';
import isSearchState from 'recoil/isSearchState';

const CalendarSearch = () => {
    const isSearch = useSetRecoilState(isSearchState);
    return (
        <SearchContainer>
            <div className="search-input">
                <div onClick={() => isSearch('')}>
                    <Back />
                </div>
                <input type="text" />
            </div>
        </SearchContainer>
    );
};

export default CalendarSearch;

const SearchContainer = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.white};
`;
