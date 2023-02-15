import styled from 'styled-components';
import type { FormPropsType } from '../types/FormPropsType';
import GENDER_LIST from '../modules/variables/genderList';
import { ElInput } from 'components';
import DropDown from 'public/images/icons/drop-down.svg';

const SignUpFrom = ({
    userInfo,
    onChangeInfo,
    fieldFocus,
    focusHandler,
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
                    _onFocus={(e) => {
                        focusHandler(e);
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
                {fieldFocus.email && fieldErr.email && (
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
                _onFocus={(e) => {
                    focusHandler(e);
                    errorHandler(e);
                }}
            >
                {fieldFocus.password && fieldErr.password && (
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
                value={userInfo.pwdConfirm}
                _onChange={(e) => {
                    onChangeInfo(e);
                    errorHandler(e, userInfo.password);
                }}
                _onFocus={(e) => {
                    focusHandler(e);
                    errorHandler(e, userInfo.password);
                }}
            >
                {fieldFocus.pwdConfirm && fieldErr.pwdConfirm && (
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
                    {Object.entries(GENDER_LIST).map((el, i) => {
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
    margin-top: 1.25rem;

    & > div:not(:last-child) {
        margin-bottom: 1rem;
    }

    .err-text {
        margin-top: 5px;
        color: ${(props) => props.theme.grey_6};
        ${(props) => props.theme.Body_4};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 40rem ${(props) => props.theme.white} inset;
    }

    .select-box,
    .date-box {
        display: flex;
        select,
        input[type='date'] {
            margin: 0;
            padding: 0;
            min-width: 0;
            display: block;
            width: 100%;
            font-size: 0.875rem;
            line-height: 2.25rem;
            font-weight: 400;
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 1px solid ${(props) => props.theme.grey_2};
            background-color: transparent;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            &:focus {
                outline: none;
            }
            &.selected {
                color: ${(props) => props.theme.grey_6};
            }
            &.placeholder {
                color: ${(props) => props.theme.grey_4};
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
`;

const CheckButton = styled('button')<{ isEmail: boolean }>`
    width: 5.7rem;
    height: 2rem;
    border: 1px solid ${(props) => props.theme.primaryBlue};
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 400;
    background-color: ${(props) =>
        props.isEmail ? props.theme.primaryBlue : props.theme.white};
    color: ${(props) =>
        props.isEmail ? props.theme.white : props.theme.primaryBlue};
`;
