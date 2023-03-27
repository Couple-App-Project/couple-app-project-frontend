import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ElButton } from 'components';
import Calendar from 'public/images/illustrations/calendar.svg';
import { pixelToRem } from 'utils/utils';
import STEP_COMPONENT_LIST from 'utils/variables/stepComponnetList';
import type { StepLayoutPropsType } from 'types/StepLayoutPropsType';

const StepLayout = ({ title, children, disabled }: StepLayoutPropsType) => {
    const router = useRouter();
    return (
        <StepLayoutWrapper className={`style${STEP_COMPONENT_LIST[title].id}`}>
            {STEP_COMPONENT_LIST[title].id !== 3 && (
                <div className="icon-box" onClick={() => router.push('/login')}>
                    {STEP_COMPONENT_LIST[title].clickActive}
                </div>
            )}
            <div className="title-box">
                {STEP_COMPONENT_LIST[title].id !== 3 && (
                    <h3 className="layout-title">{title}</h3>
                )}
                <div className="step-num">
                    {Object.entries(STEP_COMPONENT_LIST).map((el, i) => {
                        return (
                            <div
                                key={i}
                                className={
                                    STEP_COMPONENT_LIST[title].id >= el[1].id
                                        ? 'active'
                                        : ''
                                }
                            >
                                {el[1].id}
                            </div>
                        );
                    })}
                </div>
                {STEP_COMPONENT_LIST[title].id === 3 && (
                    <>
                        <Calendar />
                        <h3 className="layout-title">{title}</h3>
                    </>
                )}
            </div>
            <div className="form-box">{children}</div>
            <ElButton type="submit" form={title} _disabled={disabled}>
                {STEP_COMPONENT_LIST[title].button}
            </ElButton>
        </StepLayoutWrapper>
    );
};

export default StepLayout;

const StepLayoutWrapper = styled.div`
    padding: ${pixelToRem(16)} ${pixelToRem(24)};
    .icon-box {
        margin-bottom: ${pixelToRem(42)};
        text-align: justify;
        svg {
            display: inline-block;
        }
    }
    &.style2 {
        .icon-box {
            text-align: end;
        }
    }

    .title-box {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .layout-title {
            ${({ theme }) => theme.Subhead_2};
            color: ${({ theme }) => theme.grey_6};
        }

        .step-num {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            div {
                width: ${pixelToRem(28)};
                ${({ theme }) => theme.Subhead_4};
                line-height: ${pixelToRem(28)};
                color: ${({ theme }) => theme.white};
                background-color: ${({ theme }) => theme.grey_3};
                border-radius: 50%;
                text-align: center;

                &:not(:first-child) {
                    margin-left: ${pixelToRem(8)};
                }

                &.active {
                    position: relative;
                    width: ${pixelToRem(24)};
                    line-height: ${pixelToRem(24)};
                    background-color: ${({ theme }) => theme.primaryPink};

                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: -1;
                        transform: translate(-50%, -50%);
                        width: ${pixelToRem(28)};
                        height: ${pixelToRem(28)};
                        background-color: ${({ theme }) => theme.mediumPink};
                        border-radius: 50%;
                    }
                }
            }
        }
    }

    &.style3 .title-box {
        flex-direction: column;

        .step-num {
            justify-content: flex-end;
            width: 100%;
            margin-bottom: ${pixelToRem(28)};
        }
        .layout-title {
            width: 100%;
            margin: ${pixelToRem(40)} 0 ${pixelToRem(12)};
        }
    }

    .form-box {
        margin-bottom: ${pixelToRem(24)};
    }
`;
