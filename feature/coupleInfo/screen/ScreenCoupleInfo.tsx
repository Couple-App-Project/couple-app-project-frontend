import StepLayout from 'layouts/StepLayout';
import { useState } from 'react';
import CoupleInfoForm from '../components/CoupleInfoForm';

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

    return (
        <StepLayout
            title="커플이 된 날은 언제인가요?"
            disabled={Object.values(coupleData).includes('') ? true : false}
        >
            <CoupleInfoForm
                coupleData={coupleData}
                onChangeCoupleInfo={onChangeCoupleInfo}
            />
        </StepLayout>
    );
};

export default ScreenCoupleInfo;
