import styled from 'styled-components';
import type { FormPropsType } from '../types/FormPropsTypes';
import { handlerCopy, handlerShare } from '../modules/functions';
import Copy from 'public/images/icons/copy.svg';
import Share from 'public/images/icons/share.svg';

const CoupleCodeForm = ({
    userCode,
    inviteCode,
    onChangeCode,
    createCoupleConnet,
}: FormPropsType) => {
    return (
        <FormWrapper onSubmit={createCoupleConnet} id="커플 코드">
            <div className="user-code-content">
                <h3>내 코드를 상대방에게 복사 또는 공유하세요.</h3>
                <div>
                    <input type="text" defaultValue={userCode} disabled />
                    <div className="icon-content">
                        <Copy onClick={() => handlerCopy(userCode)} />
                    </div>
                    <div className="icon-content">
                        <Share onClick={() => handlerShare(userCode)} />
                    </div>
                </div>
            </div>
            <div className="invite-code-content">
                <h3>커플 코드를 받으셨나요?</h3>
                <input
                    type="text"
                    placeholder="코드 입력"
                    value={inviteCode}
                    onChange={onChangeCode}
                />
            </div>
        </FormWrapper>
    );
};

export default CoupleCodeForm;

const FormWrapper = styled.form`
    margin-top: 4.875rem;

    h3,
    input {
        color: ${(props) => props.theme.grey_6};
    }

    h3 {
        margin-bottom: 0.375rem;
        ${(props) => props.theme.Body_2}
    }

    input {
        width: 100%;
        padding: 0 0.875rem;
        font-size: 0.875rem;
        font-weight: 400;

        &::placeholder {
            color: ${(props) => props.theme.grey_4};
        }
    }

    input,
    .icon-content {
        line-height: 2.75rem;
        background-color: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.grey_3};
        border-radius: 4px;
    }

    .user-code-content {
        margin-bottom: 1rem;

        & > div {
            display: flex;
            justify-content: center;
            align-items: center;

            .icon-content {
                width: 2.75rem;
                margin-left: 5px;
                text-align: center;

                svg {
                    vertical-align: middle;

                    path {
                        stroke: ${(props) => props.theme.grey_6};
                    }
                }
            }
        }
    }
`;
