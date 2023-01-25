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
        <FormWrapper onSubmit={createCoupleConnet}>
            <div className="user-code-content">
                <p>내 코드를 상대방에게 복사 또는 공유하세요.</p>
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
                <p>커플 코드를 받으셨나요?</p>
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
    p,
    input {
        font-weight: 500;
        font-size: 14px;
        color: #3b3d49;
    }

    input,
    .icon-content {
        line-height: 44px;
        background-color: #f0f0f0;
        border-radius: 4px;
    }

    p {
        margin-bottom: 15px;
    }

    input {
        width: 100%;
        padding: 0 20px;
        border: none;
    }

    .user-code-content {
        margin-bottom: 30px;

        & > div {
            display: flex;
            justify-content: center;
            align-items: center;

            .icon-content {
                width: 44px;
                margin-left: 5px;
                text-align: center;

                svg {
                    vertical-align: middle;
                }
            }
        }
    }
`;
