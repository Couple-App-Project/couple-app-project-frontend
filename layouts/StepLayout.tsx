import styled from 'styled-components';
import { ElButton } from 'components';

interface StepLayoutProps {
    title: string;
    children: React.ReactNode;
}

const StepLayout = ({ title, children }: StepLayoutProps) => {
    return (
        <StepLayoutWrapper>
            <div></div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>{children}</div>
            <ElButton>
                {title === '회원가입' ? '가입완료' : '연결하기'}
            </ElButton>
        </StepLayoutWrapper>
    );
};

export default StepLayout;

const StepLayoutWrapper = styled.div``;
