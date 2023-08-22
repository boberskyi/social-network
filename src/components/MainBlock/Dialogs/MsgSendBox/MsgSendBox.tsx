import React, {ChangeEvent, createRef, RefObject} from 'react';
import styled from 'styled-components';
import {addMessageAC, DialogsActionsType, updateNewMessageAC} from "../../../../redux/dialogs-reducer";

type MsgSendBoxType = {
    dispatch: (action:DialogsActionsType) => void
    newMessageText: string
}

export const MsgSendBox:React.FC<MsgSendBoxType> = ({dispatch, newMessageText}) => {
    const msgInput: RefObject<HTMLTextAreaElement> = createRef();

    const onBtnSendClick = () => {
        dispatch(addMessageAC(newMessageText));
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