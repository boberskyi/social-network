import React from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";

export const Messages: React.FC = () => {
    console.log(useParams())
    return (
        <StyledMessages>
            <StyledMessageWrp sender={'friend'}>
                <StyledMessage>Hi, how are you?</StyledMessage>
            </StyledMessageWrp>
            <StyledMessageWrp sender={'me'}>
                <StyledMessage>I'm fine. Sry, I'm busy a little bit 👨🏼‍💻</StyledMessage>
            </StyledMessageWrp>
            <StyledMessageWrp sender={'friend'}>
                <StyledMessage>Ok, i'll write u later, gl</StyledMessage>
            </StyledMessageWrp>
            <StyledMessageWrp sender={'friend'}>
                <StyledMessage>Call me at 10a.m</StyledMessage>
            </StyledMessageWrp>
        </StyledMessages>
    );
};

const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
interface StyledMessageWrpType {
    sender: 'friend' | 'me'
}
const StyledMessageWrp = styled.div<StyledMessageWrpType>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${(props) => {
    return props.sender === 'me' ? 'flex-end' : 'flex-start'
  }
  }};
`
const StyledMessage = styled.div`

`