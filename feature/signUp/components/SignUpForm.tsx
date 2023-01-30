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
                        영문자, 숫자, 특수문자 조합으로 8~20자리를 입력해주세요.
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
                <select name="gender" onChange={(e) => onChangeInfo(e)}>
                    <option value="" disabled selected>
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
    & > div:not(:last-child) {
        margin-bottom: 15px;
    }

    .err-text {
        margin-top: 5px;
        font-size: 12px;
    }

    .select-box,
    .date-box {
        display: flex;
        select,
        input[type='date'] {
            margin: 0;
            padding: 1px 2px;
            min-width: 0;
            display: block;
            width: 100%;
            line-height: 35px;
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 1px solid #e9e9e9;
            color: inherit;
            background-color: transparent;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            &:focus {
                outline: none;
            }
        }
        select option[value=''][disabled] {
            display: none;
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
            margin-left: -28px;
            align-self: center;
        }
    }
`;

const CheckButton = styled('button')<{ isEmail: boolean }>`
    width: 75px;
    line-height: 32px;
    border: 1px solid #009dbf;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 400;
    background-color: ${(props) => (props.isEmail ? '#009DBF' : '#fff')};
    color: ${(props) => (props.isEmail ? '#fff' : '#009DBF')};
`;
