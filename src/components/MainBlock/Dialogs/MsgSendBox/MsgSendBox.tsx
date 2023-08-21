import React, {ChangeEvent, createRef, RefObject} from 'react';
import styled from 'styled-components';

type MsgSendBoxType = {
    dispatch: (action:any) => void
    newMessageText: string
}
export const MsgSendBox:React.FC<MsgSendBoxType> = ({dispatch, newMessageText}) => {
    const msgInput: RefObject<HTMLTextAreaElement> = createRef();

    const onBtnSendClick = () => {
        let newMsg = msgInput.current?.value;
        dispatch({type: 'ADD-MESSAGE', newText: newMsg});
    }

    const onTextareaChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type:'UPDATE-NEW-MESSAGE', newText: e.currentTarget.value });
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