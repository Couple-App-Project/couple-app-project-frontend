import styled from 'styled-components';
import { CalendarSearchPropsType } from 'feature/calender/types/CalendarSearchPropsType';
import { useRouter } from 'next/router';
import Back from 'public/images/icons/arrow-back.svg';

const SearchInput = ({ keyword, onChangeKeyword }: CalendarSearchPropsType) => {
    const router = useRouter();

    return (
        <SearchInputContainer className="search-input">
            <div onClick={() => router.push('/calendar')}>
                <Back />
            </div>
            <div className="input-content">
                <input
                    type="text"
                    placeholder="일정을 키워드로 검색해 보세요."
                    value={keyword || ''}
                    name="keyword"
                    onChange={(e) => onChangeKeyword(e)}
                />
                {keyword && (
                    <div
                        className="search-clear"
                        onClick={() => onChangeKeyword()}
                    />
                )}
            </div>
        </SearchInputContainer>
    );
};

export default SearchInput;

const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .input-content {
        position: relative;
        width: 100%;
        margin-left: 0.75rem;
        input {
            width: 100%;
            padding: 0.625rem 2rem 0.625rem 1rem;
            border: none;
            border-radius: 4px;
            background-color: ${(props) => props.theme.grey_1} !important;
            ${(props) => props.theme.Body_1}
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 40rem ${(props) => props.theme.grey_1}
                inset;
        }

        .search-clear {
            position: absolute;
            top: 50%;
            right: 0.5rem;
            transform: translateY(-50%);
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            background-color: ${(props) => props.theme.grey_3};
            text-align: center;

            &:after {
                content: '×';
                ${(props) => props.theme.Title_5}
                color: ${(props) => props.theme.white};
            }
        }
    }
`;
