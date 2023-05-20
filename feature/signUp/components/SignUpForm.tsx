import styled from 'styled-components';
import { ElInput } from 'components';
import DropDown from 'public/images/icons/drop-down.svg';
import { pixelToRem } from 'utils/utils';
import type { FormPropsType } from '../types';
import GENDER_LIST from '../modules/variables/genderList';

const SignUpFrom = ({
    userInfo,
    onChangeInfo,
    fieldErr,
    errorHandler,
    checkHandler,
    isEmail,
    sendSignUp,
}: FormPropsType) => {
    return (
        <FormWrapper onSubmit={sendSignUp} id="회원가입">
            <div className="form-list">
                <ElInput
                    className="flex-box"
                    placeholder="이메일"
                    name="email"
                    value={userInfo.email}
                    _onChange={(e) => {
                        onChangeInfo(e);
                        errorHandler(e);
                    }}
                >
                    <CheckButton
                        type="button"
                        isEmail={isEmail}
                        onClick={() =>
                            userInfo.email
                                ? checkHandler()
                                : fieldErr.email
                                ? alert('이메일 형식에 맞게 입력해 주세요.')
                                : alert('아이디를 입력해 주세요.')
                        }
                    >
                        중복확인
                    </CheckButton>
                </ElInput>
                {fieldErr.email && (
                    <p className="err-text">
                        이메일 형식에 맞게 입력해 주세요.
                    </p>
                )}
            </div>
            <ElInput
                className="form-list"
                placeholder="비밀번호"
                type="password"
                name="password"
                value={userInfo.password}
                _onChange={(e) => {
                    onChangeInfo(e);
                    errorHandler(e);
                }}
            >
                {fieldErr.password && (
                    <p className="err-text">
                        8~20자 이내로 영문 대소문자, 숫자를 3가지 이상 혼용하여
                        입력해 주세요.
                    </p>
                )}
            </ElInput>
            <ElInput
                className="form-list"
                placeholder="비밀번호 확인"
                type="password"
                name="pwdConfirm"
                value={userInfo.pwdConfirm!}
                _onChange={(e) => {
                    onChangeInfo(e);
                    errorHandler(e, userInfo.password);
                }}
            >
                {fieldErr.pwdConfirm && (
                    <p className="err-text">비밀번호가 일치하지 않습니다.</p>
                )}
            </ElInput>
            <ElInput
                className="form-list"
                placeholder="이름"
                name="name"
                value={userInfo.name}
                _onChange={(e) => onChangeInfo(e)}
            />
            <div className="form-list select-box">
                <select
                    name="gender"
                    className={userInfo.gender ? 'selected' : 'placeholder'}
                    value={userInfo.gender}
                    onChange={(e) => onChangeInfo(e)}
                >
                    <option value="" disabled hidden>
                        성별
                    </option>
                    {Object.entries(GENDER_LIST).map((el) => {
                        return (
                            <option key={el[0]} value={el[1].value}>
                                {el[1].text}
                            </option>
                        );
                    })}
                </select>
                <DropDown />
            </div>
            <div className="form-list date-box">
                <input
                    type="date"
                    name="birthDay"
                    className={userInfo.birthDay ? 'selected' : 'placeholder'}
                    data-placeholder="생일"
                    required
                    aria-required="true"
                    value={userInfo.birthDay}
                    onChange={(e) => onChangeInfo(e)}
                />
                <DropDown />
            </div>
        </FormWrapper>
    );
};

export default SignUpFrom;

const FormWrapper = styled.form`
    margin-top: ${pixelToRem(20)};

    .err-text {
        margin-top: ${pixelToRem(5)};
        color: ${({ theme }) => theme.grey_6};
        ${({ theme }) => theme.Body_4};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
        box-shadow: 0 0 0 ${pixelToRem(50)} ${(props) => props.theme.white}
            inset;
        -webkit-box-shadow: 0 0 0 ${pixelToRem(50)}
            ${(props) => props.theme.white} inset;
    }

    .select-box,
    .date-box {
        display: flex;
        select,
        input[type='date'] {
            display: block;
            width: 100%;
            min-width: 0;
            padding: ${pixelToRem(18)} 0;
            ${({ theme }) => theme.Body_2}
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 1px solid ${(props) => props.theme.grey_2};
            background-color: transparent;
            appearance: none;
            -webkit-appearance: none;
            &:focus {
                outline: none;
            }
            &.selected {
                color: ${({ theme }) => theme.grey_6};
            }
            &.placeholder {
                color: ${({ theme }) => theme.grey_4};
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
`;

const CheckButton = styled('button')<{ isEmail: boolean }>`
    width: ${pixelToRem(90)};
    height: ${pixelToRem(32)};
    ${({ theme }) => theme.Body_3};
    border: 1px solid ${({ theme }) => theme.primaryBlue};
    border-radius: ${pixelToRem(62)};
    background-color: ${(props) =>
        props.isEmail ? props.theme.primaryBlue : props.theme.white};
    color: ${(props) =>
        props.isEmail ? props.theme.white : props.theme.primaryBlue};
`;
