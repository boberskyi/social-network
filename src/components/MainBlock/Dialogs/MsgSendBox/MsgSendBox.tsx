import React, {createRef, RefObject} from 'react';
import styled from 'styled-components';

type MsgSendBoxType = {
    addMessage: (newText:string) => void
}
export const MsgSendBox:React.FC<MsgSendBoxType> = ({addMessage}) => {
    const msgInput: RefObject<HTMLTextAreaElement> = createRef();

    const onBtnSendClick = () => {
        msgInput.current && addMessage(msgInput.current.value)
    }

    return (
        <StyledMsgSendBox>
            <textarea ref={msgInput}></textarea>
            <button onClick={onBtnSendClick}>Send</button>
        </StyledMsgSendBox>
    );
};

const StyledMsgSendBox = styled.div`
  
`