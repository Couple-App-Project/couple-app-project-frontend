import styled from 'styled-components';
import { SearchListPropsType } from 'feature/calender/types';
import { changeDate } from 'utils/functions';
import { pixelToRem } from 'utils/utils';

const SearchList = ({ list, search }: SearchListPropsType) => {
    /**
     * 검색 일정 목록에 searchDate 프로퍼티 추가
     */
    const searchList = list?.map((v) => {
        return {
            ...v,
            searchDate: `${v.startDate.split('-')[0]}년 ${
                v.startDate.split('-')[1]
            }월`,
        };
    });

    /**
     * searchDate 프로퍼티 값으로 변경 후 중복 제거
     */
    let searchMonth = list?.map(
        (v) => `${v.startDate.split('-')[0]}년 ${v.startDate.split('-')[1]}월`,
    );

    searchMonth = searchMonth?.filter((el, i) => {
        return searchMonth.indexOf(el) === i;
    });

    return (
        <SearchListContainer>
            {!list || list?.length < 1 ? (
                <p className="not-list">검색 결과가 없습니다</p>
            ) : (
                <>
                    {searchMonth?.map((el, index) => {
                        return (
                            <div key={index} className="list-content">
                                <div>
                                    <h3>{el}</h3>
                                    {el === searchMonth[0] && (
                                        <span>{`${list.length}개의 결과`}</span>
                                    )}
                                </div>
                                <ul>
                                    {searchList.map((cur, index) => {
                                        return (
                                            cur.searchDate === el && (
                                                <li key={index}>
                                                    <div
                                                        className={`${cur.type}`}
                                                    />
                                                    <h4>
                                                        <mark
                                                            className={`${cur.type}`}
                                                        >
                                                            {search}
                                                        </mark>
                                                        {cur.title.replace(
                                                            search,
                                                            '',
                                                        )}
                                                    </h4>
                                                    <span>
                                                        {changeDate(
                                                            new Date(
                                                                cur.startDate,
                                                            ),
                                                        )}
                                                    </span>
                                                </li>
                                            )
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </>
            )}
        </SearchListContainer>
    );
};

export default SearchList;

const SearchListContainer = styled.div`
    h3,
    h4 {
        color: ${({ theme }) => theme.grey_6};
        ${({ theme }) => theme.Body_3}
    }

    .not-list {
        margin: ${pixelToRem(24)} ${pixelToRem(5)};
        color: ${({ theme }) => theme.grey_4};
        ${({ theme }) => theme.Body_1}
    }

    .list-content {
        &:not(:last-child) {
            border-bottom: 1px solid ${({ theme }) => theme.grey_2};
        }

        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: ${pixelToRem(24)} 0;

            span {
                color: ${({ theme }) => theme.grey_4};
                ${({ theme }) => theme.Body_3}
            }
        }

        ul {
            li {
                position: relative;
                padding-left: ${pixelToRem(24)};
                margin-bottom: ${pixelToRem(20)};

                div {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: ${pixelToRem(8)};
                    height: ${pixelToRem(8)};
                    border-radius: 50%;

                    &.기념일 {
                        background-color: ${({ theme }) => theme.mediumBlue};
                    }
                    &.데이트 {
                        background-color: ${({ theme }) => theme.primaryPink};
                    }
                }

                mark {
                    background-color: transparent;
                    &.기념일 {
                        color: ${({ theme }) => theme.mediumBlue};
                    }
                    &.데이트 {
                        color: ${({ theme }) => theme.primaryPink};
                    }
                }

                span {
                    ${({ theme }) => theme.Body_3}
                    color: ${({ theme }) => theme.grey_4};
                }
            }
        }
    }
`;
