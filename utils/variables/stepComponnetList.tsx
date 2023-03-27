import Back from 'public/images/icons/back.svg';
import Close from 'public/images/icons/close.svg';
import type { StepComponnentType } from 'types/StepComponnentType';

const STEP_COMPONENT_LIST: StepComponnentType = {
    회원가입: {
        id: 1,
        clickActive: <Back />,
        button: '가입완료',
    },
    '커플 코드': {
        id: 2,
        clickActive: <Close />,
        button: '연결하기',
    },
    '커플이 된 날은 언제인가요?': {
        id: 3,
        button: '꾸욱 시작',
    },
};

export default STEP_COMPONENT_LIST;
