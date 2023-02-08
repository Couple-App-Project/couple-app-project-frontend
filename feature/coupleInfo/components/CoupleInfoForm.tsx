import styled from 'styled-components';
import { Body_2 } from 'styles/fontTheme';
import DropDown from 'public/images/icons/drop-down.svg';

interface FormProps {
    coupleData: { anniversary: string; nickname: string };
    onChangeCoupleInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CoupleInfoForm = ({ coupleData, onChangeCoupleInfo }: FormProps) => {
    return (
        <FormWrapper>
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
                <Body_2>꾸욱에서 사용할 상대방 애칭을 적어주세요.</Body_2>
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
        padding: 0 0.875rem;
        line-height: 2.75rem;
        background-color: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.grey_3};
        border-radius: 4px;

        &.selected,
        & {
            color: ${(props) => props.theme.grey_6};
        }
        &.placeholder,
        &::placeholder {
            color: ${(props) => props.theme.grey_4};
        }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 40rem ${(props) => props.theme.white} inset;
    }

    .date-box {
        display: flex;
        margin-bottom: 1rem;

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
            margin-left: -1.75rem;
            align-self: center;
            path {
                stroke: ${(props) => props.theme.grey_4};
            }
        }
    }

    .nickname-box {
        p {
            margin-bottom: 0.375rem;
            color: ${(props) => props.theme.grey_6};
        }
    }
`;