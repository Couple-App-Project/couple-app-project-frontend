import styled from 'styled-components';
import Copy from 'public/images/icons/copy.svg';
import Share from 'public/images/icons/share.svg';
import { pixelToRem } from 'utils/utils';
import type { FormPropsType } from '../types';
import { handlerCopy, handlerShare } from '../modules/functions';

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
                    <input type="text" value={userCode} disabled />
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
    margin-top: ${pixelToRem(78)};

    h3,
    input {
        color: ${({ theme }) => theme.grey_6};
    }

    h3 {
        margin-bottom: ${pixelToRem(5)};
        ${({ theme }) => theme.Body_2}
    }

    input {
        width: 100%;
        padding: 0 ${pixelToRem(14)};
        ${({ theme }) => theme.Body_2};
        flex: 1;

        &::placeholder {
            color: ${({ theme }) => theme.grey_4};
        }
    }

    input,
    .icon-content {
        line-height: ${pixelToRem(44)};
        background-color: ${({ theme }) => theme.white};
        border: 1px solid ${({ theme }) => theme.grey_3};
        border-radius: 4px;
    }

    .user-code-content {
        margin-bottom: ${pixelToRem(16)};

        & > div {
            display: flex;
            justify-content: center;
            align-items: center;

            .icon-content {
                width: ${pixelToRem(44)};
                margin-left: ${pixelToRem(5)};
                text-align: center;

                svg {
                    display: inline-block;
                    vertical-align: middle;

                    path {
                        stroke: ${({ theme }) => theme.grey_6};
                    }
                }
            }
        }
    }
`;
