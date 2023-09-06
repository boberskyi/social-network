import React from 'react';
import styled from "styled-components";
import {MessagesType} from "../../../../redux/store";

type MessagesComponentType = {
    messages: MessagesType[]
}
export const Messages: React.FC<MessagesComponentType> = ({...props}) => {
    return (
        <StyledMessages>
            {/*{id}*/}
            {props.messages.map(message => {
                return (
                    <StyledMessageWrp key={message.id} sender={message.sender}>
                        <StyledMessage>{message.text}</StyledMessage>
                    </StyledMessageWrp>
                )
            })}
        </StyledMessages>
    );
};

const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`
export interface StyledMessageWrpType {
    sender: string
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
  background-color: rgba(13, 199, 245, .3);
  max-width: 50%;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 5px;
  font-size: 12px;
`