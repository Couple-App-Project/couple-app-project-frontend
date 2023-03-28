import { useRouter } from 'next/router';
import styled from 'styled-components';
import Back from 'public/images/icons/arrow-back.svg';
import { pixelToRem } from 'utils/utils';
import { CalendarSearchPropsType } from '../../types';

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
                    onChange={(e) => onChangeKeyword!(e)}
                />
                {keyword && (
                    <div
                        className="search-clear"
                        onClick={() => onChangeKeyword!()}
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
    margin-bottom: ${pixelToRem(16)};

    .input-content {
        position: relative;
        width: 100%;
        margin-left: ${pixelToRem(12)};
        input {
            width: 100%;
            padding: ${pixelToRem(10)} ${pixelToRem(32)} ${pixelToRem(10)};
            padding-left: ${pixelToRem(16)};
            border: none;
            border-radius: 4px;
            background-color: ${({ theme }) => theme.grey_1} !important;
            ${({ theme }) => theme.Body_1}
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
            box-shadow: 0 0 0 ${pixelToRem(50)} ${({ theme }) => theme.grey_1}
                inset;
            -webkit-box-shadow: 0 0 0 ${pixelToRem(50)}
                ${({ theme }) => theme.grey_1} inset;
        }

        .search-clear {
            position: absolute;
            top: 50%;
            right: ${pixelToRem(8)};
            transform: translateY(-50%);
            width: ${pixelToRem(20)};
            height: ${pixelToRem(20)};
            border-radius: 50%;
            background-color: ${({ theme }) => theme.grey_3};
            display: flex;
            justify-content: center;

            &:after {
                content: '×';
                ${({ theme }) => theme.Title_5}
                color: ${({ theme }) => theme.white};
            }
        }
    }
`;
