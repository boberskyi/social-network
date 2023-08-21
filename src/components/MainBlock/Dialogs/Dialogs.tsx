import React from 'react';
import styled from "styled-components";
import {DialogsFriendItm} from "./DialogsFriendItm/DialogsFriendItm";
import {Outlet} from "react-router-dom";
import {MsgSendBox} from "./MsgSendBox/MsgSendBox";
import {dialogsType} from "../../../redux/state";

type DialogsType = {
    dialogs: dialogsType[],
    newMessageText: string,
    dispatch: (action:any) => void
}
export const Dialogs:React.FC<DialogsType> = ({dialogs, newMessageText, dispatch}) => {
    return (
        <StyledDialogs>
            <StyledDialogsFriends>
                {dialogs.map(dialog => {
                    return (
                        <DialogsFriendItm key={dialog.id}
                                          id={dialog.id}
                                          name={dialog.name}
                                          lastLogin={dialog.lastLogin}
                        />
                    )
                })}
            </StyledDialogsFriends>

            <StyledDialogsMsgs>
                <Outlet />
                <MsgSendBox dispatch={dispatch} newMessageText={newMessageText}/>
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