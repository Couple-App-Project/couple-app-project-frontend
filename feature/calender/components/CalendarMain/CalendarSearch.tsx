import styled from 'styled-components';
import Back from 'public/images/icons/arrow-back.svg';
import { useSetRecoilState } from 'recoil';
import isSearchState from 'recoil/isSearchState';

interface CalendarSearchPropsType {
    search: { keyword: string; type?: string };
    onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalendarSearch = ({
    search,
    onChangeSearch,
}: CalendarSearchPropsType) => {
    const isSearch = useSetRecoilState(isSearchState);
    return (
        <SearchContainer>
            <div className="search-input">
                <div onClick={() => isSearch('')}>
                    <Back />
                </div>
                <input
                    type="text"
                    value={search.keyword}
                    name="keyword"
                    onChange={(e) => onChangeSearch(e)}
                />
            </div>
        </SearchContainer>
    );
};

export default CalendarSearch;

const SearchContainer = styled.div`
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.white};
`;
