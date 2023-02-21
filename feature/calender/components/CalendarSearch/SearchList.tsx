import { getMonth, getDate, getDay } from 'date-fns';
import { changeGetDay } from 'feature/calender/modules/functions';
import styled from 'styled-components';

const SearchList = ({ list, search }: any) => {
    const searchList = list?.map((v: any) => {
        return {
            ...v,
            searchDate: `${v.startDate.split('-')[0]}년 ${
                v.startDate.split('-')[1]
            }월`,
        };
    });

    let searchMonth = list?.map(
        (v: any) =>
            `${v.startDate.split('-')[0]}년 ${v.startDate.split('-')[1]}월`,
    );

    searchMonth = searchMonth?.filter((el: any, index: any) => {
        return searchMonth.indexOf(el) === index;
    });

    return (
        <SearchListContainer>
            {!list ? (
                <p className="not-list">검색 결과가 없습니다</p>
            ) : (
                <>
                    {searchMonth.map((el: any, index: any) => {
                        return (
                            <div key={index} className="list-content">
                                <div>
                                    <h3>{el}</h3>
                                    {el === searchMonth[0] && (
                                        <span>{`${list.length}개의 결과`}</span>
                                    )}
                                </div>
                                <ul>
                                    {searchList.map((cur: any, index: any) => {
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
                                                        {`${
                                                            getMonth(
                                                                new Date(
                                                                    cur.startDate,
                                                                ),
                                                            ) + 1
                                                        }월 ${getDate(
                                                            new Date(
                                                                cur.startDate,
                                                            ),
                                                        )}일 (${changeGetDay(
                                                            getDay(
                                                                new Date(
                                                                    cur.startDate,
                                                                ),
                                                            ),
                                                        )})`}
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
        color: ${(props) => props.theme.grey_6};
        ${(props) => props.theme.Body_3}
    }

    .list-content {
        &:not(:last-child) {
            border-bottom: 1px solid ${(props) => props.theme.grey_2};
        }

        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1.25rem 0;

            span {
                color: ${(props) => props.theme.grey_4};
                ${(props) => props.theme.Body_3}
            }
        }

        ul {
            li {
                position: relative;
                padding-left: 1.5rem;
                margin-bottom: 1.25rem;

                div {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 0.5rem;
                    height: 0.5rem;
                    border-radius: 50%;

                    &.기념일 {
                        background-color: ${(props) => props.theme.mediumBlue};
                    }
                    &.데이트 {
                        background-color: ${(props) => props.theme.primaryPink};
                    }
                }

                mark {
                    background-color: transparent;
                    &.기념일 {
                        color: ${(props) => props.theme.mediumBlue};
                    }
                    &.데이트 {
                        color: ${(props) => props.theme.primaryPink};
                    }
                }

                span {
                    font-size: 0.75rem;
                    font-weight: 400;
                    color: ${(props) => props.theme.grey_4};
                }
            }
        }
    }
`;
