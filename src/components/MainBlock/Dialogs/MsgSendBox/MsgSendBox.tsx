import React, {ChangeEvent, createRef, RefObject} from 'react';
import styled from 'styled-components';
import {addMessageAC, updateNewMessageAC} from "../../../../redux/state";

type MsgSendBoxType = {
    dispatch: (action:any) => void
    newMessageText: string
}

export const MsgSendBox:React.FC<MsgSendBoxType> = ({dispatch, newMessageText}) => {
    const msgInput: RefObject<HTMLTextAreaElement> = createRef();

    const onBtnSendClick = () => {
        let newMsg = msgInput.current?.value;
        dispatch(addMessageAC(newMsg));
    }

    const onTextareaChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageAC(e.currentTarget.value));
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