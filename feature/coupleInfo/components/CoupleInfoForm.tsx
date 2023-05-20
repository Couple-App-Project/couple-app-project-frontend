import styled from 'styled-components';
import DropDown from 'public/images/icons/drop-down.svg';
import { pixelToRem } from 'utils/utils';
import type { FormPropsType } from '../types';

const CoupleInfoForm = ({
    coupleData,
    onChangeCoupleInfo,
    createCoupleInfo,
}: FormPropsType) => {
    return (
        <FormWrapper
            onSubmit={createCoupleInfo}
            id="커플이 된 날은 언제인가요?"
        >
            <div className="date-box">
                <input
                    type="date"
                    name="anniversary"
                    className={
                        coupleData.anniversary ? 'selected' : 'placeholder'
                    }
                    value={coupleData.anniversary}
                    onChange={(e) => onChangeCoupleInfo(e)}
                    data-placeholder="날짜 선택"
                    required
                    aria-required="true"
                />
                <DropDown />
            </div>
            <div className="nickname-box">
                <h3>꾸욱에서 사용할 상대방 애칭을 적어주세요.</h3>
                <input
                    type="text"
                    name="nickname"
                    placeholder="애칭 입력"
                    value={coupleData.nickname}
                    onChange={(e) => onChangeCoupleInfo(e)}
                />
            </div>
        </FormWrapper>
    );
};

export default CoupleInfoForm;

const FormWrapper = styled.form`
    input {
        width: 100%;
        padding: 0 ${pixelToRem(14)};
        ${({ theme }) => theme.Body_2};
        line-height: ${pixelToRem(44)};
        background-color: ${({ theme }) => theme.white};
        border: 1px solid ${({ theme }) => theme.grey_3};
        border-radius: 4px;

        &.selected,
        & {
            color: ${({ theme }) => theme.grey_6};
        }
        &.placeholder,
        &::placeholder {
            color: ${({ theme }) => theme.grey_4};
        }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
        box-shadow: 0 0 0 ${pixelToRem(50)} ${(props) => props.theme.white}
            inset;
        -webkit-box-shadow: 0 0 0 ${pixelToRem(50)}
            ${(props) => props.theme.white} inset;
    }

    .date-box {
        display: flex;
        margin-bottom: ${pixelToRem(16)};

        input[type='date'] {
            margin: 0;
            min-width: 0;
            display: block;
            background-color: transparent;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            &:focus {
                outline: none;
            }
        }
        input[type='date']::before {
            content: attr(data-placeholder);
            width: 100%;
        }
        input[type='date']:valid::before {
            display: none;
        }
        input[type='date']::-webkit-calendar-picker-indicator {
            background: transparent;
        }
        svg {
            margin-left: -${pixelToRem(28)};
            align-self: center;
            path {
                stroke: ${({ theme }) => theme.grey_4};
            }
        }
    }

    .nickname-box {
        h3 {
            margin-bottom: 0.375rem;
            color: ${({ theme }) => theme.grey_6};
            ${({ theme }) => theme.Body_2}
        }
    }
`;
