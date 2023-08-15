import React, {ChangeEvent, createRef, RefObject} from 'react';
import styled from 'styled-components';

type MsgSendBoxType = {
    addMessage: (newText:string) => void,
    newMessageText: string,
    updateNewMessage: (newMessageText:string) => void
}
export const MsgSendBox:React.FC<MsgSendBoxType> = ({addMessage, newMessageText,updateNewMessage}) => {
    const msgInput: RefObject<HTMLTextAreaElement> = createRef();

    const onBtnSendClick = () => {
        msgInput.current && addMessage(newMessageText);
    }

    const onTextareaChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessage(e.currentTarget.value);
    }

    return (
        <StyledMsgSendBox>
            <textarea value={newMessageText} onChange={onTextareaChange} ref={msgInput}></textarea>
            <button onClick={onBtnSendClick}>Send</button>
        </StyledMsgSendBox>
    );
};

const StyledMsgSendBox = styled.div`
  
`