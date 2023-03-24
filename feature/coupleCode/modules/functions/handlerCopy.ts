/**
 * 사용자 코드 복사 Fn
 * @param userCode 사용자 코드
 */
const handlerCopy = (userCode: string) => {
    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(`${userCode}`)
            .then(() => alert('코드가 클립보드에 복사되었습니다.'))
            .catch(() => alert('복사를 다시 시도해주세요.'));
    } else {
        alert('복사하기가 지원되지 않는 환경입니다.');
    }
};

export default handlerCopy;
