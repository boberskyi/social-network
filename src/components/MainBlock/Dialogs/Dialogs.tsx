import React from 'react';
import styled from "styled-components";
import {DialogsFriendItm} from "./DialogsFriendItm/DialogsFriendItm";
import {Outlet} from "react-router-dom";
import {MsgSendBox} from "./MsgSendBox/MsgSendBox";
import {DialogsType} from "../../../redux/dialogs-reducer";

type DialogsComponentType = {
    newMessage:string | undefined,
    dialogs: DialogsType[],
    onBtnSendClick: () => void,
    onTextareaChange: (newText:string) => void
}
export const Dialogs:React.FC<DialogsComponentType> = ({...props}) => {
    return (
        <StyledDialogs>
            <StyledDialogsFriends>
                {props.dialogs.map(dialog => {
                    return <DialogsFriendItm key={dialog.id} dialog={dialog}/>
                })}
            </StyledDialogsFriends>

            <StyledDialogsMsgs>
                <Outlet />
                <MsgSendBox newMessageText={props.newMessage}
                            onBtnSendClick={props.onBtnSendClick}
                            onTextareaChange={props.onTextareaChange}
                />
            </StyledDialogsMsgs>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`
const StyledDialogsFriends = styled.div`
  max-width: 400px;
  min-width: 400px;
  width: 100%;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  max-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`

const StyledDialogsMsgs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 30px;
  justify-content: space-between;
`