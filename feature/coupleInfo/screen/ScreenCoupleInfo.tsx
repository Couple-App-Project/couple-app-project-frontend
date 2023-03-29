import { useState } from 'react';
import StepLayout from 'layouts/StepLayout';
import CoupleInfoForm from '../components/CoupleInfoForm';
import { useMutationCoupleInfo } from '../queries/mutationFn';

const ScreenCoupleInfo = () => {
    const [coupleData, setCoupleData] = useState({
        anniversary: '',
        nickname: '',
    });

    const onChangeCoupleInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoupleData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    /**
     * 커플 정보 입력
     */
    const coupleInfoMutation = useMutationCoupleInfo();

    const createCoupleInfo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        coupleInfoMutation(coupleData);
    };

    return (
        <StepLayout
            title="커플이 된 날은 언제인가요?"
            disabled={Object.values(coupleData).includes('') ? true : false}
        >
            <CoupleInfoForm
                coupleData={coupleData}
                onChangeCoupleInfo={onChangeCoupleInfo}
                createCoupleInfo={createCoupleInfo}
            />
        </StepLayout>
    );
};

export default ScreenCoupleInfo;
