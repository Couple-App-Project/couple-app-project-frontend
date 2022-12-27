import type { FormPropsType } from '../types/FormPropsType';
import GENDER_LIST from '../modules/variables/genderList';

const SignUpFrom = ({
    userInfo,
    onChangeInfo,
    fieldFocus,
    focusHandler,
    fieldErr,
    errorHandler,
    sendSignUp,
}: FormPropsType) => {
    return (
        <form className="sign-up-content" onSubmit={sendSignUp}>
            <fieldset>
                <legend>회원가입</legend>
                <div className="formbox">
                    <label htmlFor="email">이메일</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={(e) => {
                            onChangeInfo(e);
                            errorHandler(e);
                        }}
                        onFocus={(e) => {
                            focusHandler(e);
                            errorHandler(e);
                        }}
                    />
                    {fieldFocus.email && fieldErr.email && (
                        <p>이메일 형식에 맞게 입력해 주세요.</p>
                    )}
                </div>
                <div className="formbox">
                    <label htmlFor="password">비밀번호</label>
                    <input
                        id="password"
                        type="password"
                        name="pwd"
                        value={userInfo.pwd}
                        onChange={(e) => {
                            onChangeInfo(e);
                            errorHandler(e);
                        }}
                        onFocus={(e) => {
                            focusHandler(e);
                            errorHandler(e);
                        }}
                    />
                    {fieldFocus.pwd && fieldErr.pwd && (
                        <p>
                            영문자, 숫자, 특수문자 조합으로 8~20자리를
                            입력해주세요.
                        </p>
                    )}
                </div>
                <div className="formbox">
                    <label htmlFor="password-confirm">비밀번호 확인</label>
                    <input
                        id="password-confirm"
                        type="password"
                        name="pwdConfirm"
                        value={userInfo.pwdConfirm}
                        onChange={(e) => {
                            onChangeInfo(e);
                            errorHandler(e, userInfo.pwd);
                        }}
                        onFocus={(e) => {
                            focusHandler(e);
                            errorHandler(e, userInfo.pwd);
                        }}
                    />
                    {fieldFocus.pwdConfirm && fieldErr.pwdConfirm && (
                        <p>비밀번호가 일치하지 않습니다.</p>
                    )}
                </div>
                <div className="formbox">
                    <label htmlFor="name">이름</label>
                    <input
                        id="name"
                        name="name"
                        value={userInfo.name}
                        onChange={(e) => onChangeInfo(e)}
                    />
                </div>
                <div className="formbox">
                    {Object.entries(GENDER_LIST).map((el, i) => {
                        return (
                            <>
                                <input
                                    type="radio"
                                    id={el[0]}
                                    value={el[1].value}
                                    name="gender"
                                    onChange={(e) => onChangeInfo(e)}
                                    defaultChecked
                                />
                                <label htmlFor={el[0]}>{el[1].text}</label>
                            </>
                        );
                    })}
                </div>
                <div className="formbox">
                    <label htmlFor="birthday">생년월일</label>
                    <input
                        id="birthDay"
                        type="date"
                        name="birthDay"
                        value={userInfo.birthDay}
                        onChange={(e) => onChangeInfo(e)}
                    />
                </div>
                <button
                    type="submit"
                    disabled={
                        Object.values(fieldErr).includes(true) ||
                        userInfo.name === '' ||
                        userInfo.birthDay === ''
                            ? true
                            : false
                    }
                >
                    회원가입
                </button>
            </fieldset>
        </form>
    );
};

export default SignUpFrom;
