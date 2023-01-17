import type { FormPropsType } from '../types/FormPropsTypes';
import { handlerCopy, handlerShare } from '../modules/functions';

const CoupleCodeForm = ({
    userCode,
    inviteCode,
    onChangeCode,
    createCoupleConnet,
}: FormPropsType) => {
    return (
        <form onSubmit={createCoupleConnet}>
            <div>
                <label>내 커플 코드</label>
                <input type="text" defaultValue={userCode} disabled />
                <button type="button" onClick={handlerCopy(userCode)}>
                    코드복사
                </button>
                <button type="button" onClick={handlerShare(userCode)}>
                    공유하기
                </button>
            </div>
            <div>
                <label>커플 코드를 받으셨나요?</label>
                <input type="text" value={inviteCode} onChange={onChangeCode} />
            </div>
            <button type="submit" disabled={inviteCode !== '' ? false : true}>
                start
            </button>
        </form>
    );
};

export default CoupleCodeForm;
