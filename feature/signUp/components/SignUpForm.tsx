import type { FormPropsType } from '../types/FormPropsType';
import GENDER_LIST from '../modules/variables/genderList';
import { ElInput } from 'components';

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
            <ElInput
                className="form-list"
                role="underline"
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
                {fieldFocus.email && fieldErr.email && (
                    <p>이메일 형식에 맞게 입력해 주세요.</p>
                )}
            </ElInput>
            <ElInput
                className="form-list"
                role="underline"
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
                    <p>
                        영문자, 숫자, 특수문자 조합으로 8~20자리를 입력해주세요.
                    </p>
                )}
            </ElInput>
            <ElInput
                className="form-list"
                role="underline"
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
                    <p>비밀번호가 일치하지 않습니다.</p>
                )}
            </ElInput>
            <ElInput
                className="form-list"
                role="underline"
                placeholder="이름"
                name="name"
                value={userInfo.name}
                _onChange={(e) => onChangeInfo(e)}
            />
            <div className="form-list">
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
            </div>
            <div className="form-list">
                <input
                    type="date"
                    name="birthDay"
                    data-placeholder="생일"
                    required
                    aria-required="true"
                    value={userInfo.birthDay}
                    onChange={(e) => onChangeInfo(e)}
                />
            </div>
        </form>
    );
};

export default SignUpFrom;
