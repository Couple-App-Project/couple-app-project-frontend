import styled from 'styled-components';
import { ElButton } from 'components';
import Back from 'public/images/icons/back.svg';
import Close from 'public/images/icons/close.svg';
import Calendar from 'public/images/illustrations/calendar.svg';
import { useRouter } from 'next/router';
import { Subhead_2, Subhead_4 } from 'styles/fontTheme';

interface StepLayoutProps {
    title: string;
    children: React.ReactNode;
    disabled: boolean;
}

interface ComponentType {
    [title: string]: {
        id: number;
        clickActive?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
        button: string;
    };
}

const COMPONENT_LIST: ComponentType = {
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

const StepLayout = ({ title, children, disabled }: StepLayoutProps) => {
    const router = useRouter();
    return (
        <StepLayoutWrapper>
            {COMPONENT_LIST[title].id !== 3 && (
                <div className="icon-box" onClick={() => router.push('/login')}>
                    {COMPONENT_LIST[title].clickActive}
                </div>
            )}
            <div className={`title-box style${COMPONENT_LIST[title].id}`}>
                {COMPONENT_LIST[title].id !== 3 && (
                    <Subhead_2>{title}</Subhead_2>
                )}
                <div className="step-num">
                    {Object.entries(COMPONENT_LIST).map((el, i) => {
                        return (
                            <Subhead_4
                                key={i}
                                className={
                                    COMPONENT_LIST[title].id >= el[1].id
                                        ? 'active'
                                        : ''
                                }
                            >
                                {el[1].id}
                            </Subhead_4>
                        );
                    })}
                </div>
                {COMPONENT_LIST[title].id === 3 && (
                    <>
                        <Calendar />
                        <Subhead_2>{title}</Subhead_2>
                    </>
                )}
            </div>
            <div className="form-box">{children}</div>
            <ElButton type="submit" form={title} _disabled={disabled}>
                {COMPONENT_LIST[title].button}
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

        p {
            color: ${(props) => props.theme.grey_6};
        }

        .step-num {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            p {
                width: 1.75rem;
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
        p {
            width: 100%;
            margin: 2.5rem 0 0.75rem;
        }
    }

    .form-box {
        margin-bottom: 1.5rem;
    }
`;
