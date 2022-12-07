import React, { useState } from 'react';
import styled from 'styled-components';

const ScreenCoupleCode = () => {
    const [coupleCode, setCoupleCode] = useState({
        userCode: 'A98YEON619',
        inviteCode: '',
    });

    const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoupleCode((prev) => {
            return { ...prev, inviteCode: e.target.value };
        });
    };

    const handlerCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(`${coupleCode.userCode}`)
                .then(() => alert('코드가 클립보드에 복사되었습니다.'))
                .catch(() => alert('복사를 다시 시도해주세요.'));
        } else {
            alert('공유하기가 지원되지 않는 환경입니다.');
        }
    };

    return (
        <CoupleInfoWrap>
            <form>
                <div>
                    <label>내 커플 코드</label>
                    <input
                        type="text"
                        defaultValue={coupleCode.userCode}
                        disabled
                    />
                    <button type="button" onClick={handlerCopy}>
                        코드복사
                    </button>
                </div>
                <div>
                    <label>커플 코드를 받으셨나요?</label>
                    <input
                        type="text"
                        value={coupleCode.inviteCode}
                        onChange={onChangeCode}
                    />
                </div>
                <button
                    type="submit"
                    disabled={coupleCode.inviteCode !== '' ? false : true}
                >
                    start
                </button>
            </form>
        </CoupleInfoWrap>
    );
};

export default ScreenCoupleCode;

const CoupleInfoWrap = styled.div``;
