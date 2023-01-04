import type { FormPropsType } from '../types/FormPropsTypes';

const CoupleCodeForm = ({
    data,
    inviteCode,
    onChangeCode,
    handlerCopy,
    createCoupleConnet,
}: FormPropsType) => {
    return (
        <form onSubmit={createCoupleConnet}>
            <div>
                <label>내 커플 코드</label>
                <input
                    type="text"
                    defaultValue={data?.data.inviteCode}
                    disabled
                />
                <button type="button" onClick={handlerCopy}>
                    코드복사
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
