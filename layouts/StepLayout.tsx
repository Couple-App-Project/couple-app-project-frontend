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
        <StepLayoutWrapper>
            {STEP_COMPONENT_LIST[title].id !== 3 && (
                <div className="icon-box" onClick={() => router.push('/login')}>
                    {STEP_COMPONENT_LIST[title].clickActive}
                </div>
            )}
            <div className={`title-box style${STEP_COMPONENT_LIST[title].id}`}>
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
    padding: 1.5rem;
    .icon-box {
        margin-bottom: 2.25rem;
    }

    .title-box {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .layout-title {
            ${(props) => props.theme.Subhead_2};
            color: ${(props) => props.theme.grey_6};
        }

        .step-num {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            div {
                width: 1.75rem;
                ${(props) => props.theme.Subhead_4};
                line-height: 1.75rem;
                color: ${(props) => props.theme.white};
                background-color: ${(props) => props.theme.grey_3};
                border-radius: 50%;
                text-align: center;

                &:not(:first-child) {
                    margin-left: 0.5rem;
                }

                &.active {
                    position: relative;
                    width: 1.5rem;
                    line-height: 1.5rem;
                    background-color: ${(props) => props.theme.primaryPink};

                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: -1;
                        transform: translate(-50%, -50%);
                        width: 1.75rem;
                        height: 1.75rem;
                        background-color: ${(props) => props.theme.mediumPink};
                        border-radius: 50%;
                    }
                }
            }
        }
    }

    .style3 {
        flex-direction: column;

        .step-num {
            justify-content: flex-end;
            width: 100%;
            margin-bottom: 1.625rem;
        }
        .layout-title {
            width: 100%;
            margin: 2.5rem 0 0.75rem;
        }
    }

    .form-box {
        margin-bottom: ${pixelToRem(24)};
    }
`;
