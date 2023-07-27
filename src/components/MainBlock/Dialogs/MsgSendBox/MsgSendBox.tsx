import React from 'react';
import styled from "styled-components";

export const MsgSendBox = () => {
    return (
        <StyledMsgSendBox>
            <input type="text"/>
            <button>Send</button>
        </StyledMsgSendBox>
    );
};

const StyledMsgSendBox = styled.div`
  
`