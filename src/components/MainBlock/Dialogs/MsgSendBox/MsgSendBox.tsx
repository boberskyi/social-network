import React, {ChangeEvent, createRef, RefObject} from 'react';
import styled from 'styled-components';

type MsgSendBoxType = {
    newMessageText: string | undefined
    onBtnSendClick: () => void
    onTextareaChange: (newText:string) => void
}

export const MsgSendBox:React.FC<MsgSendBoxType> = ({newMessageText, ...props}) => {
    const msgInput: RefObject<HTMLTextAreaElement> = createRef();

    const onBtnSendClick = () => props.onBtnSendClick();

    const onTextareaChange = (e:ChangeEvent<HTMLTextAreaElement>) => props.onTextareaChange(e.currentTarget.value);

    return (
        <StyledMsgSendBox>
            <textarea value={newMessageText} onChange={onTextareaChange} ref={msgInput}></textarea>
            <button onClick={onBtnSendClick}>Send</button>
        </StyledMsgSendBox>
    );
};

const StyledMsgSendBox = styled.div`
  
`